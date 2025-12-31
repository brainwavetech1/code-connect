import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/5 bg-black/50">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="font-bold text-xl mb-2">BrainWave Code & Connect</h3>
                    <p className="text-gray-500 text-sm">© 2025 BrainWave Technologies. All rights reserved.</p>
                </div>

                <div className="flex gap-6">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-xl"><FaGithub /></a>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-xl"><FaTwitter /></a>
                    <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors text-xl"><FaLinkedin /></a>
                    <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors text-xl"><FaInstagram /></a>
                </div>
            </div>

            <div className="text-center mt-12 text-xs text-gray-700">
                <a href="#" className="hover:text-gray-500 mx-2">Privacy Policy</a> •
                <a href="#" className="hover:text-gray-500 mx-2">Terms of Service</a> •
                <a href="#" className="hover:text-gray-500 mx-2">Code of Conduct</a>
            </div>
        </footer>
    );
};
