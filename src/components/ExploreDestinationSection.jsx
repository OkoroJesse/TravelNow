const ExploreDestinationSection = () => {
    const destinations = [
        {
            id: 1,
            name: "Paris",
            trips: "14 Trips",
            image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 2,
            name: "Italy",
            trips: "15 Trips",
            image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 3,
            name: "Japan",
            trips: "12 Trips",
            image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 4,
            name: "India",
            trips: "24 Trips",
            image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 5,
            name: "Greece",
            trips: "25 Trips",
            image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 6,
            name: "Thailand",
            trips: "20 Trips",
            image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1000&auto=format&fit=crop"
        }
    ];

    return (
        <section className="py-20 px-6 lg:px-12 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center space-y-6 mb-16">
                    <h2 className="text-5xl lg:text-6xl font-bold text-gray-900">
                        Explore Destination
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Handpicked travel experiences designed to give you the best of every destination—at the best value.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destinations.map((destination) => (
                        <div key={destination.id} className="group relative h-[450px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                            {/* Background Image */}
                            <img
                                src={destination.image}
                                alt={destination.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-between p-6">
                                {/* Trip Info */}
                                <div className="text-white">
                                    <p className="text-sm font-medium opacity-90">{destination.trips}</p>
                                    <p className="text-xs opacity-75">Packages</p>
                                </div>

                                {/* Bottom Content */}
                                <div className="flex items-center justify-between">
                                    <h3 className="text-4xl font-bold text-white">
                                        {destination.name}
                                    </h3>
                                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors duration-300">
                                        <svg className="w-6 h-6 text-gray-900 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L12.17 12z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExploreDestinationSection;
