export const About = () => {
    return ( 
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center">
                About Me
            </h2>
            <div className=" rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    Dedicated student experienced with differente technologies
                    ranging from low-level programs to mobile and web development.
                </p>
            </div>
        </div>
    </section>
    )
};