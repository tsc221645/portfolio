import { FaLinkedin, FaGithub } from 'react-icons/fa';

export const Contact = () => {
    return (
        <section id="contact" className="min-h-screen flex flex-col items-center justify-center p-6 pb-20">
            <div className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-300 to-purple-600 bg-clip-text text-transparent text-center">
                <h2>Contact Me</h2>
            </div>

            <div className="flex space-x-6">
                
                <a href="https://www.linkedin.com/in/ana-laura-tschen-moscoso-12ba59242" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-blue-600 transition">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/tsc221645" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-gray-400 transition">
                    <FaGithub />
                </a>
            </div>
        </section>
    );
};