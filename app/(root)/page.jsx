"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";
import { motion } from "framer-motion";
import S25 from "/public/assets/images/samsung.png";
import iPhone15 from "/public/assets/images/iPhone.png";
import Pixel8 from "/public/assets/images/pixel9.png";
import { useState } from "react";
import Overview from "@/components/home/Overview";
import BestSellers from "@/components/home/BestSellers";
import LatestPhones from "@/components/home/NewArrivals";
import Offers from "@/components/home/Offers";
import Apple from "@/components/home/Apple";
import Samsung from "@/components/home/Samsung";
import Xiaomi from "@/components/home/Xiaomi";
import Laptops from "@/components/home/Laptops";
import Accessories from "@/components/home/Accessories";

const overviewImages = [S25, iPhone15, Pixel8];

const slides = [
    {
        image: S25,
        title: "Samsung S25 Ultra",
        description: "Experience ultra-fast speed, stunning display, pro camera & long battery life.",
    },
    {
        image: iPhone15,
        title: "iPhone 15 Pro Max",
        description: "Revolutionary titanium design, A17 Pro chip, and mind-blowing cameras.",
    },
    {
        image: Pixel8,
        title: "Google Pixel 8",
        description: "AI-powered photography, 7 years of updates, and incredible battery life.",
    },
];

const page = () => {

    return <section className="container">
        <div className="section-w">
            {/* Hero section */}
            <div className=" bg-gradient-to-r from-gray-900 to-gray-700 h-[500px] lg:h-[400px] rounded-xl flex justify-center items-center not-first:">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{
                        clickable: true,
                        el: ".custom-pagination"
                    }}
                    loop={true}
                    autoplay={{ delay: 30000 }}
                    className="w-full"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between px-4 sm:px-8 text-white">
                                {/* Text Section */}

                                <div className="w-[70%] lg:w-[50%]">
                                    <p className="text-primary font-semibold text-md uppercase tracking-wide">
                                        {slide.title}
                                    </p>
                                    <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold leading-tight">
                                        {slide.description}
                                    </h2>
                                    <button className="bg-primary px-6 py-2 rounded-md text-lg font-semibold mt-4 shadow-lg hover:bg-secondary transition-all duration-300">
                                        Buy Now
                                    </button>
                                </div>

                                {/* Image Section */}
                                <div className="flex justify-center items-center">
                                    <Image
                                        src={slide.image}
                                        alt={slide.title}
                                        width={400}
                                        height={400}
                                        className="w-[250px] sm:w-[270px] md:w-[300px] lg:w-[400px] hover:scale-105 transition-transform duration-300"
                                    />
                                </div>


                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="custom-pagination  transform text-center"></div>
            {/* Overview */}
            <div >
                <Overview />
            </div>
            {/* Best Sellers */}
            <div className="mt-10">
                <h1 className="text-2xl font-medium">Best Sellers</h1>
                <BestSellers />
            </div>
            {/* New Arrivals */}
            <div className="mt-10">
                <h1 className="text-2xl font-medium">New Arrivals</h1>
                <LatestPhones />
            </div>
            {/* Offers */}
            <div className="mt-10">
                <h1 className="text-2xl font-medium">Offers</h1>
                <Offers />
            </div>
            {/* Top Brands */}
            <div className="mt-10">
                <h1 className="text-2xl font-medium">Top Brands</h1>
                <Apple />
                <Samsung />
                <Xiaomi />
            </div>
            {/* Laptops */}
            <div className="mt-10">
                <h1 className="text-2xl font-medium">Laptops</h1>
                <Laptops />
            </div>
            {/* Accessories and Ad-ons */}
            <div className="mt-10">
                <h1 className="text-2xl font-medium">Accessories and Ad-ons</h1>
                <Accessories />
            </div>
        </div>
    </section>;
};

export default page;
