import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import profile from "../../assets/images/profile/profile.jpg";

export default function Hero() {
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
      value: email,
    },
  ];

  const handleEmailClick = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row text-white bg-black"
    >
      {/* FOTO */}
      <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-screen bg-white/5 border-r border-white/10 flex items-center justify-center">
        <div className="w-[clamp(20rem,40vw,20rem)] h-[clamp(20rem,40vw,20rem)] rounded-full border border-white/20 bg-white/10 overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.15)]">
          <img
            src={profile}
            alt="Guilherme"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* CONTEÚDO */}
      <div className="w-full md:w-1/2 min-h-[50vh] flex items-center justify-center px-8 py-16">
        <div className="flex flex-col gap-4 max-w-md">
          <span className="text-white/50 text-md tracking-widest uppercase">
            <span className="font-bold text-white">Boas vindas</span> ao meu
            portfólio!
          </span>

          <div className="flex items-end gap-2 font-bold">
            <p className="text-2xl text-white">Eu me chamo</p>{" "}
            <p className="text-4xl md:text-5xl text-cyan-400">
              Guilherme!
            </p>
          </div>

          <p className="text-white/60 leading-relaxed">
            Desenvolvedor Front-End focado em criar interfaces modernas,
            responsivas e com experiências fluidas utilizando React e Tailwind.
          </p>

          {/* ÍCONES */}
          <div className="flex gap-6">
            {socialLinks.map((item, i) => {
              const Icon = item.icon;

              // EMAIL
              if (item.type === "email") {
                return (
                  <div key={i} className="relative">
                    <button
                      onClick={handleEmailClick}
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
                        className="text-white/80 group-hover:text-cyan-300 transition-all duration-300"
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
                    className="text-white/80 group-hover:text-cyan-300 transition-all duration-300"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
