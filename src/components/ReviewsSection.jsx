import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const ReviewsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const reviews = [
        {
            id: 1,
            rating: 4.5,
            text: "We booked a Bali package and it was beyond expectations. The villa stay, island tours, and cultural experiences were perfectly arranged. Definitely planning our next holiday with Escapora!",
            author: "Ms. Sneha Patel",
            location: "Ahmedabad",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
        },
        {
            id: 2,
            rating: 5,
            text: "Amazing experience with exceptional service! Every detail was perfectly planned and executed. Highly recommend for anyone looking for unforgettable travel memories.",
            author: "David Johnson",
            location: "London",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
        },
        {
            id: 3,
            rating: 4.5,
            text: "Wonderful trip! The guides were knowledgeable and friendly. All accommodations were comfortable and the itinerary was well-paced. Will definitely book again!",
            author: "Ahmed Hassan",
            location: "Cairo",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [reviews.length]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    return (
        <section className="py-20 px-6 lg:px-12 bg-[#FEF8F2]" id="reviews">
            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="text-center space-y-4 mb-16">
                    {/* Star Rating */}
                    <div className="flex flex-col items-center gap-2 mb-6">
                        <div className="flex gap-1">
                            {[...Array(4)].map((_, i) => (
                                <Star key={i} size={20} className="fill-gray-900 text-gray-900" />
                            ))}
                            <Star size={20} className="fill-gray-300 text-gray-300" />
                        </div>
                        <p className="text-gray-600 font-medium">4.6 Rate by 1,24,000+ Reviews</p>
                    </div>

                    {/* Heading */}
                    <h2 className="text-5xl lg:text-6xl font-bold text-gray-900">
                        What our clients say
                    </h2>

                    {/* Subtitle */}
                    <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                        We take pride in serving our travelers with unforgettable journeys around the world. Here's what they shared about their experiences with escapora travel world:
                    </p>
                </div>

                {/* Review Slider */}
                <div className="relative flex flex-col md:flex-row items-center gap-4 md:gap-8">
                    {/* Previous Button - Hidden on mobile */}
                    <button
                        onClick={prevSlide}
                        className="hidden md:block flex-shrink-0 p-3 rounded-full bg-white border border-gray-300 text-gray-600 hover:bg-gray-50 transition-all duration-300 z-10"
                        aria-label="Previous review"
                    >
                        <ChevronLeft size={28} />
                    </button>

                    {/* Slider Window */}
                    <div className="flex-1 overflow-hidden w-full">
                        {/* Slider Track */}
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {reviews.map((review) => (
                                <div key={review.id} className="w-full flex-shrink-0 px-2 md:px-4">
                                    <div className="flex flex-col items-center md:items-start opacity-100">
                                        {/* Stars */}
                                        <div className="flex gap-1 mb-4 md:mb-6">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={24}
                                                    className={i < Math.floor(review.rating) ? "fill-orange-500 text-orange-500" : i === Math.floor(review.rating) && review.rating % 1 !== 0 ? "fill-orange-500 text-orange-500" : "fill-gray-300 text-gray-300"}
                                                />
                                            ))}
                                        </div>

                                        {/* Review Text */}
                                        <p className="text-gray-700 text-lg md:text-2xl leading-relaxed mb-6 md:mb-8 text-center md:text-left italic">
                                            "{review.text}"
                                        </p>

                                        {/* Author Info */}
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={review.image}
                                                alt={review.author}
                                                className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
                                            />
                                            <div className="text-left">
                                                <h3 className="font-bold text-gray-900 text-base md:text-lg">
                                                    {review.author}
                                                </h3>
                                                <p className="text-gray-600 text-sm">
                                                    {review.location}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Next Button - Hidden on mobile */}
                    <button
                        onClick={nextSlide}
                        className="hidden md:block flex-shrink-0 p-3 rounded-full bg-white border border-gray-300 text-gray-600 hover:bg-gray-50 transition-all duration-300 z-10"
                        aria-label="Next review"
                    >
                        <ChevronRight size={28} />
                    </button>
                </div>

                {/* Mobile Navigation Dots */}
                <div className="flex justify-center gap-2 mt-8 md:hidden">
                    {reviews.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all ${currentIndex === idx ? 'bg-orange-500 w-4' : 'bg-gray-300'}`}
                            aria-label={`Go to review ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
