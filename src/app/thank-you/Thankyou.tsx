"use client"

import { useQuery } from "@tanstack/react-query";
import { getPaymentStatus } from "./actions";
import { useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import Confetti from "react-dom-confetti";
import { useEffect, useState } from "react";

const Thankyou = () => {
    const [showConfetti, setShowConfetti] = useState(false);
    const searchParams = useSearchParams();
    const orderId = searchParams.get('orderId') || ''

    const { data } = useQuery({
        queryKey: ['get-payment-status'],
        queryFn: async () => await getPaymentStatus({ orderId }),
        retry: true,
        retryDelay: 500
    })

    useEffect(() => (
        setShowConfetti(true)
    ))

    if (data === undefined) {
        return (
            <div className="w-full mt-24 flex justify-center">
                <div className="flex flex-col items-center gap-2">
                    <Loader2 className="h-8 w-8 animate-spin text-zinc-500" />
                    <h3 className="font-semibold text-xl">Loading your order...</h3>
                    <p>This won't take long</p>
                </div>
            </div>
        )
    }

    if (data === false) {
        return (
            <div className="w-full mt-24 flex justify-center">
                <div className="flex flex-col items-center gap-2">
                    <Loader2 className="h-8 w-8 animate-spin text-zinc-500" />
                    <h3 className="font-semibold text-xl">Verifying your payment...</h3>
                    <p>This might take a moment</p>
                </div>
            </div>
        )
    }

    const { configuration, billingAddress, shippingAddress, amount } = data;
    const { color } = configuration;

    return (
        <>        <div aria-hidden="true" className="pointer-events-none select-none absolute 
                inset-0 overflow-hidden flex justify-center">
            <Confetti active={showConfetti} config={{ elementCount: 100, spread: 200 }} />
        </div>

            <div className="bg-white">
                <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                    <div className="max-w-xl">
                        <p className="text-xl font-medium text-primary">Thank you {billingAddress?.name} 🥰</p>
                        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
                            Your case is on the way!
                        </h1>
                        <p>We've recieved your order and are now processing it. </p>
                        <div className="mt-12 font-medium text-sm">
                            <div className="text-zinc-900">Order number</div>
                            <p className="mt-2 text-zinc-500">{orderId}</p>
                        </div>

                    </div>

                    <div className="flex space-x-6 overflow-hidden mt-4 rounded-xl bg-gray-900/5 ring-1 ring-inset
                     ring-gray-900/10 lg:rounded-2xl">
                        
                     </div>

                </div>
            </div>
        </>

    )

}

export default Thankyou;