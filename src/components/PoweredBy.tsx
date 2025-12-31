import { motion } from 'framer-motion';
import { FaBrain } from 'react-icons/fa';

export const PoweredBy = () => {
    return (
        <section className="py-16 bg-gradient-to-t from-black to-transparent flex flex-col items-center justify-center">
            <p className="text-gray-500 text-sm mb-4 uppercase tracking-widest">Powered By</p>
            <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3"
            >
                <FaBrain className="text-4xl text-accent" />
                <span className="text-2xl font-bold tracking-tight">BrainWave <span className="text-gray-500">Technologies</span></span>
            </motion.div>
        </section>
    );
};
