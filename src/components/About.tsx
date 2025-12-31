import { motion } from 'framer-motion';

export const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">
                        About The Event
                    </span>
                    <h2 className="text-4xl font-bold mb-6">
                        More Than Just code. <br />
                        <span className="text-gray-400">It's a Movement.</span>
                    </h2>
                    <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                        BrainWave Code & Connect isn't your typical tech conference. It's a space designed for
                        <strong> connection, collaboration, and growth</strong>. We believe that the best code
                        is written when minds come together.
                    </p>
                    <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                        Whether you're a senior engineer, a student, or a founder, you'll find your tribe here.
                        Expect deep technical talks, hands-on sessions, and genuine conversations that go
                        beyond the surface.
                    </p>

                    <div className="flex gap-8">
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-1">500+</h3>
                            <p className="text-sm text-gray-500">Developers</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-1">10+</h3>
                            <p className="text-sm text-gray-500">Speakers</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-1">1</h3>
                            <p className="text-sm text-gray-500">Unforgettable Day</p>
                        </div>
                    </div>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative z-10 rounded-2xl overflow-hidden glass p-2">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                            alt="Developers collaborating"
                            className="rounded-xl w-full h-auto shadow-2xl"
                        />
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />
                    <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px]" />
                </motion.div>
            </div>
        </section>
    );
};
