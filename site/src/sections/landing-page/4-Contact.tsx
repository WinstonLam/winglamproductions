'use client';
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section id="contact" className="bg-second dark:bg-black text-gray-900 py-16 px-4">
            <div className="max-w-xl mx-auto dark:text-second">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                    Contact Us
                </h2>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    {/* Contact form */}
                    <form className="mb-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="border border-gray-300 rounded p-2"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="border border-gray-300 rounded p-2"
                            />
                        </div>
                        <textarea
                            placeholder="Your message"
                            rows={4}
                            className="border border-gray-300 rounded p-2 w-full mt-4"
                        ></textarea>
                        <button
                            type="submit"
                            className="mt-4 w-full bg-primary text-cream py-2 px-4 rounded hover:bg-opacity-90"
                        >
                            Send Message
                        </button>
                    </form>
                    {/* Calendly link */}
                    <div className="text-center">
                        <p className="mb-4">Or schedule a meeting directly:</p>
                        <a
                            href="https://calendly.com/your-calendly-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-primary text-cream px-4 py-2 rounded hover:bg-opacity-90"
                        >
                            Book via Calendly
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
