"use client"

import Image from 'next/image'
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
                <h1 className='text-xl text-primary'>
                    Store Center
                </h1>

                <form className='relative hidden lg:block' onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        placeholder='What are you looking for today...'
                        className='border-2 py-1 px-4 rounded-md w-[400px] border-primary'
                        onClick={() => setIsSearchOpen(true)}
                    />
                    <button type="submit" className='absolute top-[25%] right-3'>
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
                        <p className='hidden lg:block'>Cart</p>
                        <p className='absolute bg-primary w-4 h-4 rounded-full text-center text-xs -top-2 left-5 text-white font-bold'>2  </p>
                    </div>
                </div>
            </header>
            {isSearchOpen && (
                <div className='fixed inset-0 flex flex-col items-center justify-center bg-black/60 z-50'>
                    <div className='max-sm:w-[90%]'>
                        <div className='flex justify-center items-center gap-4 relative'>
                            <input
                                type="text"
                                placeholder='What are you looking for today...'
                                className='py-2 px-2 sm:px-4 rounded-md w-[400px] max-sm:w-[90%] bg-white'
                            />
                            <button className="absolute top-[30%] right-24" onClick={() => setIsSearchOpen(false)} aria-label="Close search">
                                <Image
                                    src={closeIcon}
                                    alt="Close search"
                                    width={12}
                                    height={12}
                                />
                            </button>

                            <button className='bg-primary py-2 px-3 rounded-md'>Search</button>
                        </div>
                        <div className='shadow-lg bg-white rounded-md p-3 mt-6'>
                            {categories.map((category) => (
                                <div key={category} className='flex justify-between items-center py-2 border-b-2 border-bg-color hover:bg-gray-100  cursor-pointer hover:scale-105 transition-transform duration-200
 rounded-md '>
                                    <p className='text-gray-600 hover:text-primary'>{category}</p>
                                    <Image
                                        src={rightArrow}
                                        alt='Cart icon'
                                        width={24}
                                        height={24}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Navbar
