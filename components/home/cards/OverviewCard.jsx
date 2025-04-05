import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';


const OverviewCard = ({ title, description, bgClass, images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [show, setShow] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShow(false);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                setShow(true);
            }, 1000);
        }, 30000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className={`flex justify-center items-center ${bgClass} rounded-md`}>
            <div className="flex flex-col pl-3 space-y-4">
                <h3>
                    <span className="bg-green-600 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide text-white">
                        {title}
                    </span>
                </h3>
                <p className="font-medium text-2xl">{description}</p>
            </div>
            <AnimatePresence mode='wait'>
                {show && (
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 0 }}
                        animate={{ opacity: 1, x: 0, rotate: [0, 0, 360] }}
                        exit={{ opacity: 0, y: 100 }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                    >
                        <Image src={images[currentIndex]} alt={title} width={300} height={300} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default OverviewCard;