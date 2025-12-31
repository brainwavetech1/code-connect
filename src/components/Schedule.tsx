import { motion } from 'framer-motion';

const scheduleItems = [
    { time: "09:00 AM", title: "Arrival & Coffee", description: "Check-in, grab your swag, and meet fellow developers." },
    { time: "10:00 AM", title: "Keynote: The Future of African Tech", description: "Opening remarks by industry leaders." },
    { time: "11:00 AM", title: "Breakout Sessions / Workshops", description: "Choose from 3 tracks: AI, Web3, or Mobile Dev." },
    { time: "01:00 PM", title: "Lunch & Networking", description: "Catered lunch and structured networking activities." },
    { time: "02:30 PM", title: "Hackathon Showcase", description: "See what the community has been building." },
    { time: "04:00 PM", title: "Panel: Scaling Your Career", description: "Insights from senior engineers and CTOs." },
    { time: "05:00 PM", title: "Happy Hour & Gaming", description: "Drinks, music, and friendly competition." }
];

export const Schedule = () => {
    return (
        <section id="schedule" className="py-24 relative">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">The Schedule</h2>
                    <p className="text-gray-400">A packed day of learning and connection.</p>
                </motion.div>

                <div className="space-y-8">
                    {scheduleItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex gap-6 md:gap-10 group"
                        >
                            <div className="w-24 md:w-32 text-right pt-2 flex-shrink-0">
                                <span className="font-mono text-accent font-bold">{item.time}</span>
                            </div>

                            <div className="relative pl-8 md:pl-10 border-l border-white/10 pb-8 last:pb-0 last:border-0 group-hover:border-accent/50 transition-colors">
                                <div className="absolute left-[-5px] top-[10px] w-2.5 h-2.5 bg-gray-600 rounded-full group-hover:bg-accent group-hover:scale-125 transition-all" />
                                <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors text-white/90">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
