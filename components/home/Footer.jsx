"use client";

import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 mt-20">
            <div className="container">
                <div className="section-w flex flex-col md:flex-row justify-between items-start py-8 px-4 md:px-0 space-y-10 md:space-y-0">
                    {/* Company Description */}
                    <div className="w-full md:w-1/3">
                        <p className=" leading-relaxed">
                            At <span className="text-primary font-semibold">Store Centre</span>, our customers are our top priority.
                            We're dedicated to providing exceptional service and support to meet your needs.
                            Contact us today and experience our commitment to your satisfaction.
                        </p>
                        <p className="mt-4 text-white">
                            <span className="text-xiaomi-color font-medium">Email:</span>{" "}
                            <span className="hover:underline cursor-pointer">smartmobicell@gmail.com</span>
                        </p>
                        <p className="mt-1 text-white">
                            <span className="text-xiaomi-color font-medium">Phone:</span>{" "}
                            <span className="hover:underline cursor-pointer">+254 723 456 723</span>
                        </p>
                    </div>

                    {/* Categories */}
                    <div>
                        <h2 className="text-primary font-semibold mb-2">Categories</h2>
                        <ul className="space-y-2 ">
                            <li>Smartphones</li>
                            <li>Laptops</li>
                            <li>Watches</li>
                            <li>Screens</li>
                            <li>Headphones</li>
                        </ul>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h2 className="text-primary font-semibold mb-2">About Us</h2>
                        <ul className="space-y-2">
                            <li><Link href="/all" className="hover:underline">All Products</Link></li>
                            <li><Link href="/profile" className="hover:underline">My Account</Link></li>
                            <li><span className="hover:underline cursor-pointer">About Us</span></li>
                            <li><span className="hover:underline cursor-pointer">Privacy Policy</span></li>
                            <li><span className="hover:underline cursor-pointer">Terms and Conditions</span></li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h2 className="text-primary font-semibold mb-2">Reach Us Here</h2>
                        <ul className="space-y-2">
                            <li><span className="hover:underline cursor-pointer">Facebook</span></li>
                            <li><span className="hover:underline cursor-pointer">X (Twitter)</span></li>
                            <li><span className="hover:underline cursor-pointer">Instagram</span></li>
                            <li><span className="hover:underline cursor-pointer">TikTok</span></li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="text-center text-sm py-4 border-t border-gray-700">
                    © {new Date().getFullYear()} Store Centre. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
