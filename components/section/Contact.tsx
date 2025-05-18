import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Input } from '../ui/input';

const Contact = () => {
    return (
        <section id="contact" className="relative bg-black text-white py-24 scroll-margin-top-16">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                        Get In Touch
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Have a question or want to work together? Reach out to us and we'll get back to you as soon as possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
                        <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <Input 
                                    placeholder="Your Name" 
                                    className="bg-gray-800/80 border-gray-700 text-white focus:ring-teal-500"
                                />
                                <Input 
                                    placeholder="Your Email" 
                                    className="bg-gray-800/80 border-gray-700 text-white focus:ring-teal-500"
                                />
                            </div>
                            <Input 
                                placeholder="Subject" 
                                className="bg-gray-800/80 border-gray-700 text-white focus:ring-teal-500"
                            />
                            <textarea 
                                placeholder="Your Message" 
                                rows={5}
                                className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-white resize-none"
                            />
                            <button 
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-white font-semibold rounded-lg flex items-center justify-center space-x-2 hover:opacity-90 transition-all duration-300"
                            >
                                <Send className="w-4 h-4" />
                                <span>Send Message</span>
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
                            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="p-3 bg-gray-800 rounded-lg mr-4">
                                        <Mail className="w-6 h-6 text-teal-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium">Email</h4>
                                        <p className="text-gray-400">info@example.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="p-3 bg-gray-800 rounded-lg mr-4">
                                        <Phone className="w-6 h-6 text-teal-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium">Phone</h4>
                                        <p className="text-gray-400">+1 234 567 890</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="p-3 bg-gray-800 rounded-lg mr-4">
                                        <MapPin className="w-6 h-6 text-teal-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium">Location</h4>
                                        <p className="text-gray-400">123 Business Avenue, Suite 100</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
