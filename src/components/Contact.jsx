import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { resumeData } from '../data/resume';

const ContactItem = ({ icon: Icon, text, href }) => (
    <a
        href={href}
        target={href && href.startsWith('http') ? "_blank" : "_self"}
        rel={href && href.startsWith('http') ? "noopener noreferrer" : ""}
        className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group"
    >
        <div className="p-3 bg-blue-50 text-blue-600 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
            <Icon size={20} />
        </div>
        <span className="ml-4 text-gray-600 font-medium group-hover:text-gray-900 transition-colors">{text}</span>
    </a>
);

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">Let's Connect</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            I'm actively seeking opportunities to apply my skills in a professional setting.
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-4">
                            <ContactItem
                                icon={Mail}
                                text={resumeData.personalInfo.email}
                                href={`mailto:${resumeData.personalInfo.email}`}
                            />
                            <ContactItem
                                icon={Phone}
                                text={resumeData.personalInfo.phone}
                                href={`tel:${resumeData.personalInfo.phone}`}
                            />
                            <ContactItem
                                icon={Linkedin}
                                text="LinkedIn Profile"
                                href={resumeData.personalInfo.linkedin}
                            />
                            <ContactItem
                                icon={MapPin}
                                text="Karnataka, India"
                                href="#"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 p-8 rounded-2xl border border-gray-100"
                    >
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">Send Me a Message</h3>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                    placeholder="Hello, I'd like to discuss..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
