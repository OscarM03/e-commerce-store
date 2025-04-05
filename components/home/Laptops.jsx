import React, { useEffect, useState } from 'react';
import ProductCard from './cards/ProductCard';
import { AnimatePresence, motion } from 'framer-motion';

const laptopsList = [
    { name: "Asus", price: 132000, image: "/assets/images/asuslaptop.png" },
    { name: "hpEliteBook", price: 92000, image: "/assets/images/hpelitebook.png" },
    { name: "HpG7", price: 63000, image: "/assets/images/hpg7.png" },
    { name: "Lenovo", price: 72000, image: "/assets/images/lenovopad1.png" },
    { name: "Surface 7 Pro", price: 105000, image: "/assets/images/surface7pro.png" },
    { name: "hpEliteBook", price: 92000, image: "/assets/images/hpelitebook.png" },
    { name: "HpG7", price: 63000, image: "/assets/images/hpg7.png" },
];

const Laptops = () => {
    const [batchIndex, setBatchIndex] = useState(0);
    const [columns, setColumns] = useState(4);

    useEffect(() => {
        const updateColumns = () => {
            if (window.innerWidth < 768) {
                setColumns(2);
            } else if (window.innerWidth < 1280) {
                setColumns(3);
            } else {
                setColumns(4);
            }
        };

        if (typeof window !== 'undefined') {
            updateColumns();
            window.addEventListener("resize", updateColumns);
            return () => window.removeEventListener("resize", updateColumns);
        }
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setBatchIndex((prev) => (prev + 1) % Math.ceil(laptopsList.length / columns));
        }, 60000);
        return () => clearInterval(interval);
    }, [columns]);

    const goToBatch = (index) => setBatchIndex(index);

    const totalBatches = Math.ceil(laptopsList.length / columns);
    const visibleProducts = laptopsList.slice(batchIndex * columns, (batchIndex + 1) * columns);

    return (
        <div className="w-full mt-8">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8 md:gap-4 xl:gap-10 transition-all duration-500">
                <AnimatePresence mode="wait">
                    {visibleProducts.map((product, index) => (
                        <motion.div
                            key={product.name + index}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <ProductCard {...product} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-4 space-x-2">
                {Array.from({ length: totalBatches }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToBatch(index)}
                        className={`w-3 h-3 rounded-full ${batchIndex === index ? "bg-primary" : "bg-gray-400"
                            } transition-all duration-300`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Laptops;
