import React from 'react';
import { Star, Send, Instagram, Youtube, Twitter, Facebook, Heart, Asterisk } from 'lucide-react';

const NewsletterSection = () => {
    return (
        <section className="relative text-white">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/atlantis.jpg"
                    alt="Atlantis The Palm Sunset"
                    className="w-full h-full object-cover"
                />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black/95"></div>
            </div>

            <div className="relative z-10">
                {/* Newsletter Content */}
                <div className="py-20 lg:py-32 px-6 lg:px-12">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 lg:gap-20">

                            {/* Left Content */}
                            <div className="max-w-2xl space-y-6">
                                {/* Rating */}
                                <div className="flex items-center gap-2 text-white/90">
                                    <div className="flex gap-0.5">
                                        {[...Array(4)].map((_, i) => (
                                            <Star key={i} size={16} className="fill-white text-white" />
                                        ))}
                                        <Star size={16} className="fill-white/50 text-white" />
                                    </div>
                                    <span className="text-sm font-medium">4.6 Rate by 1,24,000+ Reviews</span>
                                </div>

                                {/* Heading */}
                                <h2 className="text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                                    Travel smarter <br />
                                    with <span className="text-primary">TravelNow.</span>
                                </h2>

                                {/* Subtext */}
                                <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
                                    Join our community of travelers and receive handpicked packages, discounts, and inspiration every week.
                                </p>
                            </div>

                            {/* Right Content - Form */}
                            <div className="w-full max-w-md space-y-6">
                                <h3 className="text-2xl font-bold text-white">Stay up to date</h3>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <input
                                        type="email"
                                        placeholder="Enter your email ID"
                                        className="flex-1 bg-white text-gray-900 px-6 py-4 rounded-full outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400"
                                    />
                                    <button className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg whitespace-nowrap">
                                        Subscribe Free
                                    </button>
                                </div>

                                {/* Privacy Checkbox */}
                                <div className="flex items-center gap-3 text-white/80 group cursor-pointer">
                                    <div className="w-5 h-5 rounded-full border border-white/40 group-hover:border-white transition-colors flex items-center justify-center">
                                        {/* Checkmark can be added here if toggled */}
                                    </div>
                                    <span className="text-sm">By subscribing you agree to our Privacy Policy</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Content */}
                <div className="pt-20 pb-10 px-6 lg:px-12">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                            {/* Brand Column */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-2">
                                    <Asterisk size={32} className="text-orange-500" />
                                    <h2 className="text-3xl font-bold">TravelNow</h2>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                                    Turning your travel dreams into unforgettable journeys.
                                </p>
                                <div className="flex gap-4 pt-2">
                                    <a href="#" className="text-white hover:text-orange-500 transition-colors"><Send size={20} /></a>
                                    <a href="#" className="text-white hover:text-orange-500 transition-colors"><Instagram size={20} /></a>
                                    <a href="#" className="text-white hover:text-orange-500 transition-colors"><Youtube size={20} /></a>
                                    <a href="#" className="text-white hover:text-orange-500 transition-colors"><Twitter size={20} /></a>
                                    <a href="#" className="text-white hover:text-orange-500 transition-colors"><Facebook size={20} /></a>
                                </div>
                            </div>

                            {/* Company Links */}
                            <div>
                                <h3 className="text-lg font-bold mb-6">Company</h3>
                                <ul className="space-y-4 text-gray-400 text-sm">
                                    <li><a href="#" className="hover:text-orange-500 transition-colors">About us</a></li>
                                    <li><a href="#" className="hover:text-orange-500 transition-colors">Destination</a></li>
                                    <li><a href="#" className="hover:text-orange-500 transition-colors">Packages</a></li>
                                    <li><a href="#" className="hover:text-orange-500 transition-colors">Contact</a></li>
                                </ul>
                            </div>

                            {/* Utility Links */}
                            <div>
                                <h3 className="text-lg font-bold mb-6">Utility</h3>
                                <ul className="space-y-4 text-gray-400 text-sm">
                                    <li><a href="#" className="hover:text-orange-500 transition-colors">404 Page</a></li>
                                    <li><a href="#" className="hover:text-orange-500 transition-colors">Style Guide</a></li>
                                    <li><a href="#" className="hover:text-orange-500 transition-colors">Changelog</a></li>
                                    <li><a href="#" className="hover:text-orange-500 transition-colors">Licenses</a></li>
                                </ul>
                            </div>

                            {/* Contact Info */}
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-lg font-bold mb-4">Singapore Office:</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        3rd Floor, Sunrise Plaza,<br />
                                        Mumbai, India
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-4">Contact No.:</h3>
                                    <div className="text-gray-400 text-sm space-y-2">
                                        <p>+91 98765 43210</p>
                                        <p>hello@travelnow.com</p>
                                        <p>Mon - Sat (9 AM - 8 PM IST)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Bar */}
                        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                            <p>
                                2025 TravelNow. | Designed with <Heart size={14} className="inline text-orange-500 fill-orange-500 mx-1" /> for explorers.
                            </p>
                            <p className="hidden md:block">
                                Powered by TravelNow.
                            </p>
                            <div className="flex items-center gap-2">
                                <span>Design & Developed by</span>
                                <span className="font-bold text-white">TravelNow</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSection;
