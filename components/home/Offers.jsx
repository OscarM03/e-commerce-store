"use client"

import React, { useEffect, useState } from 'react'
import iPhone15 from '/public/assets/images/iPhone.png';
import Redmi14C from '/public/assets/images/redmi14c.png';
import Image from 'next/image';

const Offers = () => {
    const offerEndDate = new Date('2025-04-10T23:59:59');

    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = offerEndDate.getTime() - now.getTime();

        if (difference <= 0) {
            return null;
        }

        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));

        return { days, hours, minutes, seconds };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    })
    return (
        <div className='mt-10'>
            <div className='grid md:grid-cols-2 gap-4 lg:gap-8'>
                {/* Offer 1 */}
                <div className='flex flex-col border justify-center items-center p-4 rounded-lg shadow-md '>
                    <div className=''>
                        {timeLeft ? (
                            <p className='font-medium text-primary'>Offer Ends In: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</p>
                        ) : (
                            <p className='text-red-600'>Offer Expired</p>
                        )}
                    </div>
                    <div className='flex justify-center items-center lg:gap-4'>
                        <Image
                            src={iPhone15}
                            width={200}
                            height={200}
                            alt="iPhone 15" className='' />
                        <div>
                            <h2 className='text-2xl font-bold'>iPhone 15 Pro</h2>
                            <p className='font-medium'>8GB RAM</p>
                            <p className='font-medium'>256GB Internal</p>
                            <p className='font-medium'>Mediatek Processor</p>
                            <p className=' font-semibold text-primary'>Ksh 132,000</p>
                            <p className='line-through text-gray-400 text-sm'>Ksh 152,000</p>
                        </div>
                    </div>
                </div>
                {/* Offer 2 */}
                <div className='flex flex-col border justify-center items-center p-4 rounded-lg shadow-md '>
                    <div className=''>
                        {timeLeft ? (
                            <p className='font-medium text-primary'>Offer Ends In: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</p>
                        ) : (
                            <p className='text-red-600'>Offer Expired</p>
                        )}
                    </div>
                    <div className='flex justify-center items-center lg:gap-4'>
                        <Image
                            src={Redmi14C}
                            width={200}
                            height={200}
                            alt="iPhone 15" className='' />
                        <div>
                            <h2 className='text-2xl font-bold'>Redmi 14C</h2>
                            <p className='font-medium'>8GB RAM</p>
                            <p className='font-medium'>256GB Internal</p>
                            <p className='font-medium'>Mediatek Processor</p>
                            <p className=' font-semibold text-primary'>Ksh 13,000</p>
                            <p className='line-through text-gray-400 text-sm'>Ksh 15,000</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offers
