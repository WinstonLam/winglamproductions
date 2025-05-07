'use client';
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section id="contact" className="bg-second dark:bg-black text-prime dark:text-second py-16 -mt-16 px-4">
            <div className="max-w-xl mx-auto dark:text-second flex items-center flex-col">

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"

                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                        Elevate your story now
                    </h2>
                    <motion.a
                        href="/contact"
                        className=" inline-block bg-primary text-cream font-medium px-6 py-3 rounded border shadow-xl/30 dark:shadow-second
                        dark:shadow-xl/10 rounded-full z-10 hover:text-second hover:bg-prime dark:hover:bg-second dark:hover:text-prime transition-all duration-300"
                    >
                        Schedule a call
                    </motion.a>
                </motion.div>

            </div>
        </section>
    );
};

export default Contact;
