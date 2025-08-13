import { useState, useEffect } from 'react';
import type { RouterProps } from './Router';

const Portfolio = ({ setCurrentPage }: RouterProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const mockups = [
        {
            id: 1,
            title: "E-Commerce Fashion Store",
            category: "Shopify Store",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center",
            gradient: "from-green-200 to-violet-200",
            route: "ecommerce-fashion"
        },
        {
            id: 2,
            title: "Restaurant & Food Delivery",
            category: "WordPress Site",
            image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&crop=center",
            gradient: "from-green-300 to-violet-300",
            route: "restaurant-food"
        },
        {
            id: 3,
            title: "Digital Marketing Agency",
            category: "Landing Page",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
            gradient: "from-violet-200 to-green-200",
            route: "digital-marketing"
        },
        {
            id: 4,
            title: "Real Estate Platform",
            category: "Custom Website",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&crop=center",
            gradient: "from-green-200 to-violet-300",
            route: "real-estate"
        },
        {
            id: 5,
            title: "Online Learning Platform",
            category: "LMS System",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center",
            gradient: "from-violet-300 to-green-300",
            route: "online-learning-platform"
        },
        {
            id: 6,
            title: "Fitness & Wellness Center",
            category: "Business Website",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
            gradient: "from-green-300 to-violet-200",
            route: "fitness-wellness"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % mockups.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [mockups.length]);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % mockups.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + mockups.length) % mockups.length);
    const goToSlide = (index: number) => setCurrentSlide(index);
    const handleViewProject = (route: string) => setCurrentPage?.(route);

    return (
        <div className="py-20 px-6 bg-white">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8">
                        <span className="text-green-500">Our </span>
                        <span className="text-red-500">Latest </span>
                        <span className="text-emerald-500">Projects</span>
                    </h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                        Take a look at some of the stunning websites we've crafted for our clients.
                        Each project is uniquely designed to drive results and create lasting impressions.
                    </p>
                </div>

                <div className="relative">
                    <div className="relative overflow-hidden rounded-3xl bg-gray-50 border border-green-200">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {mockups.map((mockup) => (
                                <div key={mockup.id} className="w-full flex-shrink-0">
                                    <div className="relative group">
                                        <div className="bg-white rounded-t-2xl p-3 border-b border-green-200">
                                            <div className="flex items-center space-x-2">
                                                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                                <div className="flex-1 bg-green-50 rounded-md px-3 py-1 mx-4">
                                                    <div className="text-xs text-gray-600">
                                                        https://www.{mockup.title.toLowerCase().replace(/\s+/g, '')}.com
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="relative h-96 md:h-[500px] overflow-hidden">
                                            <div
                                                className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
                                                style={{ backgroundImage: `url(${mockup.image})` }}
                                            >
                                                <div className={`absolute inset-0 bg-gradient-to-br ${mockup.gradient} opacity-70`}></div>
                                            </div>

                                            <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-md shadow-lg border border-green-100">
                                                    <div className="text-xs uppercase tracking-wider text-violet-600 mb-2 font-semibold">
                                                        {mockup.category}
                                                    </div>
                                                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                                                        {mockup.title}
                                                    </h3>
                                                    <p className="text-gray-700 mb-6">
                                                        Modern, responsive design with seamless user experience and optimized performance.
                                                    </p>
                                                    <div className="flex space-x-3">
                                                        <button
                                                            onClick={() => handleViewProject(mockup.route)}
                                                            className="px-4 py-2 bg-green-200 hover:bg-green-300 transition-all duration-300 rounded-full text-sm text-black font-medium"
                                                        >
                                                            View Project
                                                        </button>
                                                        <div className="px-4 py-2 bg-violet-200 rounded-full text-sm text-black font-medium">
                                                            Live Demo
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="absolute top-4 right-4 w-20 h-20 bg-green-200 rounded-full blur-xl animate-pulse"></div>
                                            <div className="absolute bottom-4 left-4 w-16 h-16 bg-violet-200 rounded-full blur-lg animate-pulse delay-1000"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-green-300 rounded-full flex items-center justify-center text-black hover:bg-green-50 transition-all duration-300 z-10 shadow-md"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-green-300 rounded-full flex items-center justify-center text-black hover:bg-green-50 transition-all duration-300 z-10 shadow-md"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Dots */}
                    <div className="flex justify-center mt-8 space-x-3">
                        {mockups.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-3 rounded-full transition-all duration-300 ${
                                    currentSlide === index
                                        ? 'bg-gradient-to-r from-green-300 to-violet-300 w-8'
                                        : 'w-3 bg-gray-300 hover:bg-green-200'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                    {[
                        ["500+", "Projects Completed"],
                        ["98%", "Client Satisfaction"],
                        ["24/7", "Support Available"]
                    ].map(([num, label]) => (
                        <div className="text-center bg-white border border-green-200 rounded-xl p-4 hover:border-violet-200 transition-colors duration-300" key={label}>
                            <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-violet-600 bg-clip-text text-transparent mb-2">{num}</div>
                            <div className="text-gray-600">{label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
