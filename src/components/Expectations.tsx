import { motion } from 'framer-motion';
import { FaLaptopCode, FaGamepad, FaUsers, FaMusic } from 'react-icons/fa';

const features = [
    {
        icon: <FaLaptopCode className="text-3xl mb-4 text-purple-400" />,
        title: "Code & Showcase",
        description: "Show off your latest projects, get feedback, and see what others are building in the Kigali tech scene."
    },
    {
        icon: <FaGamepad className="text-3xl mb-4 text-blue-400" />,
        title: "Games & Open Mic",
        description: "Unwind with gaming sessions and an open mic for lighting talks or just sharing fun stories."
    },
    {
        icon: <FaUsers className="text-3xl mb-4 text-green-400" />,
        title: "Networking",
        description: "No awkward small talk. Structured networking to help you find mentors, co-founders, or friends."
    },
    {
        icon: <FaMusic className="text-3xl mb-4 text-pink-400" />,
        title: "Chill & Music",
        description: "Vibe to curated playlists and maybe even a silent disco to wrap up the evening."
    }
];

export const Expectations = () => {
    return (
        <section id="expect" className="py-24 bg-black/50">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">What to Expect</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A balanced mix of technical depth and human connection.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-8 rounded-2xl border border-white/5 hover:border-white/10"
                        >
                            <div className="bg-white/5 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
