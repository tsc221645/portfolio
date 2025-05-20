import { useEffect } from 'react';
import logo from '../assets/at_logo.png';
export const Navbar = ({menuOpen, setMenuOpen}) => {
    useEffect(()=>{
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);
    return <nav className="fixed top-0 w-full z-40 bg-[rgba(60, 24, 107,0.5) backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="font-mono text-xl font-bold text-white">
                    <img src={logo} alt="AT Logo" className="h-12 w-auto opacity-70" />
                </a>
                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={()=> setMenuOpen((prev)=> !prev)}>
                    &#9776;
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home </a>
                    <a href="#about" className="text-gray-300 hover:text-white transition-colors">About </a>
                    <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects </a>
                    <a href="#labs" className="text-gray-300 hover:text-white transition-colors">Labs </a>
                    <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact </a>
                </div>

            </div>
        </div>
    </nav>

}