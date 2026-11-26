import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";
import Section from "../../../shared/ui/Section";
import { certificates } from "../../../entities/certificate/model/certificates";

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    if (!selectedCertificate) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedCertificate(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedCertificate]);

  return (
    <Section id="certificates">
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-10">
        Certificados
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {certificates.map((cert) => (
          <button
            key={cert.id}
            type="button"
            onClick={() => setSelectedCertificate(cert)}
            aria-label={`Ampliar certificado: ${cert.title}`}
            className="
              group block w-full cursor-pointer text-left
              rounded-xl overflow-hidden
              border border-white/10
              bg-white/5
              min-h-70 md:min-h-80
              transition-all duration-300
              hover:border-cyan-400
              hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]
              hover:-translate-y-1
            "
          >
            <div className="aspect-video overflow-hidden bg-white/10">
              <img
                src={cert.image}
                alt={cert.title}
                className="
                  w-full h-full object-cover
                  transition-transform duration-300
                  group-hover:scale-105
                "
              />
            </div>

            <div className="p-4 flex flex-col gap-2 flex-1">
              <h3 className="text-white font-semibold text-lg">{cert.title}</h3>

              <p className="text-white/60 text-sm line-clamp-3">
                {cert.issuer}
              </p>

              <div className="text-sm text-white/40 flex items-center gap-1">
                Clique para ampliar →
              </div>
            </div>
          </button>
        ))}
      </div>

      {selectedCertificate && createPortal(
        <div
          role="presentation"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 sm:p-6"
          onClick={() => setSelectedCertificate(null)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-label={selectedCertificate.title}
            className="themed-scrollbar relative max-h-[85vh] w-full max-w-4xl overflow-y-auto rounded-xl border border-white/10 bg-black p-4 pt-14 sm:p-6 sm:pt-14"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedCertificate(null)}
              aria-label="Fechar certificado"
              className="absolute right-3 top-3 z-10 rounded-full bg-black/70 p-2 text-white/80 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
            >
              <FaTimes aria-hidden="true" />
            </button>
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className="mx-auto max-h-[75vh] w-full object-contain"
            />
          </section>
        </div>,
        document.body,
      )}
    </Section>
  );
}
