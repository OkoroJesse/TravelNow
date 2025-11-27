const WhyUsSection = () => {
    const features = [
        {
            id: 1,
            icon: "✈️",
            title: "Instant booking",
            description: "No more waiting! Book your flights, hotels, and activities instantly with our hassle-free system."
        },
        {
            id: 2,
            icon: "🚗",
            title: "Pickup and drop",
            description: "Enjoy smooth and reliable transfers with our door-to-door pickup and drop service."
        },
        {
            id: 3,
            icon: "👥",
            title: "Tourist guides",
            description: "No more waiting! Book your flights, hotels, and activities instantly with our hassle-free system."
        },
        {
            id: 4,
            icon: "💰",
            title: "Friendly price",
            description: "We offer transparent pricing and value-for-money packages that suit every budget—without compromising on comfort and quality."
        }
    ];

    return (
        <section
            className="relative py-24 px-6 lg:px-12 bg-cover bg-center overflow-hidden" id="why-us"
            style={{
                backgroundImage: "url('/resort-sunset.jpg')",
                backgroundAttachment: "fixed"
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                        Why we're your
                        <br />
                        <span className="text-orange-500">perfect travel partner</span>
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        we believe travel is more than just visiting new places—it's about creating unforgettable experiences.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-3xl">
                        {features.map((feature) => (
                            <div key={feature.id} className="flex flex-col items-start space-y-4">
                                {/* Icon Circle */}
                                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-2xl shadow-lg">
                                    <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                                        {feature.id === 1 && (
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                        )}
                                        {feature.id === 2 && (
                                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-2.96-3.83-1.3 1.01 4.25 5.51 4.04-5.25z" />
                                        )}
                                        {feature.id === 3 && (
                                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                        )}
                                        {feature.id === 4 && (
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                                        )}
                                    </svg>
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="text-xl font-bold text-white">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm leading-relaxed mt-2">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;
