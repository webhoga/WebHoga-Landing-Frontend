import type { RouterProps } from '../Router';

const RealEstate = ({ setCurrentPage }: RouterProps) => {
    const properties = [
        {
            id: 1,
            name: "Modern Luxury Villa",
            price: "$1,250,000",
            image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=500&fit=crop",
            beds: 4,
            baths: 3,
            sqft: "3,200"
        },
        {
            id: 2,
            name: "Downtown Penthouse",
            price: "$850,000",
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=500&fit=crop",
            beds: 3,
            baths: 2,
            sqft: "2,100"
        },
        {
            id: 3,
            name: "Suburban Family Home",
            price: "$425,000",
            image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=500&fit=crop",
            beds: 5,
            baths: 3,
            sqft: "2,800"
        },
        {
            id: 4,
            name: "Waterfront Condo",
            price: "$675,000",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=500&fit=crop",
            beds: 2,
            baths: 2,
            sqft: "1,450"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
            {/* Navigation */}
            <nav className="bg-white shadow-lg sticky top-0 z-50">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => setCurrentPage && setCurrentPage('home')}
                                className="text-gray-600 hover:text-green-600 transition-colors"
                            >
                                ← Back to Portfolio
                            </button>
                            <div className="h-6 border-l border-gray-300"></div>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                                EliteHomes
                            </h1>
                        </div>
                        <div className="flex items-center space-x-6">
                            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Buy</a>
                            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Sell</a>
                            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Rent</a>
                            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Agents</a>
                            <div className="relative">
                                <svg className="w-6 h-6 text-gray-700 hover:text-green-600 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">5</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative container mx-auto px-6 py-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-5xl md:text-6xl font-bold mb-6">
                                Find Your
                                <span className="block">Dream Home</span>
                            </h2>
                            <p className="text-xl mb-8 text-green-100">
                                Discover exceptional properties with our expert real estate team. From luxury estates to cozy condos, we help you find the perfect place to call home.
                            </p>
                            <div className="flex space-x-4">
                                <button className="px-8 py-4 bg-white text-green-600 font-semibold rounded-full hover:bg-green-50 transform hover:scale-105 transition-all duration-300">
                                    Browse Homes
                                </button>
                                <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-green-600 transition-all duration-300">
                                    Get Estimate
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-400/30 to-emerald-600/30 rounded-3xl blur-3xl"></div>
                            <img
                                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=700&fit=crop"
                                alt="Luxury Home"
                                className="relative z-10 rounded-3xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Search Section */}
            <div className="py-12 px-6 bg-white shadow-lg">
                <div className="container mx-auto">
                    <div className="bg-gray-50 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Find Your Perfect Property</h3>
                        <div className="grid md:grid-cols-5 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                                <input
                                    type="text"
                                    placeholder="City, State, ZIP"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                                    <option>All Types</option>
                                    <option>House</option>
                                    <option>Condo</option>
                                    <option>Townhouse</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Min Price</label>
                                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                                    <option>No Min</option>
                                    <option>$200K</option>
                                    <option>$500K</option>
                                    <option>$1M+</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Max Price</label>
                                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                                    <option>No Max</option>
                                    <option>$500K</option>
                                    <option>$1M</option>
                                    <option>$2M+</option>
                                </select>
                            </div>
                            <div className="flex items-end">
                                <button className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Properties */}
            <div className="py-20 px-6">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Properties</h2>
                        <p className="text-xl text-gray-600">Handpicked homes from our exclusive listings</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {properties.map((property) => (
                            <div key={property.id} className="group">
                                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                                    <div className="aspect-[4/5] overflow-hidden">
                                        <img
                                            src={property.image}
                                            alt={property.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            Featured
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        <button className="w-full bg-white/90 backdrop-blur-sm text-gray-800 font-semibold py-3 rounded-xl hover:bg-white transition-colors">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{property.name}</h3>
                                    <p className="text-2xl font-bold text-green-600 mb-3">{property.price}</p>
                                    <div className="flex justify-between text-sm text-gray-600">
                                        <span>{property.beds} beds</span>
                                        <span>{property.baths} baths</span>
                                        <span>{property.sqft} sqft</span>
                                    </div>
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
                            <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform">1,200+</div>
                            <div className="text-gray-600">Homes Sold</div>
                        </div>
                        <div className="group">
                            <div className="text-4xl font-bold text-emerald-600 mb-2 group-hover:scale-110 transition-transform">$2.5B</div>
                            <div className="text-gray-600">Total Sales</div>
                        </div>
                        <div className="group">
                            <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform">15</div>
                            <div className="text-gray-600">Days Average</div>
                        </div>
                        <div className="group">
                            <div className="text-4xl font-bold text-emerald-600 mb-2 group-hover:scale-110 transition-transform">99%</div>
                            <div className="text-gray-600">Client Satisfaction</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="py-16 px-6 bg-gradient-to-r from-green-500 to-emerald-600">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Stay Updated on Market Trends</h2>
                    <p className="text-green-100 mb-8 max-w-2xl mx-auto">
                        Get exclusive property alerts, market insights, and be the first to know about new listings in your area.
                    </p>
                    <div className="flex max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-6 py-4 rounded-l-full focus:outline-none focus:ring-2 focus:ring-green-300"
                        />
                        <button className="px-8 py-4 bg-white text-green-600 font-semibold rounded-r-full hover:bg-green-50 transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 px-6">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                                EliteHomes
                            </h3>
                            <p className="text-gray-400">Your trusted partner in finding the perfect home and maximizing property value.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Services</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-green-400 transition-colors">Buy a Home</a></li>
                                <li><a href="#" className="hover:text-green-400 transition-colors">Sell a Home</a></li>
                                <li><a href="#" className="hover:text-green-400 transition-colors">Rent Property</a></li>
                                <li><a href="#" className="hover:text-green-400 transition-colors">Property Management</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Resources</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-green-400 transition-colors">Market Reports</a></li>
                                <li><a href="#" className="hover:text-green-400 transition-colors">Mortgage Calculator</a></li>
                                <li><a href="#" className="hover:text-green-400 transition-colors">Neighborhood Guide</a></li>
                                <li><a href="#" className="hover:text-green-400 transition-colors">Investment Tips</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Connect</h4>
                            <div className="flex space-x-4">
                                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 cursor-pointer transition-colors">
                                    <span className="text-sm font-bold">f</span>
                                </div>
                                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 cursor-pointer transition-colors">
                                    <span className="text-sm font-bold">in</span>
                                </div>
                                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 cursor-pointer transition-colors">
                                    <span className="text-sm font-bold">ig</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>© 2025 EliteHomes. Created by WebHoga - All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default RealEstate;