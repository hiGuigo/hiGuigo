import Section from "../layout/Section";
import { certificates } from "../../data/certificates";
import { useState } from "react";

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <Section id="certificates">
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-12">
        Certificados
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            onClick={() => setSelectedCertificate(cert)}
            className="
              group cursor-pointer
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
          </div>
        ))}
      </div>

      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="
              max-w-4xl
              bg-black border border-white/10
              rounded-xl p-6
              overflow-y-auto max-h-[80vh]
              no-scrollbar
            "
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className="w-full h-full object-contain bg-black"
            />
          </div>
        </div>
      )}
    </Section>
  );
}
