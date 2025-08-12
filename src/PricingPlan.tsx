import { useState } from 'react';

function PricingPlan() {
    const [serviceType, setServiceType] = useState('wordpress');

    const wordpressPlans = [
        {
            name: "Basic Starter",
            description: "Perfect for blogs and small business websites",
            price: 8799,
            features: [
                "One-Page Website",
                "Domain 1 Year",
                "Hosting 1 Year",
                "SSL",
                "Google reCAPTCHA",
                "GDPR Compliant Cookies",
                "Mobile Responsive Design",
                "Delivery in 72 Working Hours"
            ],
            popular: false,
            gradient: "from-green-300 to-green-400",
            bgGradient: "from-green-50 to-emerald-50",
            borderColor: "border-green-100"
        },
        {
            name: "Advanced Growth",
            description: "Advanced WordPress sites with premium features",
            price: 14860,
            features: [
                "2-5 Pages Website",
                "Domain 1 Year",
                "Hosting 1 Year",
                "SSL",
                "Google reCAPTCHA",
                "GDPR Compliant Cookies",
                "Mobile Responsive Design",
                "Logo",
                "Security Setup",
                "Delivery in 98 Working Hours"
            ],
            popular: true,
            gradient: "from-violet-400 to-purple-500",
            bgGradient: "from-violet-50 to-purple-50",
            borderColor: "border-violet-200"
        },
        {
            name: "Premium Pro",
            description: "Complete WordPress solution for large businesses",
            price: 23999,
            features: [
                "2-5 Pages Website",
                "Domain 1 Year",
                "Hosting 1 Year",
                "SSL",
                "Google reCAPTCHA",
                "GDPR Compliant Cookies",
                "Mobile Responsive Design",
                "Logo",
                "Security Setup",
                "Image Compression",
                "Google Analytics",
                "Google Search Console",
                "Bing Search",
                "Google My Business",
                "Page-Speed Optimization",
                "SEO Setup",
                "Delivery in 15 Working Days"
            ],
            popular: false,
            gradient: "from-blue-500 to-indigo-600",
            bgGradient: "from-blue-50 to-indigo-50",
            borderColor: "border-blue-200"
        }
    ];

    const shopifyPlans = [
        {
            name: "Shopify Basic Starter",
            description: "Launch your online store with essential features",
            price: 15999,
            features: [
                "One-Page Website",
                "World-Class Checkout",
                "Limited Products",
                "Domain 1 Year",
                "Hosting 1 Year",
                "SSL",
                "Logo",
                "Instagram Integration",
                "WhatsApp Integration",
                "Monetization",
                "Analytics",
                "Bio-Link Creation",
                "Order Management",
                "Delivery In 1 Working Week"
            ],
            popular: false,
            gradient: "from-green-300 to-green-400",
            bgGradient: "from-green-50 to-emerald-50",
            borderColor: "border-green-100"
        },
        {
            name: "Shopify Essentials",
            description: "Launch your online store with essential features",
            price: 27749,
            features: [
                "3-5 Pages Website",
                "World-Class Checkout",
                "Unlimited Products",
                "Domain 1 Year",
                "Hosting 1 Year",
                "SSL",
                "Logo",
                "Social Media Integration",
                "Security Setup",
                "Analytics",
                "Newsletter",
                "Abandoned Checkout Recovery",
                "Delivery In 2 Working Weeks"
            ],
            popular: true,
            gradient: "from-violet-400 to-purple-500",
            bgGradient: "from-violet-50 to-purple-50",
            borderColor: "border-violet-200"
        },
        {
            name: "Shopify Scale-Up",
            description: "Launch your online store with essential features",
            price: 89999,
            features: [
                "6-10 Pages Website",
                "World-Class Checkout",
                "Unlimited Products",
                "Domain 1 Year",
                "Hosting 1 Year",
                "SSL",
                "Logo",
                "Social Media Integration",
                "Security Setup",
                "Analytics",
                "Newsletter",
                "Abandoned Checkout Recovery",
                "5 Staff Accounts",
                "Delivery In 3 Working Weeks"
            ],
            popular: false,
            gradient: "from-blue-500 to-indigo-600",
            bgGradient: "from-blue-50 to-indigo-50",
            borderColor: "border-blue-200"
        }
    ];

    const plans = serviceType === 'wordpress' ? wordpressPlans : shopifyPlans;

    return (
        <div className="py-20 px-6 bg-white">
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full border border-green-200 mb-6">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                        <span className="text-sm font-semibold text-gray-700">Transparent Pricing</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
                        <span className="block text-[#EF4444]">Choose Your</span>
                        <span className="block text-[#10B981]">Growth Plan</span>
                    </h2>

                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                        Flexible pricing designed to grow with your business. No hidden fees, just transparent value.
                    </p>

                    {/* Service Toggle */}
                    <div className="inline-flex items-center bg-green-100 p-1 rounded-2xl border border-green-200">
                        <button
                            onClick={() => setServiceType('wordpress')}
                            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center ${
                                serviceType === 'wordpress'
                                    ? 'bg-white text-gray-800 shadow-lg'
                                    : 'text-gray-600 hover:text-gray-800'
                            }`}
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z" clipRule="evenodd" />
                            </svg>
                            WordPress
                        </button>
                        <button
                            onClick={() => setServiceType('shopify')}
                            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center ${
                                serviceType === 'shopify'
                                    ? 'bg-white text-gray-800 shadow-lg'
                                    : 'text-gray-600 hover:text-gray-800'
                            }`}
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0L10 7.586l-2.293-2.293a1 1 0 10-1.414 1.414L8.586 9l-2.293 2.293a1 1 0 101.414 1.414L10 10.414l2.293 2.293a1 1 0 001.414-1.414L11.414 9l2.293-2.293a1 1 0 000-1.414z" clipRule="evenodd" />
                            </svg>
                            Shopify
                        </button>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative h-full flex flex-col bg-gradient-to-br ${plan.bgGradient} border ${plan.borderColor} rounded-3xl p-8 hover:bg-violet-100 transition-colors duration-300 group ${
                                plan.popular ? 'transform scale-105 shadow-2xl' : 'hover:shadow-xl'
                            }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <div className="bg-gradient-to-r from-violet-400 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                                        Most Popular ⭐
                                    </div>
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <div className={`w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                                    </svg>
                                </div>

                                <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
                                <p className="text-gray-600 text-sm">{plan.description}</p>
                            </div>

                            <div className="text-center mb-8">
                                <div className="flex items-baseline justify-center">
                                    <span className="text-5xl font-black text-black">₹{plan.price}</span>
                                    <span className="text-gray-600 ml-2">/project</span>
                                </div>
                                <p className="text-sm text-green-600 font-semibold mt-2">One-time payment</p>
                            </div>

                            <div className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature, featureIndex) => (
                                    <div key={featureIndex} className="flex items-center">
                                        <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-black text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <a href="https://webhoga.com/contact" target="_blank" rel="noopener noreferrer" className="mt-auto">
                                <button className="w-full py-4 bg-[#EF4444] text-white font-bold rounded-2xl hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                                    Get Started
                                </button>
                            </a>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <p className="text-gray-600 mb-6">
                        Need a custom {serviceType === 'wordpress' ? 'WordPress' : 'Shopify'} solution? We're here to help you build exactly what you need.
                    </p>
                    <a href="https://webhoga.com/contact" target="_blank" rel="noopener noreferrer">
                        <button className="px-8 py-4 bg-gradient-to-r from-green-400 to-violet-400 text-black font-bold rounded-2xl hover:from-green-500 hover:to-violet-500 transform hover:scale-105 transition-all duration-300 shadow-lg">
                            Get Custom {serviceType === 'wordpress' ? 'WordPress' : 'Shopify'} Quote
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default PricingPlan;