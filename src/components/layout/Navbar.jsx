import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Sobre", href: "#about" },
    { label: "Projetos", href: "#projects" },
    { label: "Repositórios", href: "#repositories" },
    { label: "Formação", href: "#education" },
    { label: "Certificados", href: "#certificates" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        ${
          scrolled
            ? "backdrop-blur-md bg-black/60 border-b border-white/10"
            : "bg-transparent"
        }
      `}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        {/* NAME */}
        <div
          onClick={scrollToTop}
          className="text-xl font-bold tracking-wide cursor-pointer transition-all duration-300 hover:scale-120 text-cyan-400"
        >
          Guilherme
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                relative font-bold text-white/70
                hover:text-cyan-300
                transition-all duration-300
                hover:scale-110
              "
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all duration-300 hover:w-full"></span>
            </a>
          ))}

          {/* CV BUTTON */}
          <a
            href="../public/guilherme_alvarenga_curriculo.pdf"
            download
            className="
              flex items-center gap-2
              px-4 py-2
              rounded-full
              border border-white/10
              bg-white/5
              text-white/80
              transition-all duration-300
              hover:scale-105
              hover:border-cyan-400
              hover:text-cyan-300
              hover:shadow-[0_0_15px_rgba(34,211,238,0.6)]
            "
          >
            <FaDownload size={14} />
            CV
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-md px-6 py-4 flex flex-col gap-4 border-t border-white/10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-cyan-300 transition"
            >
              {link.label}
            </a>
          ))}

          {/* CV MOBILE */}
          <a
            href="../public/guilherme_alvarenga_curriculo.pdf"
            download
            className="
              flex items-center justify-center gap-2
              mt-2 px-4 py-2
              rounded-full
              border border-white/10
              bg-white/5
              text-white/80
              hover:border-cyan-400
              hover:text-cyan-300
              transition
            "
          >
            <FaDownload size={14} />
            Download CV
          </a>
        </div>
      )}
    </header>
  );
}
