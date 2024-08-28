import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { Reviews } from "@/components/Reviews";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Check, Star, StarIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-50 grainy-light">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 
         xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col 
                          items-center lg:items-start">
              <div className="absolute w-28 left-0 top-20 hidden lg:block">
                <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28'>
                  <img src="panther2.png" alt="" className="w-full" />
                </div>
              </div>

              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold
            !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Place your favorite image on your <span className="bg-indigo-700 px-2 text-white">personalized</span>{' '} phone case</h1>

              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">Capture your favorite memories with a
                {' '}<span className="font-semibold">one-of-a-kind</span> phone case. CaseCanvas allows you
                to protect both your memories and your phone</p>

              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center
              sm:items-start
              ">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-indigo-700" />
                    Lightweight yet protective with shock-absorbing features
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-indigo-700" />
                    5 year print guarantee
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-indigo-700" />
                    Scratch-resistant and fade-proof design
                  </li>
                </div>
              </ul>


              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <img src="/users/user-1.jpg" alt="user-image" className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" />
                  <img src="/users/user-2.jpg" alt="user-image" className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" />
                  <img src="/users/user-3.jpg" alt="user-image" className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" />
                  <img src="/users/user-4.jpg" alt="user-image" className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" />
                  <img src="/users/user-5.jpg" alt="user-image" className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" />
                </div>

                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-indigo-700 fill-indigo-700" />
                    <Star className="h-4 w-4 text-indigo-700 fill-indigo-700" />
                    <Star className="h-4 w-4 text-indigo-700 fill-indigo-700" />
                    <Star className="h-4 w-4 text-indigo-700 fill-indigo-700" />
                    <Star className="h-4 w-4 text-indigo-700 fill-indigo-700" />
                  </div>
                  <p><span className="font-semibold">2000+</span>happy customers</p>
                </div>

              </div>

            </div>

          </div>

          <div className='col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit'>
            <div className='relative md:max-w-xl'>
              <img
                src='/your-image.png'
                className='absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block'
              />
              <img
                src='/line.png'
                className='absolute w-20 -left-6 -bottom-6 select-none'
              />
              <Phone className='w-64' imgSrc='/testimonials/4.png' />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight
            font-bold text-5xl md:text-6xl text-gray-900">
              What Our <span className="relative px-2">Customers <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-indigo-700" /> </span> Say!</h2>
            <img src="/panther1.png" alt="panther-image" className="w-40 order-0 lg:order-2" />
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-col flex-auto gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <StarIcon className="h-5 w-5 text-indigo-700 fill-indigo-700" />
                <StarIcon className="h-5 w-5 text-indigo-700 fill-indigo-700" />
                <StarIcon className="h-5 w-5 text-indigo-700 fill-indigo-700" />
                <StarIcon className="h-5 w-5 text-indigo-700 fill-indigo-700" />
                <StarIcon className="h-5 w-5 text-indigo-700 fill-indigo-600" />
              </div>
              <div className='text-lg leading-8'>
                <p>
                  "PantherCanvas has exceeded my expectations! I've had the case for almost three months, and the image clarity is still impeccable.  {' '}
                  <span className='p-0.5 bg-indigo-400 text-slate-950 font-semibold relative px-2'>
                    The case is sturdy and well-made and it's been a hit with friends and family who noticed the cool design.
                  </span>
                  My previous case's image faded quickly, but this one is holding strong."
                </p>
              </div>

              <div className="flex gap-4 mt-2">
                <img src="/users/user-1.jpg" alt="user-image" className="rounded-full h-12 w-12 object-cover" />
                <div className="flex flex-col ">
                  <p className="font-semibold">Ethan Harper</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-indigo-700" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>

            </div>


            {/* user review 2 */}
            <div className="flex flex-col flex-auto gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <StarIcon className="h-5 w-5 text-indigo-700 fill-indigo-700" />
                <StarIcon className="h-5 w-5 text-indigo-700 fill-indigo-700" />
                <StarIcon className="h-5 w-5 text-indigo-700 fill-indigo-700" />
                <StarIcon className="h-5 w-5 text-indigo-700 fill-indigo-700" />
                <StarIcon className="h-5 w-5 text-indigo-700 fill-indigo-600" />
              </div>
              <div className='text-lg leading-8'>
                <p>
                  "I've been using my CaseCanvas case for over three months now, and it's still holding up great.   {' '}
                  <span className='p-0.5 bg-indigo-400 text-slate-950 font-semibold relative px-2'>
                    The image on the case remains vibrant and clear, unlike my previous case where the image began to dull. Highly recommend!
                  </span>
                  The quality is top-notch and the design gets compliments everywhere I go.                 </p>
              </div>

              <div className="flex gap-4 mt-2">
                <img src="/users/user-3.jpg" alt="user-image" className="rounded-full h-12 w-12 object-cover" />
                <div className="flex flex-col ">
                  <p className="font-semibold">Lily Bennett</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-indigo-700" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>

            </div>
          </div>


        </MaxWidthWrapper>

        <div className="pt-16">
          <Reviews />
        </div>
      </section>

      <section>
        <MaxWidthWrapper className="py-24">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight
            font-bold text-5xl md:text-6xl text-gray-900">
                Upload your photo and get{' '}<span className="relative px-2 bg-indigo-700 text-white">your own case</span>now</h2>
            </div>
          </div>

          <div className='mx-auto max-w-6xl px-6 lg:px-8'>
            <div className='relative flex flex-col items-center md:grid grid-cols-2 gap-40'>
              <img
                src='/arrow.png'
                className='absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0'
              />

              <div className='relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl'>
                <img
                  src='/6.jpg'
                  className='rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full'
                />
              </div>

              <Phone className='w-60' imgSrc='/testimonials/6.png' />
            </div>
          </div>
          
          <ul className='mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit'>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-indigo-700 inline mr-1.5' />
              High-quality silicone material
            </li>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-indigo-700 inline mr-1.5' />
              Scratch- and fingerprint resistant coating
            </li>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-indigo-700 inline mr-1.5' />
              Wireless charging compatible
            </li>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-indigo-700 inline mr-1.5' />5 year
              print warranty
            </li>

            <div className='flex justify-center'>
              <Link
                className={buttonVariants({
                  size: 'lg',
                  className: 'mx-auto mt-8',
                })}
                href='/configure/upload'>
                Create your case now <ArrowRight className='h-4 w-4 ml-1.5' />
              </Link>
            </div>
          </ul>

        </MaxWidthWrapper>
      </section>

    </div>
  );
}
