import React from 'react';
import Image from 'next/image';
import { LiaShoppingCartSolid } from "react-icons/lia";


const ProductCard = ({ name, price, oldPrice, image }) => (
    <div className="space-y-2">
        <div className="bg-gray-100 rounded-md flex justify-center items-center h-[240px] sm:h-[270px] relative">
            <Image src={image}
                alt={name}
                width={220}
                height={220}
                className="rounded-md"
            />
            <LiaShoppingCartSolid className="absolute bg-white  rounded-full p-1 top-2 right-2 hover:scale-105 transition duration-300" size={30}/>
        </div>
        <h2 className="font-medium text-xl">{name}</h2>
        <p className="line-clamp-2 text-gray-600 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem laboriosam iure assumenda.
        </p>
        <div className="flex justify-between items-center mt-2 relative">
            <p className="font-medium text-lg text-primary">Ksh {price.toLocaleString()}</p>
            {oldPrice && (
                <p className="font-medium absolute -bottom-3 left-4 text-gray-400 line-through">
                    Ksh {oldPrice.toLocaleString()}
                </p>
            )}
            <button className="font-medium px-4 py-1 border rounded-full border-gray-300 hover:bg-secondary hover:border-none hover:text-white transition-all duration-300 hidden sm:block">
                Buy Now
            </button>
        </div>
    </div>
);

export default ProductCard;
