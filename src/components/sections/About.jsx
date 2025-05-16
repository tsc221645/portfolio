export const About = () => {
    const frontendSkills = ["Vue", "JavaScript", "React", "HTML", "TypeScript", "CSS", "TailwindCSS", ]
    const backendSkills = ["Node.js", "PostgreSQL", "MongoDB", "Neo4j", "Go", "Python"]
    const otherSkills = ["Docker","Java", "Supabase", "C", "Figma",  "C++","Android Studio",  "Kotlin",  "PHP"]
    
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-300 to-purple-600 bg-clip-text text-transparent text-center">
                    About Me
                </h2>
                <div className=" rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        Dedicated student experienced with differente technologies
                        ranging from low-level programs to mobile and web development.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key)=>(
                                    <span className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20
                                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"> 
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key)=>(
                                    <span className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20
                                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"> 
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Other Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {otherSkills.map((tech, key)=>(
                                    <span className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20
                                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"> 
                                        {tech}
                                    </span>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Education </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>
                                        Ingeniería en Ciencias de la Computación y Tecnologías de la Información
                                    </strong> - Universidad del Valle de Guatemala (2022 - 2027)
                                </li>
                                <li>
                                    <strong>Relevant Coursework: </strong>
                                    Algorithms and Data Structures, Object Oriented Programming, Databases, Software Engineering, 
                                    Microprocessor Programming, Mobile Platforms, Operating Systems, Data Mining, Web Development
                                </li>
                            </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all space-y-2">
                            <h3 className="text-xl font-bold mb-4"> Work Experience </h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold">IT Manager at Prodin (2023 - Present)</h4>
                                    <p>Managed network and system performance, implemented robust backup strategies to safeguard critical data, and improved server configurations.</p>
                                </div>
                            </div>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold">Computer Engineering Intern at Pulster AI (Dec. 2024)</h4>
                                    <p>Developed technologies to aid in data collection for POIs, reseached and collected data about relevant demographics,
                                        worked with Geo processing tools ArcGIS and QGis, developed an trained ML models for model recognition.
                                    </p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
};