import { Check } from 'lucide-react';

const DiscoverSection = () => {
    return (
        <section className="py-20 px-6 lg:px-12 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column - Image Grid */}
                    <div className="relative h-[600px] w-full animate-in slide-in-from-left duration-1000">
                        <div className="grid grid-cols-2 gap-4 h-full">
                            {/* Large Vertical Image */}
                            <div className="col-span-1 h-full">
                                <div className="h-full w-full rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                                    <img
                                        src="/dubai-skyline.png"
                                        alt="Dubai Skyline"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Right Column of Grid - Two Stacked Images */}
                            <div className="col-span-1 flex flex-col gap-4 h-full">
                                <div className="h-1/2 w-full rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 delay-100">
                                    <img
                                        src="/tropical-beach.png"
                                        alt="Tropical Beach"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="h-1/2 w-full rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 delay-200">
                                    <img
                                        src="/mountain-hiker.png"
                                        alt="Mountain Hiking"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[100px] rounded-full"></div>
                    </div>

                    {/* Right Column - Text Content */}
                    <div className="space-y-8 animate-in slide-in-from-right duration-1000 delay-300">
                        {/* Rating */}
                        <div className="flex items-center gap-3">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-5 h-5 text-black fill-current"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="text-gray-600 font-medium">4.6 Rate by 1,24,000+ Reviews</span>
                        </div>

                        {/* Headline */}
                        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                            Discover the <br />
                            <span className="text-primary">world with us.</span>
                        </h2>

                        {/* Description */}
                        <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                            From breathtaking landscapes to cultural wonders, we craft journeys that bring your dream destinations to life. Whether you're planning a relaxing getaway or an adventure-filled expedition, our team ensures every detail is taken care of.
                        </p>

                        {/* Features List */}
                        <ul className="space-y-6 pt-4">
                            {[
                                "Premium Stays & Exclusive Deals",
                                "Tailored Packages for Every Traveler",
                                "Unmatched Support Before & During Trips"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-4 group">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                                        <Check size={14} className="text-primary group-hover:text-white transition-colors duration-300" strokeWidth={3} />
                                    </div>
                                    <span className="text-lg font-medium text-gray-800 group-hover:text-primary transition-colors duration-300">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DiscoverSection;
