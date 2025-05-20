
export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const sections = ['home', 'about', 'projects', 'labs', 'contact'];

  return (
    <div
      className={`
        fixed inset-0
        bg-[rgba(60,24,107,0.9)]
        z-40
        flex flex-col items-center justify-center
        transition-opacity duration-300
        ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
    >
      
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none"
        aria-label="Close Menu"
      >
        &times;
      </button>

      
      {sections.map((sec, idx) => (
        <a
          key={sec}
          href={`#${sec}`}
          onClick={() => setMenuOpen(false)}
          className={`
            text-2xl font-semibold text-white my-4
            transform transition-all duration-300
            ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
          `}
          style={{ transitionDelay: `${idx * 100}ms` }}
        >
          {sec.charAt(0).toUpperCase() + sec.slice(1)}
        </a>
      ))}
    </div>
  );
};
