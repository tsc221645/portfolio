export const Labs = () => {
    return(
        <section id="labs" className="min-h-screen flex flex-col items-center justify-center p-6 pb-20">

            <div className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-300 to-purple-600 bg-clip-text text-transparent text-center">
                <h2 className="">Labs and other projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-white-500/30 hover:shadow-white">
                    <h3 className="font-bold py-2">
                        Lab 1 - El internet antes de la web
                    </h3>
                    <p>
                        Navigating and exploring telehack.com through telnet.
                    </p>
                    
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-white-500/30 hover:shadow-white">
                    <h3 className="font-bold py-2">
                        Command Line Clue
                    </h3>
                    <p>
                        This is a simple calculator with a friendly and capybara-inspired theme.
                    </p>
                    
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-white-500/30 hover:shadow-white">
                    <h3 className="font-bold py-2">
                        Lab 2 - Administracion de servidores remotos
                    </h3>
                    
                    <p>
                        In this lab it was required to use different commands to be familiar with Linux servers
                    </p>
                    
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-white-500/30 hover:shadow-white">
                    <h3 className="font-bold py-2">
                        Lab 3 - HTML only
                    </h3>
                    
                    <p>
                        This lab consisted in making a story using only html.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {["HTML"].map((tech, key) => (
                            <span className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-white-500/30 hover:shadow-white">
                    <h3 className="font-bold py-2">
                        Lab 4 - CSS only
                    </h3>
                    
                    <p>
                        Look at the peppa pig that I recreated using only css for styling.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {["HTML", "CSS",].map((tech, key) => (
                            <span className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-white-500/30 hover:shadow-white">
                    <h3 className="font-bold py-2">
                        Lab 5 - JS only
                    </h3>
                    
                    <p>
                        In this lab I created a chat that directly connected to the chat server to chat with otther users.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {["JS"].map((tech, key) => (
                            <span className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-white-500/30 hover:shadow-white">
                    <h3 className="font-bold py-2">
                        Lab 6 - Backend only - Parte 1
                    </h3>      
                    <p>
                        In this lab I created a backend using Docker and Go for an API.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {["Docker", "Go"].map((tech, key) => (
                            <span className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-white-500/30 hover:shadow-white">
                    <h3 className="font-bold py-2">
                        Lab 6 - Backend only - Parte 2
                    </h3>
                    <p>
                        In this lab I created a backend using Docker and Go for an API.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {["Docker", "Go"].map((tech, key) => (
                            <span className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-white-500/30 hover:shadow-white">
                    <h3 className="font-bold py-2" >
                        Lab 7 - React
                    </h3>
                    <p>
                        This lab consists of a How to Train your Dragon themed memory game.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {["Docker", "Go"].map((tech, key) => (
                            <span className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}