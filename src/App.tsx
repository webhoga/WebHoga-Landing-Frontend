import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Portfolio from './Portfolio.tsx';
import PricingPlan from './PricingPlan';
import ContactForm from './ContactForm';
import type { RouterProps } from './Router';
import { useEffect } from 'react';

function App({ setCurrentPage }: RouterProps) {

    useEffect(() => {
        document.title = "WebHoga - Premium Web Development & Digital Marketing Services | Custom Websites & SEO";

        const metaTags = [
            { name: 'description', content: 'WebHoga offers premium web development, custom website design, eCommerce solutions, SEO services, and digital marketing. Transform your business with our innovative web solutions and expert development team.' },
            { name: 'keywords', content: 'web development, website design, eCommerce development, SEO services, digital marketing, custom websites, Shopify development, WordPress development, web design India, responsive websites, landing page design, brand identity, logo design' },
            { name: 'author', content: 'WebHoga Digital Services' },
            { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
            { name: 'theme-color', content: '#3B82F6' },
            { name: 'msapplication-TileColor', content: '#3B82F6' },
            { name: 'language', content: 'English' },
            { name: 'revisit-after', content: '7 days' },
            { name: 'distribution', content: 'global' },
            { name: 'rating', content: 'general' },

            { property: 'og:title', content: 'WebHoga - Premium Web Development & Digital Marketing Services' },
            { property: 'og:description', content: 'Transform your business with custom web development, eCommerce solutions, and digital marketing services. Expert team delivering innovative web solutions for global success.' },
            { property: 'og:image', content: 'https://webhoga.com/assets/D2OUOwqu-WebHoga%20Logo.png' },
            { property: 'og:url', content: 'https://webhoga.com' },
            { property: 'og:type', content: 'website' },
            { property: 'og:site_name', content: 'WebHoga' },
            { property: 'og:locale', content: 'en_US' },

            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: 'WebHoga - Premium Web Development & Digital Marketing Services' },
            { name: 'twitter:description', content: 'Transform your business with custom web development, eCommerce solutions, and digital marketing services.' },
            { name: 'twitter:image', content: 'https://webhoga.com/assets/D2OUOwqu-WebHoga%20Logo.png' },
            { name: 'twitter:site', content: '@WebHoga' },
            { name: 'twitter:creator', content: '@WebHoga' },

            { name: 'application-name', content: 'WebHoga' },
            { name: 'apple-mobile-web-app-title', content: 'WebHoga' },
            { name: 'apple-mobile-web-app-capable', content: 'yes' },
            { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
            { name: 'format-detection', content: 'telephone=no' },
            { name: 'HandheldFriendly', content: 'True' },
            { name: 'MobileOptimized', content: '320' },
            { name: 'referrer', content: 'no-referrer-when-downgrade' }
        ];

        metaTags.forEach(tag => {
            let existingTag;
            if (tag.name) {
                existingTag = document.querySelector(`meta[name="${tag.name}"]`);
            } else if (tag.property) {
                existingTag = document.querySelector(`meta[property="${tag.property}"]`);
            }

            if (existingTag) {
                existingTag.remove();
            }

            const metaTag = document.createElement('meta');
            if (tag.name) {
                metaTag.name = tag.name;
            } else if (tag.property) {
                metaTag.setAttribute('property', tag.property);
            }
            metaTag.content = tag.content;
            document.head.appendChild(metaTag);
        });

        let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

        if (canonicalLink) {
            canonicalLink.remove();
        }

        canonicalLink = document.createElement('link') as HTMLLinkElement;
        canonicalLink.rel = 'canonical';
        canonicalLink.href = 'https://webhoga.com';
        document.head.appendChild(canonicalLink);

        const structuredData = {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "WebSite",
                    "@id": "https://webhoga.com/#website",
                    "url": "https://webhoga.com",
                    "name": "WebHoga",
                    "description": "Premium web development and digital marketing services",
                    "publisher": {
                        "@id": "https://webhoga.com/#organization"
                    },
                    "potentialAction": [
                        {
                            "@type": "SearchAction",
                            "target": {
                                "@type": "EntryPoint",
                                "urlTemplate": "https://webhoga.com/?s={search_term_string}"
                            },
                            "query-input": "required name=search_term_string"
                        }
                    ]
                },
                {
                    "@type": "Organization",
                    "@id": "https://webhoga.com/#organization",
                    "name": "WebHoga",
                    "url": "https://webhoga.com",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://webhoga.com/assets/D2OUOwqu-WebHoga%20Logo.png",
                        "width": 300,
                        "height": 100
                    },
                    "sameAs": [
                        "https://facebook.com/webhoga",
                        "https://twitter.com/webhoga",
                        "https://linkedin.com/company/webhoga"
                    ],
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+91-XXX-XXX-XXXX",
                        "contactType": "customer service",
                        "availableLanguage": ["English", "Hindi"]
                    },
                    "areaServed": "Worldwide",
                    "foundingDate": "2020"
                },
                {
                    "@type": "WebPage",
                    "@id": "https://webhoga.com/#webpage",
                    "url": "https://webhoga.com",
                    "name": "WebHoga - Premium Web Development & Digital Marketing Services",
                    "isPartOf": {
                        "@id": "https://webhoga.com/#website"
                    },
                    "about": {
                        "@id": "https://webhoga.com/#organization"
                    },
                    "description": "Transform your business with custom web development, eCommerce solutions, SEO services, and digital marketing. Expert team delivering innovative web solutions.",
                    "breadcrumb": {
                        "@id": "https://webhoga.com/#breadcrumb"
                    }
                },
                {
                    "@type": "Service",
                    "serviceType": "Web Development",
                    "provider": {
                        "@id": "https://webhoga.com/#organization"
                    },
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Web Development Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Custom Web Design",
                                    "description": "Modern, responsive, and SEO-friendly websites"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "eCommerce Solutions",
                                    "description": "Shopify and WordPress online stores"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Digital Marketing",
                                    "description": "SEO and digital marketing strategies"
                                }
                            }
                        ]
                    },
                    "areaServed": "Worldwide",
                    "availableChannel": {
                        "@type": "ServiceChannel",
                        "serviceUrl": "https://webhoga.com",
                        "servicePhone": "+91-XXX-XXX-XXXX",
                        "availableLanguage": ["English", "Hindi"]
                    }
                }
            ]
        };

        let existingScript = document.querySelector('script[type="application/ld+json"]');
        if (existingScript) {
            existingScript.remove();
        }

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);

        const preloadLinks = [
            { href: 'https://webhoga.com/assets/D2OUOwqu-WebHoga%20Logo.png', as: 'image' }
        ];

        preloadLinks.forEach(link => {
            const preloadLink = document.createElement('link');
            preloadLink.rel = 'preload';
            preloadLink.href = link.href;
            preloadLink.as = link.as;
            document.head.appendChild(preloadLink);
        });

    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="absolute top-0 left-0 right-0 z-20 bg-transparent">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img
                                src="https://webhoga.com/assets/D2OUOwqu-WebHoga%20Logo.png"
                                alt="WebHoga Logo"
                                className="h-16 mr-3"
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <div className="relative min-h-screen flex items-center overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#C7E7FF]/30 to-[#E0D9FF]/30 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-indigo-300/20 to-pink-300/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-cyan-200/15 to-blue-200/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

                    {/* Gradient orbs for depth */}
                    <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
                    <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-gradient-to-r from-emerald-300/15 to-teal-300/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2.5s'}}></div>
                </div>

                {/* Enhanced Floating Particles */}
                <div className="absolute top-20 right-20 w-4 h-4 bg-blue-400 rounded-full animate-bounce pointer-events-none"></div>
                <div className="absolute bottom-32 left-16 w-3 h-3 bg-purple-400 rounded-full animate-bounce pointer-events-none" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-indigo-400 rounded-full animate-bounce pointer-events-none" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-pink-400 rounded-full animate-bounce pointer-events-none" style={{animationDelay: '1.5s'}}></div>
                <div className="absolute bottom-1/4 right-1/2 w-3 h-3 bg-emerald-400 rounded-full animate-bounce pointer-events-none" style={{animationDelay: '2s'}}></div>

                {/* Main Content Container */}
                <div className="relative z-10 container mx-auto px-6 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
                        {/* Left Content */}
                        <div className="text-center lg:text-left space-y-8">
                            {/* Status Badge */}
                            <div className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-lg rounded-full border border-blue-200/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                                <span className="w-3 h-3 bg-emerald-400 rounded-full mr-3 animate-pulse"></span>
                                <span className="text-sm font-bold text-gray-800 tracking-wide">Innovation in Progress</span>
                            </div>

                            {/* Main Headline */}
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight">
                    <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-pink-600 transition-all duration-500">
                        Build
                    </span>
                                <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent hover:from-pink-500 hover:to-orange-500 transition-all duration-500">
                        Tomorrow
                    </span>
                            </h1>

                            {/* Supporting Subheadline */}
                            <div className="space-y-4">
                                <p className="text-2xl md:text-3xl text-gray-600 font-light leading-relaxed">
                                    Transform your vision into digital reality
                                </p>
                                <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Where Innovation Meets Excellence
                                </p>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-8">
                                <a href="https://webhoga.com" target="_blank" rel="noopener noreferrer">
                                    <button className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xl rounded-3xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <span className="relative flex items-center">
                                Start Your Journey
                                <svg className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                                    </button>
                                </a>

                            <a href="#portfolio" rel="noopener noreferrer">
                                <button className="px-10 py-5 bg-white/95 backdrop-blur-lg text-gray-800 font-bold text-xl rounded-3xl border-2 border-gray-200/50 hover:bg-white hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                                    View Our Work
                                </button>
                            </a>
                            </div>

                            {/* Stats Section */}
                            <div className="flex justify-center lg:justify-start space-x-12 pt-12">
                                <div className="text-center group cursor-pointer">
                                    <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">50+</div>
                                    <div className="text-base text-gray-600 font-semibold mt-2">Projects Delivered</div>
                                </div>
                                <div className="text-center group cursor-pointer">
                                    <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">100%</div>
                                    <div className="text-base text-gray-600 font-semibold mt-2">Client Satisfaction</div>
                                </div>
                                <div className="text-center group cursor-pointer">
                                    <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">24/7</div>
                                    <div className="text-base text-gray-600 font-semibold mt-2">Support Available</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Visual Content */}
                        <div className="relative flex justify-center lg:justify-end">
                            {/* Main Dashboard Visual */}
                            <div className="relative group">
                                {/* Glow Effect */}
                                <div className="absolute -inset-12 bg-gradient-to-r from-blue-400/40 via-purple-400/40 to-pink-400/40 rounded-3xl blur-3xl opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"></div>

                                {/* Main Visual Container */}
                                <div className="relative transform transition-all duration-700 ease-out group-hover:rotate-3 group-hover:scale-105" style={{transformOrigin: 'center center'}}>
                                    {/* Enhanced Dashboard Card */}
                                    <div className="w-[500px] md:w-[600px] lg:w-[700px]">
                                        {/* Browser Header */}
                                        <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 p-6 rounded-t-2xl flex items-center space-x-4">
                                            <div className="flex space-x-3">
                                                <div className="w-4 h-4 bg-red-500 rounded-full hover:bg-red-400 transition-colors cursor-pointer"></div>
                                                <div className="w-4 h-4 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                                                <div className="w-4 h-4 bg-green-500 rounded-full hover:bg-green-400 transition-colors cursor-pointer"></div>
                                            </div>
                                            <div className="flex-1 bg-gray-700 rounded-xl px-6 py-3">
                                                <span className="text-gray-300 text-lg font-mono">analyticshai.in</span>
                                            </div>
                                            <div className="text-emerald-400 text-lg font-bold flex items-center">
                                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                                </svg>
                                                Secure
                                            </div>
                                        </div>

                                        {/* Dashboard Content */}
                                        <div className="bg-gradient-to-br from-white to-gray-50 p-8 md:p-12 rounded-b-2xl space-y-8 border-x-4 border-b-4 border-gray-100">
                                            {/* Analytics Chart */}
                                            <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8 border-2 border-blue-100/50 shadow-lg hover:shadow-xl transition-all duration-300">
                                                <div className="flex justify-between items-center mb-6">
                                                    <h3 className="text-2xl font-black text-gray-800">Growth Analytics</h3>
                                                    <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-5 py-2 rounded-full text-lg font-black animate-pulse shadow-lg">
                                                        ↗ +340%
                                                    </div>
                                                </div>
                                                <div className="relative h-48">
                                                    <div className="absolute bottom-0 left-0 w-full flex items-end justify-between space-x-1">
                                                        {[20, 35, 45, 38, 55, 48, 60, 52, 68, 45, 72, 65].map((height, index) => (
                                                            <div
                                                                key={index}
                                                                className="bg-gradient-to-t from-blue-600 via-blue-400 to-blue-300 rounded-t-xl transition-all duration-500 hover:from-purple-600 hover:via-purple-400 hover:to-purple-300 flex-1"
                                                                style={{
                                                                    height: `${height * 2.5}px`,
                                                                    animationDelay: `${index * 150}ms`
                                                                }}
                                                            ></div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Metrics Grid */}
                                            <div className="grid grid-cols-3 gap-6">
                                                <div className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 rounded-3xl p-6 border-2 border-emerald-100/50 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                                                    <div className="text-3xl font-black text-emerald-600 mb-2 group-hover:scale-110 transition-transform duration-300">$247K</div>
                                                    <div className="text-sm text-gray-600 font-semibold">Monthly Revenue</div>
                                                </div>
                                                <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 rounded-3xl p-6 border-2 border-purple-100/50 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                                                    <div className="text-3xl font-black text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">99.2%</div>
                                                    <div className="text-sm text-gray-600 font-semibold">Uptime Score</div>
                                                </div>
                                                <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 rounded-3xl p-6 border-2 border-blue-100/50 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                                                    <div className="text-3xl font-black text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">1.2M</div>
                                                    <div className="text-sm text-gray-600 font-semibold">Page Views</div>
                                                </div>
                                            </div>

                                            {/* Desktop Metrics Row */}
                                            <div className="grid grid-cols-2 gap-6">
                                                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-5 border border-orange-100/50 hover:shadow-lg transition-all duration-300">
                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <div className="text-2xl font-black text-orange-600">156</div>
                                                            <div className="text-sm text-gray-600 font-medium">Active Users</div>
                                                        </div>
                                                        <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-xl flex items-center justify-center">
                                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-5 border border-teal-100/50 hover:shadow-lg transition-all duration-300">
                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <div className="text-2xl font-black text-teal-600">87%</div>
                                                            <div className="text-sm text-gray-600 font-medium">Conversion Rate</div>
                                                        </div>
                                                        <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-xl flex items-center justify-center">
                                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Achievement Cards */}
                                <div className="absolute -top-8 -left-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-3xl shadow-2xl transform hover:scale-110 transition-all duration-300 cursor-pointer">
                                    <div className="text-center">
                                        <div className="text-3xl mb-2">🚀</div>
                                        <div className="text-sm font-bold">Launch Ready</div>
                                    </div>
                                </div>

                                <div className="absolute -bottom-8 -left-12 bg-gradient-to-r from-emerald-500 to-blue-500 text-white p-6 rounded-3xl shadow-2xl transform hover:scale-110 transition-all duration-300 cursor-pointer" style={{animationDelay: '1s'}}>
                                    <div className="text-center">
                                        <div className="text-3xl mb-2">💎</div>
                                        <div className="text-sm font-bold">Premium Quality</div>
                                    </div>
                                </div>

                                <div className="absolute top-1/2 -left-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-2xl shadow-xl transform hover:scale-110 transition-all duration-300 cursor-pointer" style={{animationDelay: '0.5s'}}>
                                    <div className="text-lg font-bold">24/7</div>
                                </div>

                                <div className="absolute -top-4 right-0 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white p-4 rounded-2xl shadow-xl transform hover:scale-110 transition-all duration-300 cursor-pointer" style={{animationDelay: '1.5s'}}>
                                    <div className="text-center">
                                        <div className="text-2xl mb-1">⚡</div>
                                        <div className="text-xs font-bold">Fast</div>
                                    </div>
                                </div>

                                {/* Animated Particles */}
                                <div className="absolute top-12 left-6 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
                                <div className="absolute bottom-20 left-16 w-4 h-4 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                                <div className="absolute top-40 left-4 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
                                <div className="absolute top-20 right-8 w-2 h-2 bg-emerald-400 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
                                <div className="absolute bottom-32 right-12 w-3 h-3 bg-indigo-400 rounded-full animate-ping" style={{animationDelay: '2.5s'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="py-20 px-6 bg-white">
                <div className="container mx-auto">
                    {/* First Row */}
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
                        {/* Service 1 */}
                        <div className="bg-green-100 border border-gray-200 rounded-2xl p-8 hover:bg-violet-100 transition-all duration-300 group">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-300 to-green-400 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-black mb-4">Custom Web Design</h3>
                            <p className="text-black">Modern, responsive, and SEO-friendly websites that captivate your audience and drive conversions.</p>
                        </div>

                        {/* Service 2 */}
                        <div className="bg-green-100 border border-gray-200 rounded-2xl p-8 hover:bg-violet-100 transition-all duration-300 group">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-300 to-green-400 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-black mb-4">eCommerce Solutions</h3>
                            <p className="text-black">Launch your online store with lightning-fast Shopify and WordPress setups that maximize sales.</p>
                        </div>

                        {/* Service 3 */}
                        <div className="bg-green-100 border border-gray-200 rounded-2xl p-8 hover:bg-violet-100 transition-all duration-300 group">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-300 to-green-400 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-black mb-4">Digital Marketing</h3>
                            <p className="text-black">Amplify your brand visibility with data-driven marketing strategies and expert execution.</p>
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
                        {/* Service 4 */}
                        <div className="bg-green-100 border border-gray-200 rounded-2xl p-8 hover:bg-violet-100 transition-all duration-300 group">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-300 to-green-400 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-black mb-4">Domain + Hosting Setup</h3>
                            <p className="text-black">Complete domain registration and hosting solutions with SSL certificates and backup management.</p>
                        </div>

                        {/* Service 5 */}
                        <div className="bg-green-100 border border-gray-200 rounded-2xl p-8 hover:bg-violet-100 transition-all duration-300 group">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-300 to-green-400 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-black mb-4">Logo & Brand Identity</h3>
                            <p className="text-black">Professional logo design and brand identity packages that make your business unforgettable.</p>
                        </div>

                        {/* Service 6 */}
                        <div className="bg-green-100 border border-gray-200 rounded-2xl p-8 hover:bg-violet-100 transition-all duration-300 group">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-300 to-green-400 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-black mb-4">SEO & Web Optimization</h3>
                            <p className="text-black">Boost your search rankings and website performance with advanced SEO strategies and optimization.</p>
                        </div>
                    </div>

                    {/* Third Row */}
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
                        {/* Service 7 */}
                        <div className="bg-green-100 border border-gray-200 rounded-2xl p-8 hover:bg-violet-100 transition-all duration-300 group">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-300 to-green-400 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-black mb-4">Content & Blog Writing</h3>
                            <p className="text-black">Engaging, SEO-optimized content and blog posts that attract visitors and convert them into customers.</p>
                        </div>

                        {/* Service 8 */}
                        <div className="bg-green-100 border border-gray-200 rounded-2xl p-8 hover:bg-violet-100 transition-all duration-300 group">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-300 to-green-400 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-black mb-4">Google Analytics & Tracking</h3>
                            <p className="text-black">Comprehensive analytics setup and tracking implementation to monitor your website's performance and ROI.</p>
                        </div>

                        {/* Service 9 */}
                        <div className="bg-green-100 border border-gray-200 rounded-2xl p-8 hover:bg-violet-100 transition-all duration-300 group">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-300 to-green-400 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm3 2h2v4H7V4zm8 0h-2v4h2V4zM7 10h2v4H7v-4zm8 0h-2v4h2v-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-black mb-4">Landing Page Design</h3>
                            <p className="text-black">High-converting landing pages designed to capture leads and maximize your marketing campaign results.</p>
                        </div>
                    </div>

                    {/* Fourth Row */}
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Service 10 */}
                        <div className="bg-green-100 border border-gray-200 rounded-2xl p-8 hover:bg-violet-100 transition-all duration-300 group">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-300 to-green-400 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 4a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2V8zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-black mb-4">Payment Gateway Integration</h3>
                            <p className="text-black">Secure payment processing setup with multiple gateway options to streamline your online transactions.</p>
                        </div>

                        {/* Service 11 */}
                        <div className="bg-green-100 border border-gray-200 rounded-2xl p-8 hover:bg-violet-100 transition-all duration-300 group">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-300 to-green-400 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-black mb-4">LMS Setup & Development</h3>
                            <p className="text-black">Complete Learning Management System setup with course creation, student enrollment, and progress tracking features.</p>
                        </div>

                        {/* Service 12 */}
                        <div className="bg-green-100 border border-gray-200 rounded-2xl p-8 hover:bg-violet-100 transition-all duration-300 group">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-300 to-green-400 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z" clipRule="evenodd" />
                                    <path d="M6 8a1 1 0 011-1h2a1 1 0 110 2H7a1 1 0 01-1-1zM6 10a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zM7 12a1 1 0 100 2h4a1 1 0 100-2H7z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-black mb-4">Business Card + Letterhead</h3>
                            <p className="text-black">Professional business card and letterhead design that reflects your brand identity and leaves a lasting impression.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Portfolio */}
            <section id="portfolio">
                <Portfolio setCurrentPage={setCurrentPage} />
            </section>

            {/* Pricing */}
            <PricingPlan />

            {/* Contact */}
            <ContactForm />

            {/* Call Us / Reach Out Section */}
            <div className="py-16 px-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl text-gray-600 font-medium">
                            Let's discuss your project and bring your vision to life
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                        {/* Phone Contact */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100/50 group">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">Call Us Now</h3>
                                <a
                                    href="tel:+919061156535"
                                    className="text-2xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-pink-600 transition-all duration-300 block mb-2"
                                >
                                    +91 90611 56535
                                </a>
                                <p className="text-gray-600">For urgent support</p>
                            </div>
                        </div>

                        {/* Email Contact */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100/50 group">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">Email Us</h3>
                                <a
                                    href="mailto:contact@webhoga.com"
                                    className="text-xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:from-indigo-600 hover:to-blue-600 transition-all duration-300 block mb-2"
                                >
                                    contact@webhoga.com
                                </a>
                                <p className="text-gray-600">Get detailed project quotes & consultation</p>
                            </div>
                        </div>
                    </div>

                    {/* Additional Contact Info */}
                    <div className="text-center mt-12">
                        <div className="inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-lg rounded-2xl border border-gray-200/50 shadow-lg">
                            <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                            <span className="text-gray-800 font-semibold">
                                Response time: Within 2 days business days
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="py-8 px-6 border-t border-gray-200 bg-white">
                <div className="container mx-auto text-center">
                    <p className="text-black">© 2025 WebHoga Digital Services. Crafted in India, Loved Globally .</p>
                </div>
            </div>
        </div>
    );
}

export default App;