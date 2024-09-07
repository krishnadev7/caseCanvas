"use client"

import Phone from '@/components/Phone';
import { BASE_PRICE, PRODUCT_PRICES } from '@/config/products';
import { cn, formatPrice } from '@/lib/utils';
import { COLORS, MODELS } from '@/validators/option-validator';
import { Configuration } from '@prisma/client';
import { Check } from 'lucide-react';
import { useEffect, useState } from 'react';
import Confetti from 'react-dom-confetti'

const DesignPreview = ({ configuration }: { configuration: Configuration }) => {
    const [showConfetti, setShowConfetti] = useState(false);

    const { color, model, finish, material } = configuration;
    const tw = COLORS.find((colorModels) => colorModels.value)?.tw

    const { label: modelLabel } = MODELS.options.find(({ value }) => value === model)!

    useEffect(() => (
        setShowConfetti(true)
    ))

    return (
        <>
            <div aria-hidden="true" className="pointer-events-none select-none absolute 
                inset-0 overflow-hidden flex justify-center">
                <Confetti active={showConfetti} config={{ elementCount: 500, spread: 450 }} />
            </div>

            <div className='mt-20 grid grid-cols-1 text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-12'>
                <div className='sm:col-span-4 md:col-span-3 md:row-span-2 md:row-end-2'>
                    <Phone className={cn(`bg-${tw}`)} imgSrc={configuration.croppedImageUrl!} />
                </div>

                <div className='mt-6 sm:col-span-9 sm:mt-0 md:row-end-1'>
                    <h3 className='text-3xl font-bold tracking-tight text-gray-900'>
                        Your {modelLabel} Case
                    </h3>
                    <div className='mt-3 flex items-center gap-1.5 text-base'>
                        <Check className='h-4 w-4 text-indigo-900' />
                        In stock and ready to ship
                    </div>
                </div>

                <div className='sm:col-span-12 md:col-span-9 text-base'>
                    <div className='grid grid-cols-1 gap-y-8 border-b border-gray-200 py-8 sm:grid-cols-2 sm:gap-x-6 sm:py-6 md:py-10'>

                        <div>
                            <p className='font-medium text-zinc-950'>Highlights</p>
                            <ol className='mt-3 text-zinc-700 list-disc list-inside'>
                                <li>Wireless charging compatible</li>
                                <li>TPU shock absorption</li>
                                <li>Packaging made from recycled materials</li>
                                <li>5 year print warranty</li>
                            </ol>
                        </div>

                        <div>
                            <p className='font-medium text-zinc-950'>Materials</p>
                            <ol className='mt-3 text-zinc-700 list-disc list-inside'>
                                <li>High-quality, durable material</li>
                                <li>Scratch- and fingerprint resistant coating</li>
                            </ol>
                        </div>

                    </div>

                    <div className='mt-8'>
                        <div className='bg-gray-50 p-6 sm:rounded-lg sm:p-8'>
                            <div className='flex-root text-sm'>

                                <div className='flex items-center justify-between py-1 mt-2'>
                                    <p className='text-gray-600'>Base price</p>
                                    <p className='font-medium text-gray-900'>
                                        {formatPrice(BASE_PRICE)}
                                    </p>
                                </div>

                                {finish === 'textured' ? (
                                    <div className='flex items-center justify-between py-1 mt-2'>
                                        <p className='text-gray-600'>Textured finish</p>
                                        <p className='font-medium text-gray-900'>
                                            {formatPrice(PRODUCT_PRICES.finish.textured)}
                                        </p>
                                    </div>
                                ) : null}

                                {material === 'polycarbonate' ? (
                                    <div className='flex items-center justify-between py-1 mt-2'>
                                        <p className='text-gray-600'>Soft polycarbonate material</p>
                                        <p className='font-medium text-gray-900'>
                                            {formatPrice(PRODUCT_PRICES.material.polycarbonate)}
                                        </p>
                                    </div>
                                ) : null}

                                <div className='my-2 h-px bg-gray-200' />

                                <div className='flex items-center justify-between py-2'>
                                    <p className='font-semibold text-gray-900'>Order total</p>
                                    <p className='font-semibold text-gray-900'>
                                        
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default DesignPreview;

