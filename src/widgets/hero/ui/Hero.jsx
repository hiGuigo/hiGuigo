import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import profile from "../../../shared/assets/profile/profile.jpg";

export default function Hero() {
  const [copyStatus, setCopyStatus] = useState("");

  const email = "guilherme.alvarenga021@gmail.com";

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/hiGuigo",
      type: "link",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/guilhermealvarenga021/",
      type: "link",
    },
    {
      icon: FaEnvelope,
      type: "email",
      value: email,
    },
  ];

  const handleEmailClick = async () => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard indisponível");
      await navigator.clipboard.writeText(email);
      setCopyStatus("E-mail copiado");
    } catch {
      setCopyStatus(`Copie manualmente: ${email}`);
    }

    window.setTimeout(() => setCopyStatus(""), 3000);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row text-white"
    >
      {/* FOTO */}
      <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-screen bg-white/5 border-r border-white/10 flex items-center justify-center">
        <div className="w-[clamp(14rem,35vw,22rem)] h-[clamp(14rem,35vw,22rem)] rounded-full border border-white/20 bg-white/10 overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.15)]">
          <img
            src={profile}
            alt="Guilherme"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* CONTEÚDO */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-8 py-16">
        <div className="flex flex-col gap-4 max-w-md">
          <span className="text-sm tracking-widest text-white/50 uppercase sm:text-base">
            <span className="font-bold text-white">Boas-vindas</span> ao meu
            portfólio!
          </span>

          <h1 className="flex flex-wrap items-baseline gap-x-2 font-bold">
            <span className="text-xl text-white sm:text-2xl">Eu me chamo</span>
            <span className="text-3xl text-cyan-400 sm:text-4xl md:text-5xl">
              Guilherme!
            </span>
          </h1>

          <p className="text-white/60 leading-relaxed">
            Desenvolvedor de software com experiência em aplicações web e
            análise de dados. Estudante de DSM na FATEC, estou à procura de uma
            oportunidade de estágio.
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
                      type="button"
                      aria-label="Copiar endereço de e-mail"
                      onClick={handleEmailClick}
                      className="
                        group w-12 h-12 flex cursor-pointer items-center justify-center
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

                    {copyStatus && (
                      <span role="status" aria-live="polite" className="absolute -bottom-8 left-1/2 -translate-x-1/2 max-w-[min(19rem,85vw)] whitespace-normal text-center text-xs text-cyan-300">
                        {copyStatus}
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
                  aria-label={item.href.includes("github") ? "GitHub" : "LinkedIn"}
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
