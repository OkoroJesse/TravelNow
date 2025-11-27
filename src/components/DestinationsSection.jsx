import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Check, Phone } from 'lucide-react';

const destinations = [
    {
        id: 1,
        country: "Italy",
        continent: "Europe",
        image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1000&auto=format&fit=crop",
        description: "Italy is a journey through history, art, and flavors. From ancient ruins to scenic coastlines, it's every traveler's dream.",
        highlights: ["Rome", "Venice", "Florence", "Milan", "Amalfi Coast"]
    },
    {
        id: 2,
        country: "Japan",
        continent: "Asia",
        image: "/japan.png",
        description: "Experience the perfect blend of ancient tradition and modern technology. Cherry blossoms, temples, and sushi await.",
        highlights: ["Tokyo", "Kyoto", "Osaka", "Mount Fuji", "Nara"]
    },
    {
        id: 3,
        country: "Greece",
        continent: "Europe",
        image: "/greece.png",
        description: "Discover the cradle of Western civilization. White-washed buildings, crystal clear waters, and stunning sunsets.",
        highlights: ["Santorini", "Mykonos", "Athens", "Crete", "Rhodes"]
    },
    {
        id: 4,
        country: "Peru",
        continent: "South America",
        image: "/peru.png",
        description: "Explore the mysteries of the Inca Empire. Trek through the Andes and witness the breathtaking Machu Picchu.",
        highlights: ["Machu Picchu", "Cusco", "Lima", "Sacred Valley", "Amazon"]
    },
    {
        id: 5,
        country: "Australia",
        continent: "Oceania",
        image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1000&auto=format&fit=crop",
        description: "Experience the Great Barrier Reef, the Outback, and vibrant cities. A land of adventure and natural wonders.",
        highlights: ["Sydney", "Melbourne", "Great Barrier Reef", "Uluru", "Gold Coast"]
    }
];

const DestinationsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(window.innerWidth >= 1024 ? 2 : 1);

    useEffect(() => {
        const handleResize = () => {
            setItemsPerView(window.innerWidth >= 1024 ? 2 : 1);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = destinations.length - itemsPerView;

    const nextSlide = () => {
        setCurrentIndex((prev) => {
            const next = prev + 1;
            return next > maxIndex ? 0 : next;
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => {
            const previous = prev - 1;
            return previous < 0 ? maxIndex : previous;
        });
    };

    // Auto-slide effect
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [itemsPerView]);

    return (
        <section className="py-12 lg:py-16 px-4 lg:px-8 bg-white" id="destinations">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-10 space-y-4">
                    <p className="text-gray-600 font-medium tracking-widest uppercase text-xs">
                        Discover the places travelers love the most!
                    </p>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        Most popular <span className="text-orange-500">destinations</span>
                    </h2>
                    <p className="text-gray-600 max-w-xl mx-auto text-sm lg:text-base leading-relaxed">
                        From breathtaking landscapes to vibrant cultures, these destinations are handpicked to give you unforgettable memories.
                    </p>
                </div>

                {/* Slider Container */}
                <div className="relative group">
                    {/* Previous Button - Hidden on small mobile, visible on larger */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-12 z-10 p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-orange-500 transition-all duration-300 shadow-lg hidden md:block"
                        aria-label="Previous destination"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* Slider Window */}
                    <div className="overflow-hidden rounded-2xl shadow-lg bg-white border border-gray-100">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
                        >
                            {destinations.map((dest) => (
                                <div key={dest.id} className="w-full lg:w-1/2 flex-shrink-0 px-3">
                                    <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
                                        {/* Image Side */}
                                        <div className="relative h-48 md:h-auto overflow-hidden">
                                            <img
                                                src={dest.image}
                                                alt={dest.country}
                                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                            />
                                            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900">
                                                {dest.continent}
                                            </div>
                                        </div>

                                        {/* Content Side */}
                                        <div className="p-6 md:p-8 flex flex-col justify-center space-y-6 bg-white">
                                            <div>
                                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                                    {dest.country}
                                                </h3>
                                                <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
                                            </div>

                                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                                {dest.description}
                                            </p>

                                            {/* Highlights */}
                                            <div className="space-y-3">
                                                <h4 className="font-bold text-gray-900 uppercase tracking-wider text-xs">Highlights</h4>
                                                <div className="grid grid-cols-2 gap-2">
                                                    {dest.highlights.map((highlight, idx) => (
                                                        <div key={idx} className="flex items-center gap-1.5 text-gray-600">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                                                            <span className="text-xs md:text-sm font-medium">{highlight}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Action & Contact */}
                                            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                                <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-md hover:shadow-orange-200 transform hover:-translate-y-0.5 w-full sm:w-auto inline-block text-center">
                                                    Book Now
                                                </a>
                                                <div className="flex items-center gap-2 text-gray-500">
                                                    <div className="p-1.5 bg-gray-50 rounded-full">
                                                        <Phone size={16} className="text-orange-500" />
                                                    </div>
                                                    <div className="text-xs">
                                                        <p>Need help?</p>
                                                        <p className="font-bold text-gray-900">(303) 555-0123</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Next Button - Hidden on small mobile, visible on larger */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-12 z-10 p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-orange-500 transition-all duration-300 shadow-lg hidden md:block"
                        aria-label="Next destination"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Mobile Navigation Dots (Optional replacement for arrows on small screens) */}
                    <div className="flex justify-center gap-2 mt-4 md:hidden">
                        {destinations.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-2 h-2 rounded-full transition-all ${currentIndex === idx ? 'bg-orange-500 w-4' : 'bg-gray-300'}`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DestinationsSection;
