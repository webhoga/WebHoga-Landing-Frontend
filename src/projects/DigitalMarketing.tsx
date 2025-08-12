import type { RouterProps } from '../Router';

const DigitalMarketing = ({ setCurrentPage }: RouterProps) => {
    const services = [
        {
            id: 1,
            name: "SEO Optimization",
            price: "$299/mo",
            image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=500&fit=crop"
        },
        {
            id: 2,
            name: "Social Media Management",
            price: "$199/mo",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=500&fit=crop"
        },
        {
            id: 3,
            name: "PPC Advertising",
            price: "$499/mo",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=500&fit=crop"
        },
        {
            id: 4,
            name: "Content Marketing",
            price: "$349/mo",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=500&fit=crop"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
            {/* Navigation */}
            <nav className="bg-white shadow-lg sticky top-0 z-50">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => setCurrentPage('home')}
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                            >
                                ← Back to Portfolio
                            </button>
                            <div className="h-6 border-l border-gray-300"></div>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                DigitalBoost
                            </h1>
                        </div>
                        <div className="flex items-center space-x-6">
                            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
                            <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</a>
                            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
                            <div className="relative">
                                <svg className="w-6 h-6 text-gray-700 hover:text-blue-600 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">4</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-cyan-600 text-white">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative container mx-auto px-6 py-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-5xl md:text-6xl font-bold mb-6">
                                Digital Growth
                                <span className="block">That Delivers</span>
                            </h2>
                            <p className="text-xl mb-8 text-blue-100">
                                Transform your business with data-driven digital marketing strategies that generate leads, boost sales, and maximize ROI.
                            </p>
                            <div className="flex space-x-4">
                                <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transform hover:scale-105 transition-all duration-300">
                                    Get Started
                                </button>
                                <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300">
                                    Free Audit
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-cyan-600/30 rounded-3xl blur-3xl"></div>
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=700&fit=crop"
                                alt="Digital Marketing Dashboard"
                                className="relative z-10 rounded-3xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Services */}
            <div className="py-20 px-6">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Services</h2>
                        <p className="text-xl text-gray-600">Comprehensive digital solutions to accelerate your growth</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service) => (
                            <div key={service.id} className="group">
                                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                                    <div className="aspect-[4/5] overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        <button className="w-full bg-white/90 backdrop-blur-sm text-gray-800 font-semibold py-3 rounded-xl hover:bg-white transition-colors">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-4 text-center">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.name}</h3>
                                    <p className="text-2xl font-bold text-blue-600">{service.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="py-16 px-6 bg-white">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div className="group">
                            <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">500+</div>
                            <div className="text-gray-600">Clients Served</div>
                        </div>
                        <div className="group">
                            <div className="text-4xl font-bold text-cyan-600 mb-2 group-hover:scale-110 transition-transform">250%</div>
                            <div className="text-gray-600">Average ROI</div>
                        </div>
                        <div className="group">
                            <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">1M+</div>
                            <div className="text-gray-600">Leads Generated</div>
                        </div>
                        <div className="group">
                            <div className="text-4xl font-bold text-cyan-600 mb-2 group-hover:scale-110 transition-transform">98%</div>
                            <div className="text-gray-600">Client Retention</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="py-16 px-6 bg-gradient-to-r from-blue-500 to-cyan-600">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Ready to Scale Your Business?</h2>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                        Get exclusive marketing insights, growth strategies, and be the first to know about our latest tools and services.
                    </p>
                    <div className="flex max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-6 py-4 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                        <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-r-full hover:bg-blue-50 transition-colors">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 px-6">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                DigitalBoost
                            </h3>
                            <p className="text-gray-400">Empowering businesses with cutting-edge digital marketing solutions.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Services</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-blue-400 transition-colors">SEO</a></li>
                                <li><a href="#" className="hover:text-blue-400 transition-colors">PPC</a></li>
                                <li><a href="#" className="hover:text-blue-400 transition-colors">Social Media</a></li>
                                <li><a href="#" className="hover:text-blue-400 transition-colors">Analytics</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-blue-400 transition-colors">Case Studies</a></li>
                                <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Follow Us</h4>
                            <div className="flex space-x-4">
                                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 cursor-pointer transition-colors">
                                    <span className="text-sm font-bold">f</span>
                                </div>
                                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 cursor-pointer transition-colors">
                                    <span className="text-sm font-bold">in</span>
                                </div>
                                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 cursor-pointer transition-colors">
                                    <span className="text-sm font-bold">t</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>© 2025 DigitalBoost. Created by WebHoga - All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default DigitalMarketing;