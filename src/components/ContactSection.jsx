import React from 'react';

const ContactSection = () => {
    return (
        <section id="contact" className="py-20 px-6 lg:px-12 bg-white">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-gray-500 uppercase tracking-wider text-sm font-medium">
                        Get in Touch
                    </span>
                    <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mt-4 mb-6">
                        Talk to our <span className="text-orange-500">travel experts</span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                        Planning a trip? Tell us a little about your plans and one of our travel experts will
                        get back with a custom itinerary and pricing within 24 hours.
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                        {/* Full Name */}
                        <div className="space-y-2">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Full name*
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="John Doe"
                                className="w-full border-b border-gray-300 py-3 focus:border-orange-500 outline-none transition-colors placeholder-gray-300"
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address*
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="you@domain.com"
                                className="w-full border-b border-gray-300 py-3 focus:border-orange-500 outline-none transition-colors placeholder-gray-300"
                            />
                        </div>

                        {/* Mobile Number */}
                        <div className="space-y-2">
                            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                                Mobile number*
                            </label>
                            <input
                                type="tel"
                                id="mobile"
                                placeholder="+91 98XXXXXXXX"
                                className="w-full border-b border-gray-300 py-3 focus:border-orange-500 outline-none transition-colors placeholder-gray-300"
                            />
                        </div>

                        {/* Country */}
                        <div className="space-y-2">
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                Country of residence
                            </label>
                            <div className="relative">
                                <select
                                    id="country"
                                    className="w-full border-b border-gray-300 py-3 focus:border-orange-500 outline-none transition-colors bg-transparent appearance-none text-gray-500"
                                    defaultValue=""
                                >
                                    <option value="" disabled>Select one...</option>
                                    <option value="us">United States</option>
                                    <option value="uk">United Kingdom</option>
                                    <option value="in">India</option>
                                    <option value="au">Australia</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>

                        {/* Travel Dates */}
                        <div className="space-y-2">
                            <label htmlFor="dates" className="block text-sm font-medium text-gray-700">
                                Preferred travel dates
                            </label>
                            <input
                                type="text"
                                id="dates"
                                placeholder="e.g. 10 Oct 2025 - 17 Oct 2025"
                                className="w-full border-b border-gray-300 py-3 focus:border-orange-500 outline-none transition-colors placeholder-gray-300"
                            />
                        </div>

                        {/* Budget */}
                        <div className="space-y-2">
                            <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
                                Budget (per person)
                            </label>
                            <input
                                type="text"
                                id="budget"
                                placeholder="e.g. $5,000 - $10,000"
                                className="w-full border-b border-gray-300 py-3 focus:border-orange-500 outline-none transition-colors placeholder-gray-300"
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message*
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            placeholder="Tell us your destination, must-see places, special requests..."
                            className="w-full border-b border-gray-300 py-3 focus:border-orange-500 outline-none transition-colors placeholder-gray-300 resize-none"
                        ></textarea>
                    </div>

                    {/* Footer & Button */}
                    <div className="space-y-8 pt-4">
                        <div className="border-t border-gray-200 pt-8">
                            <p className="text-gray-500 text-sm leading-relaxed">
                                We respect your privacy. Your details are used only to plan your trip and will not be shared.
                                By submitting, you agree to receive emails/calls about your booking.
                            </p>
                        </div>

                        <button
                            type="submit"
                            className="bg-orange-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            Request a Quote
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;
