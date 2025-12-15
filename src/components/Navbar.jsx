import { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Disable body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
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
                                stroke={scrolled ? "#FF6B35" : "white"}
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-colors duration-300"
                            />
                            <path
                                d="M2 17L12 22L22 17"
                                stroke={scrolled ? "#FF6B35" : "white"}
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-colors duration-300"
                            />
                            <path
                                d="M2 12L12 17L22 12"
                                stroke={scrolled ? "#FF6B35" : "white"}
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-colors duration-300"
                            />
                        </svg>
                    </div>
                    <span className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                        TravelNow
                    </span>
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-8">
                    {['Destinations', 'Why Us', 'Reviews', 'Contact'].map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase().replace(' ', '-')}`}
                                className={`font-medium transition-colors duration-200 relative group ${scrolled ? 'text-gray-600 hover:text-orange-500' : 'text-white/90 hover:text-white'}`}
                            >
                                {item}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Account Button */}
                <button className={`hidden md:flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg ${scrolled ? 'bg-orange-500 hover:bg-orange-600 text-white hover:shadow-orange-500/50' : 'bg-orange-500 hover:bg-orange-600 text-white hover:shadow-orange-500/50'}`}>
                    <User size={20} />
                    Account Login
                </button>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden fixed inset-0 z-[60] bg-white transition-transform duration-300 h-screen w-screen overflow-y-auto">
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
                            {['Destinations', 'Why Us', 'Reviews', 'Contact'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                                    className="text-lg font-medium text-gray-600 hover:text-orange-500 transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>

                        {/* Mobile Menu Footer */}
                        <div className="p-6 border-t border-gray-100">
                            <button className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg shadow-orange-500/20">
                                <User size={20} />
                                Account Login
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
