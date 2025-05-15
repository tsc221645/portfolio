
export const Home = () => {
    return <section id="home" className="min-h-screen flex items-center justify-center relative">

        <div className="text-center x-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600  bg-clip-text  text-transparent leading-right">
                Hello, I am Ana Laura Tschen
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
                I am a Computer Engineering student who loves everything related to computers, 
                from making websites to building computers. I enjoy building stuff and finding solutions
                to different problems, using the newest technology to be up-to-date with the industry.
            </p>
            <div className="flex justify-center space-x-4">
                <a href="#projects" className="button-1 text-white py-3 px-6 rounded font-medium transition realtive overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                    View Projects
                </a>
                <a href="#contact" className="button-2 text-white py-3 px-6 rounded font-medium transition realtive overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                    Contact Me
                </a>
            </div>
        </div>
    </section>
}