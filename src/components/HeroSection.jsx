import { Phone } from 'lucide-react';

const HeroSection = () => {

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
                {/* Hero Content */}

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
