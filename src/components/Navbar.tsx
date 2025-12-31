import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaCode } from 'react-icons/fa';

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
                    <FaCode className="text-accent" />
                    <span>BrainWave <span className="text-gray-400">Code & Connect</span></span>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <a href="#about" className="text-sm hover:text-white/80 transition-colors text-white/60">About</a>
                    <a href="#expect" className="text-sm hover:text-white/80 transition-colors text-white/60">Expect</a>
                    <a href="#schedule" className="text-sm hover:text-white/80 transition-colors text-white/60">Schedule</a>
                    <a
                        href="#register"
                        className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors"
                    >
                        Register Now
                    </a>
                </div>
            </div>
        </motion.nav>
    );
};
