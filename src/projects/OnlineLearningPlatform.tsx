interface OnlineLearningPlatformProps {
    currentPage?: string;
    setCurrentPage: (page: string) => void;
}

const OnlineLearningPlatform = ({ setCurrentPage }: OnlineLearningPlatformProps) => {
    const courses = [
        {
            id: 1,
            title: "Advanced React Development",
            instructor: "Sarah Chen",
            price: "$89.99",
            originalPrice: "$129.99",
            duration: "12 hours",
            students: "2,847",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
            category: "Development",
            level: "Advanced"
        },
        {
            id: 2,
            title: "UI/UX Design Masterclass",
            instructor: "David Kim",
            price: "$79.99",
            originalPrice: "$119.99",
            duration: "15 hours",
            students: "3,921",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
            category: "Design",
            level: "Intermediate"
        },
        {
            id: 3,
            title: "Digital Marketing Strategy",
            instructor: "Emma Rodriguez",
            price: "$69.99",
            originalPrice: "$99.99",
            duration: "8 hours",
            students: "5,234",
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
            category: "Marketing",
            level: "Beginner"
        },
        {
            id: 4,
            title: "Data Science with Python",
            instructor: "Michael Thompson",
            price: "$99.99",
            originalPrice: "$149.99",
            duration: "20 hours",
            students: "4,156",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
            category: "Data Science",
            level: "Advanced"
        }
    ];

    const features = [
        {
            icon: "🎯",
            title: "Personalized Learning",
            description: "AI-powered recommendations tailored to your goals"
        },
        {
            icon: "🏆",
            title: "Industry Certificates",
            description: "Earn recognized certifications upon completion"
        },
        {
            icon: "👥",
            title: "Expert Instructors",
            description: "Learn from industry professionals and thought leaders"
        },
        {
            icon: "⚡",
            title: "Lifetime Access",
            description: "Access your courses anytime, anywhere, forever"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
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
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                EduMaster
                            </h1>
                        </div>
                        <div className="flex items-center space-x-6">
                            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Courses</a>
                            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Learning Paths</a>
                            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Instructors</a>
                            <div className="flex items-center space-x-3">
                                <div className="relative">
                                    <svg className="w-6 h-6 text-gray-700 hover:text-blue-600 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M8 11v6a2 2 0 002 2h4a2 2 0 002-2v-6M8 11h8" />
                                    </svg>
                                </div>
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                                    <span className="text-white text-sm font-semibold">U</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative container mx-auto px-6 py-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-5xl md:text-6xl font-bold mb-6">
                                Master New
                                <span className="block bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Skills Today</span>
                            </h2>
                            <p className="text-xl mb-8 text-blue-100">
                                Join over 50,000 students learning from world-class instructors. Build your career with hands-on projects and industry-recognized certifications.
                            </p>
                            <div className="flex space-x-4">
                                <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
                                    Start Learning Free
                                </button>
                                <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300">
                                    Browse Courses
                                </button>
                            </div>
                            <div className="flex items-center space-x-8 mt-8 text-blue-200">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-white">50K+</div>
                                    <div className="text-sm">Students</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-white">500+</div>
                                    <div className="text-sm">Courses</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-white">95%</div>
                                    <div className="text-sm">Success Rate</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-indigo-600/20 rounded-3xl blur-3xl"></div>
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=700&fit=crop"
                                alt="Online Learning"
                                className="relative z-10 rounded-3xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl z-20">
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-800">Course Completed!</div>
                                        <div className="text-sm text-gray-600">React Development</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-16 px-6">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose EduMaster?</h2>
                        <p className="text-xl text-gray-600">Everything you need to accelerate your learning journey</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Featured Courses */}
            <div className="py-20 px-6 bg-white">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Courses</h2>
                        <p className="text-xl text-gray-600">Most popular courses chosen by our students</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {courses.map((course) => (
                            <div key={course.id} className="group">
                                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                                    <div className="relative">
                                        <img
                                            src={course.image}
                                            alt={course.title}
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                                {course.category}
                                            </span>
                                        </div>
                                        <div className="absolute top-4 right-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                                                    course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                                                        'bg-red-100 text-red-800'
                                            }`}>
                                                {course.level}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                                            {course.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-3">by {course.instructor}</p>

                                        <div className="flex items-center space-x-1 mb-3">
                                            <div className="flex text-yellow-400">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                                    </svg>
                                                ))}
                                            </div>
                                            <span className="text-sm text-gray-600">({course.rating})</span>
                                            <span className="text-sm text-gray-500">• {course.students} students</span>
                                        </div>

                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center space-x-2">
                                                <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                                                <span className="text-sm text-gray-500 line-through">{course.originalPrice}</span>
                                            </div>
                                            <span className="text-sm text-gray-600">{course.duration}</span>
                                        </div>

                                        <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300">
                                            Enroll Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="py-16 px-6 bg-gradient-to-r from-indigo-700 to-blue-600 text-white">
                <div className="container mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold mb-4">Stay Updated with EduMaster</h2>
                    <p className="mb-8 text-lg">Subscribe to our newsletter to get the latest courses and promotions.</p>
                    <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full sm:w-auto px-6 py-3 rounded-full text-gray-800 font-semibold focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-gray-300 py-10">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-white font-bold mb-4 text-xl">EduMaster</h3>
                        <p className="text-gray-400 max-w-xs">
                            Empowering you with the skills for tomorrow's jobs. Learn anywhere, anytime.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white transition-colors">Courses</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Learning Paths</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Instructors</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-4 text-gray-400">
                            <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
                                <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.89h2.54v-2.204c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                            </a>
                            <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
                                <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.98-2.48 9.14 9.14 0 01-2.88 1.1 4.52 4.52 0 00-7.7 4.12 12.79 12.79 0 01-9.29-4.7 4.49 4.49 0 001.4 6.04 4.48 4.48 0 01-2.05-.56v.06a4.52 4.52 0 003.62 4.43 4.52 4.52 0 01-2.04.08 4.52 4.52 0 004.22 3.14A9.05 9.05 0 013 19.54a12.82 12.82 0 006.92 2.03c8.31 0 12.85-6.89 12.85-12.85 0-.2 0-.39-.01-.58A9.22 9.22 0 0023 3z" />
                                </svg>
                            </a>
                            <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
                                <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-12h4v2zM6 9H2v12h4V9zm-2-3a2 2 0 110-4 2 2 0 010 4z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center text-gray-500 mt-8 text-sm">
                    &copy; 2025 EduMaster. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default OnlineLearningPlatform;