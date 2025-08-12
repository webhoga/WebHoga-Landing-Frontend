import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async () => {
        try {
            const res = await fetch('http://localhost:3000/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setSubmitted(true);
                setFormData({ name: '', email: '', message: '' });
            } else {
                console.error('❌ Failed to send. Status:', res.status);
            }
        } catch (error) {
            console.error('❌ Error sending form:', error);
        }
    };

    return (
        <div className="py-20 px-6">
            <div className="container mx-auto max-w-2xl">
                <div className="bg-green-100 border border-gray-200 rounded-2xl p-8 md:p-12">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        <span className="bg-gradient-to-r from-green-400 to-violet-400 bg-clip-text text-transparent">
                            Let's Create Something Amazing
                        </span>
                    </h2>

                    {submitted ? (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-green-700 mb-2">Message Sent!</h3>
                            <p className="text-black">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-4 bg-white border border-gray-300 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:border-green-400 transition-colors"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-4 bg-white border border-gray-300 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:border-green-400 transition-colors"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                            <textarea
                                placeholder="Tell us about your project..."
                                rows={5}
                                className="w-full p-4 bg-white border border-gray-300 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:border-green-400 transition-colors resize-none"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                            <button
                                onClick={handleSubmit}
                                className="w-full py-4 bg-gradient-to-r from-green-400 to-violet-400 text-black font-semibold rounded-xl hover:from-green-500 hover:to-violet-500 transform hover:scale-105 transition-all duration-300"
                            >
                                Send Message
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}