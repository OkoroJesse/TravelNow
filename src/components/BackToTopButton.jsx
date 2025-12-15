import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button
            type="button"
            onClick={scrollToTop}
            className={`fixed bottom-6 left-6 z-50 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                }`}
            aria-label="Back to top"
        >
            <ChevronUp size={24} strokeWidth={3} />

            {/* Tooltip */}
            <span className="absolute left-full ml-4 bg-white text-gray-800 px-3 py-1 rounded shadow-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block">
                Back to Top
            </span>
        </button>
    );
};

export default BackToTopButton;
