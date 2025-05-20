export const Projects = () => {

    return (
        <section id="projects" className="min-h-screen flex flex-col items-center justify-center p-6 pb-20">

            <div className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-300 to-purple-600 bg-clip-text text-transparent text-center">
                <h2 className="">Featured Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a href="https://capiapp.netlify.app">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-white-500/30 hover:shadow-white">
                        <h3 className="font-bold py-2">
                            CapiApp
                        </h3>
                        <img src="src/assets/capiapp.png" alt="CapiApp Preview"
                            className="rounded-lg w-full h-auto mb-4 object-cover max-h-52" />
                        <p>
                            The CapiApp is a web application inspired by the world's biggest rodent, the Capybara. It has a friendly and chill vibe that was translated into this project.
                            We encourage you to explore and enjoy this small project!
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["Vue", "Go", "Docker", "HTML", "CSS", "PostgreSQL"].map((tech, key) => (
                                <span className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </a>

                <a href="/calculator/" target="_blank" rel="noopener noreferrer">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-white-500/30 hover:shadow-white">
                        <h3 className="font-bold py-2">
                            Calculator
                        </h3>
                        <img src="src/assets/calculator.png" alt="Calculator project preview"
                            className="rounded-lg w-full h-auto mb-4 object-cover max-h-52" />
                        <p>
                            This is a simple calculator with a friendly and capybara-inspired theme.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["React", "CSS", "HTML"].map((tech, key) => (
                                <span className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>

                    </div>
                </a>

                <a href="https://github.com/tsc221645/CC3087_Proyecto_Final">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-white-500/30 hover:shadow-white">
                        <h3 className="font-bold py-2">
                            BookTribe - Mobile App
                        </h3>
                        <img src="src/assets/booktribe.png" alt="Calculator project preview"
                            className="rounded-lg w-full h-auto mb-4 object-cover max-h-52" />
                        <p>
                            Application made to search, save and manage your favorite books while sharing your
                            reading interests with others.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["React", "CSS", "HTML"].map((tech, key) => (
                                <span className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </a>

            </div>
        </section>
    )
}