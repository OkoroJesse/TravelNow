import React from 'react';
import { Send, Instagram, Youtube, Twitter, Facebook, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-20 pb-10 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-orange-500 rotate-45 transform"></div>
                            <h2 className="text-3xl font-bold">Brahamas</h2>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Turning your travel dreams into unforgettable journeys.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Send size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
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
                                <p>hello@escapora.com</p>
                                <p>Mon - Sat (9 AM - 8 PM IST)</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>
                        2025 Brahamas Travel World. | Designed with <Heart size={14} className="inline text-orange-500 fill-orange-500 mx-1" /> by brahamas.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
