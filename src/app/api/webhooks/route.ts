import { db } from '@/db'
import { stripe } from '@/lib/stripe'
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'


export async function POST(req: Request) {
  try {
    const body = await req.text()
    const signature = headers().get('stripe-signature')

    if (!signature) {
      return new Response('Invalid signature', { status: 400 })
    }

    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )

    if (event.type === 'checkout.session.completed') {
      if (!event.data.object.customer_details?.email) {
        throw new Error('Missing user email')
      }

      const session = event.data.object as Stripe.Checkout.Session

      const { userId, orderId } = session.metadata || {
        userId: null,
        orderId: null,
      }

      if (!userId || !orderId) {
        throw new Error('Invalid request metadata')
      }

      // const billingAddress = session.customer_details!.address
      // const shippingAddress = session.shipping_details!.address

      //   await db.order.update({
      //   where: {
      //     id: orderId,
      //   },
      //   data: {
      //     isPaid: true,
      //     shippingAddress: {
      //       create: {
      //         name: session.customer_details!.name!,
      //         city: shippingAddress!.city!,
      //         country: shippingAddress!.country!,
      //         postalCode: shippingAddress!.postal_code!,
      //         street: shippingAddress!.line1!,
      //         state: shippingAddress!.state!,
      //         phoneNumber: session.customer_details?.phone!
      //       },
      //     },
      //     billingAddress: {
      //       create: {
      //         name: session.customer_details!.name!,
      //         city: billingAddress!.city!,
      //         country: billingAddress!.country!,
      //         postalCode: billingAddress!.postal_code!,
      //         street: billingAddress!.line1!,
      //         state: billingAddress!.state!,
      //         phoneNumber: session.customer_details?.phone!
      //       },
      //     },
      //   },
      // })


      const customerDetails = session.customer_details
      const shippingDetails = session.shipping_details

      const updateData: any = {
        isPaid: true,
      }

      if (customerDetails) {
        updateData.billingAddress = {
          create: {
            name: customerDetails.name || '',
            city: customerDetails.address?.city || '',
            country: customerDetails.address?.country || '',
            postalCode: customerDetails.address?.postal_code || '',
            street: customerDetails.address?.line1 || '',
            state: customerDetails.address?.state || '',
            phoneNumber: customerDetails.phone || '',
          },
        }
      }

      if (shippingDetails) {
        updateData.shippingAddress = {
          create: {
            name: shippingDetails.name || '',
            city: shippingDetails.address?.city || '',
            country: shippingDetails.address?.country || '',
            postalCode: shippingDetails.address?.postal_code || '',
            street: shippingDetails.address?.line1 || '',
            state: shippingDetails.address?.state || '',
            phoneNumber: customerDetails?.phone || '',
          },
        }
      }

      await db.order.update({
        where: {
          id: orderId,
        },
        data: updateData,
      })
    }

    return NextResponse.json({ result: event, ok: true })
  } catch (err) {
    console.error("webhook error",err)

    return NextResponse.json(
      { message: 'Something went wrong', ok: false },
      { status: 500 }
    )
  }
}