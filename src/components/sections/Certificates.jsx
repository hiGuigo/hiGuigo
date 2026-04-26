import Section from "../layout/Section";
import { certificates } from "../../data/certificates";

export default function Certificates() {
  return (
    <Section id="certificates">
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-12">
        Certificados
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificates.map((cert) => (
          <div
            key={cert.id}
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
            {/* IMAGEM */}
            <div className="aspect-4/3">
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
          </div>
        ))}
      </div>
    </Section>
  );
}