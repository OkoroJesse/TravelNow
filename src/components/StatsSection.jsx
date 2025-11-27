const StatsSection = () => {
    const stats = [
        { number: "12k+", label: "Happy travelers" },
        { number: "10k+", label: "Flights booked" },
        { number: "5k+", label: "Tours organized" },
        { number: "8k+", label: "Hotel stays" }
    ];

    return (
        <section className="py-12 bg-white border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center text-center group animate-in fade-in slide-in-from-bottom duration-700"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <span className="text-3xl md:text-4xl font-bold text-primary mb-2 transition-transform duration-300 group-hover:scale-110">
                                {stat.number}
                            </span>
                            <span className="text-gray-800 font-medium text-sm md:text-base leading-tight max-w-[100px] text-center">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
