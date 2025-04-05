import React, { useEffect, useState } from 'react';
import ProductCard from './cards/ProductCard';
import { AnimatePresence, motion } from 'framer-motion';

const newArrivals = [
    { name: "iPhone 15 Pro", price: 132000, oldPrice: 152000, image: "/assets/images/iPhone.png" },
    { name: "Techno Smart Watch", price: 12000, image: "/assets/images/watch.png" },
    { name: "Xiaomi 12", price: 92000, image: "/assets/images/xiaomi12.png" },
    { name: "JBL Speaker", price: 32000, image: "/assets/images/jbl.png" },
    { name: "GamePad", price: 8500, image: "/assets/images/pad.png" },
    { name: "Redmi 14C", price: 24000, image: "/assets/images/redmi14c.png" },
    { name: "Tablet", price: 56000, image: "/assets/images/tablet.png" },
    { name: "EarPods", price: 6000, image: "/assets/images/earpods.png" },
];

const NewArrivals = () => {
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
            setBatchIndex((prev) => (prev + 1) % Math.ceil(newArrivals.length / columns));
        }, 60000);
        return () => clearInterval(interval);
    }, [columns]);

    const goToBatch = (index) => setBatchIndex(index);

    const totalBatches = Math.ceil(newArrivals.length / columns);
    const visibleProducts = newArrivals.slice(batchIndex * columns, (batchIndex + 1) * columns);

    return (
        <div className="w-full mt-8">
            {/* Product Display */}
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
                        className={`w-3 h-3 rounded-full ${batchIndex === index ? "bg-primary" : "bg-gray-400"} transition-all duration-300`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default NewArrivals;
