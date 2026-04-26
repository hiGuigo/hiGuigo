import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const email = "guilherme.alvarenga021@gmail.com";

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/hiGuigo",
      type: "link",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/guilherme-alvarenga-0834b938a/",
      type: "link",
    },
    {
      icon: FaEnvelope,
      type: "email",
    },
  ];

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="w-full border-t backdrop-blur-md bg-black/40 border-white/10 text-white">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center gap-6">

        {/* ICONS */}
        <div className="flex gap-6">
          {socialLinks.map((item, i) => {
            const Icon = item.icon;

            // EMAIL
            if (item.type === "email") {
              return (
                <div key={i} className="relative">
                  <button
                    onClick={handleCopyEmail}
                    className="
                      group w-12 h-12 flex items-center justify-center
                      rounded-full border border-white/10 bg-white/5
                      transition-all duration-300
                      hover:scale-110
                      hover:border-cyan-400
                      hover:shadow-[0_0_18px_rgba(34,211,238,0.8)]
                    "
                  >
                    <Icon
                      size={20}
                      className="
                        text-white/80
                        group-hover:text-cyan-300
                        transition-all duration-300
                      "
                    />
                  </button>

                  {copied && (
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-cyan-300">
                      Copiado!
                    </span>
                  )}
                </div>
              );
            }

            // LINKS
            return (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="
                  group w-12 h-12 flex items-center justify-center
                  rounded-full border border-white/10 bg-white/5
                  transition-all duration-300
                  hover:scale-110
                  hover:border-cyan-400
                  hover:shadow-[0_0_18px_rgba(34,211,238,0.8)]
                "
              >
                <Icon
                  size={20}
                  className="
                    text-white/80
                    group-hover:text-cyan-300
                    transition-all duration-300
                  "
                />
              </a>
            );
          })}
        </div>

        {/* COPYRIGHT */}
        <p className="text-xs text-white/40 text-center">
          © {new Date().getFullYear()} - Guilherme Alvarenga
        </p>

      </div>
    </footer>
  );
}