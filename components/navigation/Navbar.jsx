"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import AccountDropDown from './AccountDropDown'

import searchIcon from '/public/assets/icons/search.png';
import closeIcon from '/public/assets/icons/close.png';
import cartIcon from '/public/assets/icons/cart.png';
import rightArrow from '/public/assets/icons/right-arrow.png';

const categories = ["Apple", "Samsung", "Xiaomi", "Redmi", "Headphones", "Earpods", "Laptops", "Accessories"];


const Navbar = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);


    return (
        <section className='container'>
            {/* Header */}
            <header className='section-w flex justify-between items-center h-[70px]'>
                <h1 className='text-2xl font-bold text-primary cursor-pointer hover:opacity-80 transition-all duration-300'>
                    Store Center
                </h1>

                <form className='relative hidden lg:block' onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        placeholder='What are you looking for today...'
                        className='border-2 py-2 px-4 rounded-full w-[400px] border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary'
                        onClick={() => setIsSearchOpen(true)}
                    />
                    <button type="submit" className='absolute top-1/2 right-3 transform -translate-y-1/2'>
                        <Image
                            src={searchIcon}
                            alt='Search icon'
                            width={20}
                            height={20}
                        />
                    </button>
                </form>

                <div className='flex justify-center items-center lg:gap-10 gap-4'>
                    <Image
                        src={searchIcon}
                        alt='Search icon'
                        width={20}
                        height={20}
                        className='lg:hidden'
                        onClick={() => setIsSearchOpen(true)}
                    />
                    <AccountDropDown />

                    <div className='flex  justify-center items-center gap-3 relative'>
                        <Image
                            src={cartIcon}
                            alt='Cart icon'
                            width={24}
                            height={24}
                        />
                        <p className='hidden lg:block font-medium'>Cart</p>
                        <p className='absolute bg-primary w-4 h-4 rounded-full text-center text-xs -top-2 left-5 text-white font-bold'>2  </p>
                    </div>
                </div>
            </header>
            {isSearchOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/80 flex items-start justify-center pt-24 px-4 sm:px-0"
                    onClick={() => setIsSearchOpen(false)}
                >
                    <motion.div
                        className="bg-white rounded-xl shadow-lg w-full max-w-xl"
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.3 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Search Bar */}
                        <div className="relative p-6 border-b border-gray-200 flex items-center gap-3">
                            <input
                                type="text"
                                placeholder="Search products or categories..."
                                className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                            <button
                                className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition"
                            >
                                <Image src={searchIcon} alt="Search" width={30} height={30} className='sm:hidden' />
                                <span className="hidden sm:inline">Search</span>
                            </button>
                            <button
                                onClick={() => setIsSearchOpen(false)}
                                className="p-2 rounded-full hover:bg-gray-100 transition"
                            >
                                <Image src={closeIcon} alt="Close search" width={16} height={16} />
                            </button>
                        </div>

                        {/* Categories */}
                        <div className="max-h-60 overflow-y-auto p-4 space-y-2">
                            {categories.map((category) => (
                                <div
                                    key={category}
                                    className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-transform hover:scale-[1.02]"
                                >
                                    <p className="text-gray-700 hover:text-primary font-medium">
                                        {category}
                                    </p>
                                    <Image
                                        src={rightArrow}
                                        alt="Navigate to category"
                                        width={20}
                                        height={20}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Optional: Footer or popular searches */}
                        <div className="px-6 py-4 border-t border-gray-200 text-sm text-gray-500">
                            Try searching: <span className="text-primary">“iPhone 15”</span>, <span className="text-primary">“Smart Watches”</span>, ...
                        </div>
                    </motion.div>
                </div>
            )}

        </section>
    )
}

export default Navbar
