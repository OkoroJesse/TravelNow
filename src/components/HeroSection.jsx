import { useState } from 'react';
import { Menu, X, Phone, User } from 'lucide-react';

const HeroSection = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <section className="relative min-h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url(/hero-image.jpg)',
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col min-h-screen">
                {/* Navigation */}
                <nav className="w-full px-6 py-6 lg:px-12">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center gap-3 group cursor-pointer">
                            <div className="relative">
                                <svg
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="transition-transform group-hover:scale-110 duration-300"
                                >
                                    <path
                                        d="M12 2L2 7L12 12L22 7L12 2Z"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M2 17L12 22L22 17"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M2 12L12 17L22 12"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <span className="text-white text-2xl font-bold tracking-tight">
                                TravelNow
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <ul className="hidden md:flex items-center gap-8">
                            <li>
                                <a
                                    href="#destinations"
                                    className="text-white/90 hover:text-white font-medium transition-colors duration-200 relative group"
                                >
                                    Destination
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#why-us"
                                    className="text-white/90 hover:text-white font-medium transition-colors duration-200 relative group"
                                >
                                    Why TravelNow
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#reviews"
                                    className="text-white/90 hover:text-white font-medium transition-colors duration-200 relative group"
                                >
                                    Reviews
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="text-white/90 hover:text-white font-medium transition-colors duration-200 relative group"
                                >
                                    Contact
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                                </a>
                            </li>
                        </ul>

                        {/* Account Button */}
                        <button className="hidden md:flex items-center gap-2 bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50">
                            <User size={20} />
                            Account Login
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                        >
                            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className="md:hidden fixed inset-0 z-50 bg-white animate-in slide-in-from-top duration-300">
                            <div className="flex flex-col h-full">
                                {/* Mobile Menu Header */}
                                <div className="flex items-center justify-between px-6 py-6 border-b border-gray-100">
                                    {/* Logo (Dark Version) */}
                                    <div className="flex items-center gap-3">
                                        <div className="relative">
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                                                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M2 17L12 22L22 17" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M2 12L12 17L22 12" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-900 text-2xl font-bold tracking-tight">
                                            TravelNow
                                        </span>
                                    </div>

                                    {/* Close Button */}
                                    <button
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-gray-500 hover:text-gray-900 transition-colors"
                                    >
                                        <X size={32} />
                                    </button>
                                </div>

                                {/* Mobile Menu Links */}
                                <div className="flex-1 px-6 py-8 flex flex-col gap-6">
                                    <a
                                        href="#destinations"
                                        className="text-lg font-medium text-gray-600 hover:text-primary transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Destination
                                    </a>
                                    <a
                                        href="#why-us"
                                        className="text-lg font-medium text-gray-600 hover:text-primary transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Why TravelNow
                                    </a>
                                    <a
                                        href="#reviews"
                                        className="text-lg font-medium text-gray-600 hover:text-primary transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Reviews
                                    </a>
                                </div>

                                {/* Mobile Menu Footer */}
                                <div className="p-6 border-t border-gray-100">
                                    <button className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-600 text-white px-6 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg shadow-primary/20">
                                        <User size={20} />
                                        Account Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </nav>

                {/* Hero Content */}
                <div className="flex-1 flex items-center justify-center px-6 pb-20">
                    <div className="max-w-5xl mx-auto text-center space-y-8">
                        {/* Rating Badge */}
                        <div className="inline-flex flex-col items-center gap-3 animate-in fade-in slide-in-from-top duration-700">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-6 h-6 text-yellow-400 fill-current drop-shadow-lg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-white/90 text-sm font-medium">
                                4.6 Rate by 1,24,000+ Reviews
                            </p>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-shadow animate-in fade-in slide-in-from-bottom duration-700 delay-150">
                            Discover the world,<br />
                            one journey at a time.
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light animate-in fade-in slide-in-from-bottom duration-700 delay-300">
                            Handpicked travel packages designed to make every trip unforgettable.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 animate-in fade-in slide-in-from-bottom duration-700 delay-500">
                            {/* Primary CTA */}
                            <a href="#contact" className="group relative bg-primary hover:bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 overflow-hidden inline-block">
                                <span className="relative z-10">Book your tour today</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </a>

                            {/* Contact Link */}
                            <a
                                href="tel:+13036667575"
                                className="group flex items-center gap-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-6 py-4 rounded-full transition-all duration-300 hover:scale-105 border border-white/20"
                            >
                                <div className="bg-primary p-3 rounded-full group-hover:rotate-12 transition-transform duration-300">
                                    <Phone size={20} className="text-white" />
                                </div>
                                <div className="text-left">
                                    <span className="block text-xs text-white/70 font-medium">Contact anytime</span>
                                    <span className="block text-base font-bold">(303) 666-7575</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
                    <button
                        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                        className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="text-white group-hover:translate-y-1 transition-transform duration-300"
                        >
                            <path
                                d="M12 5V19M12 19L19 12M12 19L5 12"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
