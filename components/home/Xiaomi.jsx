import React from 'react'
import ProductCard from './cards/ProductCard';

import iPhone15 from '/public/assets/images/iPhone.png';
import JBL from '/public/assets/images/jbl.png';
import GamePad from '/public/assets/images/pad.png';
import Redmi14C from '/public/assets/images/redmi14c.png';
import Tablet from '/public/assets/images/tablet.png';
import Watch from '/public/assets/images/watch.png';
import Xiaomi12 from '/public/assets/images/xiaomi12.png';
import EarPods from '/public/assets/images/earpods.png';
import { X } from 'lucide-react';

const products = [
    { name: "iPhone 15 Pro", price: 132000, oldPrice: 152000, image: iPhone15 },
    { name: "Techno Smart Watch", price: 12000, image: Watch },
    { name: "Xiaomi 12", price: 92000, image: Xiaomi12 },
    { name: "JBL Speaker", price: 32000, image: JBL },
    { name: "GamePad", price: 8500, image: GamePad },
    { name: "Redmi 14C", price: 24000, image: Redmi14C },
    { name: "Tablet", price: 56000, image: Tablet },
];

const Xiaomi = () => {
    return (
        <div className='flex mt-20 gap-4'>
            <div className=' grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8 md:gap-4 xl:gap-10 space-y-2'>
                <div className='bg-apple-2 bg-center bg-cover  rounded-md'>
                    <div className='flex flex-col justify-center items-center bg-black/40 h-full p-2 rounded-md gap-4'>
                        <h2 className='text-[27px] font-bold text-white text-center'>Xiaomi Products</h2>
                        <p className='text-gray-200 font-medium text-center'>Discover Xiaomi’s smart ecosystem with powerful devices, sleek design, and unbeatable value</p>
                        <button className='bg-primary text-white px-4 py-2 rounded-full mt-4'>Shop Now</button>
                    </div>
                </div>
                {products.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>
        </div>
    )
}

export default Xiaomi
