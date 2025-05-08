/* ------------------------------------------------------------------
   Contact page – Winglam Productions
-------------------------------------------------------------------*/
"use client";

import { motion } from "framer-motion";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
export default function ContactPage() {
    return (
        <main className="bg-second dark:bg-black pt-28 pb-20 px-6 text-black dark:text-second flex items-center ">
            <section className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
                {/* ───── intro copy ───── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6 }}
                    className="md:mt-15 w-[80%]"
                >
                    <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                        Let’s make your story

                    </h1>

                    <ContainerTextFlip className="-mt-5 text-3xl md:text-4xl" words={["Extraordinary", "Breathtaking", "Inspiring",
                        "Magical", "Captivating", "Unforgettable", "Impactful", "Spectacular", "Phenomenal", "Everlasting"]}>

                    </ContainerTextFlip>

                    <p className="text-lg leading-relaxed mb-8">
                        Drop us a line, book a discovery call, or just say hi—
                        we’re always keen to chat about stories worth telling.
                    </p>

                    <div className="space-y-4 text-base">
                        <p>
                            <span className="font-semibold">Email:</span>{" "}
                            <a
                                href="mailto:hello@winglam‑productions.com"
                                className="underline underline-offset-2 decoration-primary hover:text-primary"
                            >
                                winglamproductions@outlook.com
                            </a>
                        </p>
                        <p>
                            <span className="font-semibold">Phone:</span>{" "}
                            <a
                                href="tel:+31123456789"
                                className="underline underline-offset-2 decoration-primary hover:text-primary"
                            >
                                +31 12 345 6789
                            </a>
                        </p>
                        <p>
                            <span className="font-semibold">Studio:</span> Amsterdam, NL
                        </p>
                    </div>
                </motion.div>

                {/* ───── form card ───── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="w-full"

                >


                    <div className="bg-second w-60h-[70vh] overflow-y-scroll dark:bg-black  rounded-xl p-8 backdrop-blur-sm  bg-second dark:bg-black rounded-xl p-8 
                    backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.30)] dark:shadow-[0_0_20px_rgba(var(--color-second-rgb,255,255,255),0.20)]
                        [&::-webkit-scrollbar]:w-2
                        [&::-webkit-scrollbar-track]:bg-transparent
                        [&::-webkit-scrollbar-thumb]:rounded-full
                        [&::-webkit-scrollbar-thumb]:bg-prime/70
                        dark:[&::-webkit-scrollbar-thumb]:bg-second/70">
                        <h2 className="text-2xl font-semibold mb-6 text-prime dark:text-second">Send us a message</h2>
                        <form
                            className="space-y-6 text-prime dark:text-second "
                            onSubmit={(e) => {
                                e.preventDefault();
                                /* TODO: hook up backend or service */
                                alert("Thanks! We’ll be in touch shortly.");
                            }}
                        >
                            {/* ── Name row ─────────────────────────────── */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First name"
                                    className="border border-prime dark:border-second rounded p-2 bg-transparent focus:outline-primary"
                                    required
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last name"
                                    className="border border-prime dark:border-second rounded p-2 bg-transparent focus:outline-primary"
                                    required
                                />
                            </div>

                            {/* ── Business URL ────────────────────────── */}
                            <input
                                type="url"
                                name="website"
                                placeholder="Business website / social‑media link"
                                className="w-full border border-prime dark:border-second rounded p-2 bg-transparent focus:outline-primary"
                                required
                            />

                            {/* ── Email + Phone ───────────────────────── */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="border border-prime dark:border-second rounded p-2 bg-transparent focus:outline-primary"
                                    required
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone number"
                                    className="border border-prime dark:border-second rounded p-2 bg-transparent focus:outline-primary"
                                    required
                                />
                            </div>

                            {/* ── Services interested in ──────────────── */}
                            <fieldset>
                                <legend className="font-semibold mb-2">
                                    What services are you interested in?
                                </legend>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    {["Videography", "Photography", "Both"].map((s) => (
                                        <label key={s} className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="services"
                                                value={s.toLowerCase()}
                                                className="accent-primary"
                                                required
                                            />
                                            {s}
                                        </label>
                                    ))}
                                </div>
                            </fieldset>

                            {/* ── Reasons for video ───────────────────── */}
                            <fieldset>
                                <legend className="font-semibold mb-2">
                                    Why do you want to implement video into your business?
                                </legend>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {[
                                        "Increase website engagement",
                                        "Build credibility & trust with prospects",
                                        "Save time & qualify leads in sales process",
                                        "Increase brand awareness on social media",
                                    ].map((r) => (
                                        <label key={r} className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                name="reasons"
                                                value={r}
                                                className="accent-primary"
                                            />
                                            {r}
                                        </label>
                                    ))}
                                </div>
                            </fieldset>

                            {/* ── Budget ──────────────────────────────── */}
                            <label className="block font-semibold">
                                What is your estimated budget for this project?
                                <select
                                    name="budget"
                                    required
                                    className="mt-2 w-full border border-prime dark:border-second rounded p-2 bg-transparent focus:outline-primary font-light"
                                >
                                    <option value="" disabled selected>
                                        Select an option
                                    </option>
                                    <option>&lt; €2,500</option>
                                    <option>€2,500 - €5,000</option>
                                    <option>€5,000 - €7,500</option>
                                    <option>&gt; €7,500</option>
                                </select>
                                <p className="text-sm mt-1 font-light">
                                    On average, most of our video projects sit between €2,500 - €7,500 excl. tax
                                </p>
                            </label>

                            {/* ── Start timeline ─────────────────────── */}
                            <label className="block font-semibold">
                                How soon do you want to get started?
                                <select
                                    name="startTimeline"
                                    required
                                    className="mt-2 w-full border border-prime dark:border-second rounded p-2 bg-transparent focus:outline-primary font-light"
                                >
                                    <option value="" disabled selected>
                                        Select an option
                                    </option>
                                    <option>ASAP (next 2 weeks)</option>
                                    <option>1 - 2 months</option>
                                    <option>3 - 6 months</option>
                                    <option>Just researching for now</option>
                                </select>
                            </label>

                            {/* ── Visual references ───────────────────── */}
                            <textarea
                                name="references"
                                placeholder="Links to any visual references you’d like us to match"
                                rows={3}
                                required
                                className="border border-prime dark:border-second rounded p-2 w-full bg-transparent focus:outline-primary"
                            />

                            {/* ── Vision ─────────────────────────────── */}
                            <textarea
                                name="vision"
                                placeholder="Tell us about your vision for the project"
                                rows={5}
                                className="border border-prime dark:border-second rounded p-2 w-full bg-transparent focus:outline-primary"
                            />

                            {/* ── Referral source ────────────────────── */}
                            <label className="block font-semibold">
                                How did you hear about us?
                                <select
                                    name="referral"
                                    className="mt-2 w-full border border-prime dark:border-second rounded p-2 bg-transparent focus:outline-primary font-light"
                                >
                                    <option value="" disabled selected>
                                        Select an option
                                    </option>
                                    <option>Instagram</option>
                                    <option>Facebook</option>
                                    <option>YouTube</option>
                                    <option>Google search</option>
                                    <option>Friend / referral</option>
                                    <option>Other</option>
                                </select>
                            </label>

                            {/* ── Submit ─────────────────────────────── */}
                            <button
                                type="submit"
                                className="w-full bg-second dark:bg-black border border-prime dark:border-second 
                                dark:text-second text-prime py-3 rounded-full  hover:bg-prime hover:text-second 
                                dark:hover:bg-second dark:hover:text-prime font-bold
                                transition-all duration-300 cursor-pointer"
                            >
                                Book a call
                            </button>
                        </form>


                    </div>


                </motion.div>
            </section>
        </main>
    );
}
