import React from 'react';


import iPhone15 from '/public/assets/images/iPhone.png';
import JBL from '/public/assets/images/jbl.png';
import GamePad from '/public/assets/images/pad.png';
import Redmi14C from '/public/assets/images/redmi14c.png';
import Tablet from '/public/assets/images/tablet.png';
import Watch from '/public/assets/images/watch.png';
import Xiaomi12 from '/public/assets/images/xiaomi12.png';
import EarPods from '/public/assets/images/earpods.png';
import ProductCard from './cards/ProductCard';

const products = [
    { name: "iPhone 15 Pro", price: 132000, oldPrice: 152000, image: iPhone15 },
    { name: "Techno Smart Watch", price: 12000, image: Watch },
    { name: "Xiaomi 12", price: 92000, image: Xiaomi12 },
    { name: "JBL Speaker", price: 32000, image: JBL },
    { name: "GamePad", price: 8500, image: GamePad },
    { name: "Redmi 14C", price: 24000, image: Redmi14C },
    { name: "Tablet", price: 56000, image: Tablet },
    { name: "EarPods", price: 6000, image: EarPods },
];

const Accessories = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8 md:gap-4 xl:gap-10 mt-10 space-y-2">
            {products.map((product, index) => (
                <ProductCard key={index} {...product} />
            ))}
        </div>
    );
};

export default Accessories;
