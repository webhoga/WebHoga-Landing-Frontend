import type { RouterProps } from '../Router';

const EcommerceFashion = ({ setCurrentPage }: RouterProps) => {
    const products = [
        {
            id: 1,
            name: "Elegant Summer Dress",
            price: "$89.99",
            image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop"
        },
        {
            id: 2,
            name: "Classic Denim Jacket",
            price: "$129.99",
            image: "https://images.unsplash.com/photo-1544966503-7cc531937326?w=400&h=500&fit=crop"
        },
        {
            id: 3,
            name: "Luxury Handbag",
            price: "$199.99",
            image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop"
        },
        {
            id: 4,
            name: "Designer Sneakers",
            price: "$159.99",
            image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100">
            {/* Navigation */}
            <nav className="bg-white shadow-lg sticky top-0 z-50">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => setCurrentPage?.('home')}
                                className="text-gray-600 hover:text-pink-600 transition-colors"
                            >
                                ← Back to Portfolio
                            </button>
                            <div className="h-6 border-l border-gray-300"></div>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                                FashionHub
                            </h1>
                        </div>
                        <div className="flex items-center space-x-6">
                            <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors">Shop</a>
                            <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors">Collections</a>
                            <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors">About</a>
                            <div className="relative">
                                <svg className="w-6 h-6 text-gray-700 hover:text-pink-600 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5M17 18a2 2 0 100 4 2 2 0 000-4zM9 18a2 2 0 100 4 2 2 0 000-4z" />
                                </svg>
                                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative container mx-auto px-6 py-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-5xl md:text-6xl font-bold mb-6">
                                Fashion That
                                <span className="block">Defines You</span>
                            </h2>
                            <p className="text-xl mb-8 text-pink-100">
                                Discover the latest trends and timeless classics in our curated collection of premium fashion.
                            </p>
                            <div className="flex space-x-4">
                                <button className="px-8 py-4 bg-white text-pink-600 font-semibold rounded-full hover:bg-pink-50 transform hover:scale-105 transition-all duration-300">
                                    Shop Now
                                </button>
                                <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-pink-600 transition-all duration-300">
                                    View Collection
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-400/30 to-purple-600/30 rounded-3xl blur-3xl"></div>
                            <img
                                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=700&fit=crop"
                                alt="Fashion Model"
                                className="relative z-10 rounded-3xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Products */}
            <div className="py-20 px-6">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Products</h2>
                        <p className="text-xl text-gray-600">Handpicked items from our latest collection</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map((product) => (
                            <div key={product.id} className="group">
                                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                                    <div className="aspect-[4/5] overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        <button className="w-full bg-white/90 backdrop-blur-sm text-gray-800 font-semibold py-3 rounded-xl hover:bg-white transition-colors">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-4 text-center">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                                    <p className="text-2xl font-bold text-pink-600">{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="py-16 px-6 bg-gradient-to-r from-pink-500 to-purple-600">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Stay in Style</h2>
                    <p className="text-pink-100 mb-8 max-w-2xl mx-auto">
                        Subscribe to our newsletter and be the first to know about new arrivals, exclusive offers, and fashion tips.
                    </p>
                    <div className="flex max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-6 py-4 rounded-l-full focus:outline-none focus:ring-2 focus:ring-pink-300"
                        />
                        <button className="px-8 py-4 bg-white text-pink-600 font-semibold rounded-r-full hover:bg-pink-50 transition-colors">
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
                            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                                FashionHub
                            </h3>
                            <p className="text-gray-400">Your destination for premium fashion and timeless style.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Shop</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-pink-400 transition-colors">Women</a></li>
                                <li><a href="#" className="hover:text-pink-400 transition-colors">Men</a></li>
                                <li><a href="#" className="hover:text-pink-400 transition-colors">Accessories</a></li>
                                <li><a href="#" className="hover:text-pink-400 transition-colors">Sale</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Support</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-pink-400 transition-colors">Contact Us</a></li>
                                <li><a href="#" className="hover:text-pink-400 transition-colors">Size Guide</a></li>
                                <li><a href="#" className="hover:text-pink-400 transition-colors">Returns</a></li>
                                <li><a href="#" className="hover:text-pink-400 transition-colors">FAQ</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Follow Us</h4>
                            <div className="flex space-x-4">
                                <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 cursor-pointer transition-colors">
                                    <span className="text-sm font-bold">f</span>
                                </div>
                                <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 cursor-pointer transition-colors">
                                    <span className="text-sm font-bold">i</span>
                                </div>
                                <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 cursor-pointer transition-colors">
                                    <span className="text-sm font-bold">t</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>© 2025 FashionHub. Created by WebHoga - All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default EcommerceFashion;