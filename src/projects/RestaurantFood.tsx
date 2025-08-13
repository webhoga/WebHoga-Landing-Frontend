import type { RouterProps } from '../Router';

const RestaurantFood = ({ setCurrentPage }: RouterProps) => {
    const dishes = [
        {
            id: 1,
            name: "Grilled Salmon Teriyaki",
            price: "$24.99",
            image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=500&fit=crop"
        },
        {
            id: 2,
            name: "Truffle Mushroom Risotto",
            price: "$19.99",
            image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=500&fit=crop"
        },
        {
            id: 3,
            name: "Prime Ribeye Steak",
            price: "$32.99",
            image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=500&fit=crop"
        },
        {
            id: 4,
            name: "Artisan Pizza Margherita",
            price: "$16.99",
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=500&fit=crop"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
            {/* Navigation */}
            <nav className="bg-white shadow-lg sticky top-0 z-50">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => setCurrentPage?.('home')}
                                className="text-gray-600 hover:text-orange-600 transition-colors"
                            >
                                ← Back to Portfolio
                            </button>
                            <div className="h-6 border-l border-gray-300"></div>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                                TasteBistro
                            </h1>
                        </div>
                        <div className="flex items-center space-x-6">
                            <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">Menu</a>
                            <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">Reservations</a>
                            <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">About</a>
                            <div className="relative">
                                <svg className="w-6 h-6 text-gray-700 hover:text-orange-600 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5M17 18a2 2 0 100 4 2 2 0 000-4zM9 18a2 2 0 100 4 2 2 0 000-4z" />
                                </svg>
                                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-600 text-white">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative container mx-auto px-6 py-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-5xl md:text-6xl font-bold mb-6">
                                Culinary
                                <span className="block">Excellence</span>
                            </h2>
                            <p className="text-xl mb-8 text-orange-100">
                                Experience authentic flavors and exquisite dining with our chef-crafted menu featuring fresh, locally sourced ingredients.
                            </p>
                            <div className="flex space-x-4">
                                <button className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-full hover:bg-orange-50 transform hover:scale-105 transition-all duration-300">
                                    Order Now
                                </button>
                                <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300">
                                    View Menu
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 to-red-600/30 rounded-3xl blur-3xl"></div>
                            <img
                                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=700&fit=crop"
                                alt="Fine Dining"
                                className="relative z-10 rounded-3xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Dishes */}
            <div className="py-20 px-6">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Signature Dishes</h2>
                        <p className="text-xl text-gray-600">Chef's recommended specialties from our kitchen</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {dishes.map((dish) => (
                            <div key={dish.id} className="group">
                                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                                    <div className="aspect-[4/5] overflow-hidden">
                                        <img
                                            src={dish.image}
                                            alt={dish.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        <button className="w-full bg-white/90 backdrop-blur-sm text-gray-800 font-semibold py-3 rounded-xl hover:bg-white transition-colors">
                                            Add to Order
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-4 text-center">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{dish.name}</h3>
                                    <p className="text-2xl font-bold text-orange-600">{dish.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="py-16 px-6 bg-gradient-to-r from-orange-500 to-red-600">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Taste the Difference</h2>
                    <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
                        Join our newsletter to receive exclusive recipes, special offers, and be the first to know about our seasonal menu updates.
                    </p>
                    <div className="flex max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-6 py-4 rounded-l-full focus:outline-none focus:ring-2 focus:ring-orange-300"
                        />
                        <button className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-r-full hover:bg-orange-50 transition-colors">
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
                            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                                TasteBistro
                            </h3>
                            <p className="text-gray-400">Where culinary artistry meets exceptional dining experience.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Menu</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-orange-400 transition-colors">Appetizers</a></li>
                                <li><a href="#" className="hover:text-orange-400 transition-colors">Main Course</a></li>
                                <li><a href="#" className="hover:text-orange-400 transition-colors">Desserts</a></li>
                                <li><a href="#" className="hover:text-orange-400 transition-colors">Beverages</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Services</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-orange-400 transition-colors">Reservations</a></li>
                                <li><a href="#" className="hover:text-orange-400 transition-colors">Private Events</a></li>
                                <li><a href="#" className="hover:text-orange-400 transition-colors">Catering</a></li>
                                <li><a href="#" className="hover:text-orange-400 transition-colors">Delivery</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Follow Us</h4>
                            <div className="flex space-x-4">
                                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 cursor-pointer transition-colors">
                                    <span className="text-sm font-bold">f</span>
                                </div>
                                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 cursor-pointer transition-colors">
                                    <span className="text-sm font-bold">i</span>
                                </div>
                                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 cursor-pointer transition-colors">
                                    <span className="text-sm font-bold">t</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>© 2025 TasteBistro. Created by WebHoga - All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default RestaurantFood;