import Section from "../layout/Section";
import { education } from "../../data/education";

export default function Education() {
  return (
    <Section id="education">
      {/* TÍTULO */}
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-12">
        Formação Acadêmica
      </h2>

      {/* LISTA */}
      <div className="flex flex-col gap-6">
        {education.map((item, index) => (
          <div
            key={index}
            className="
              flex flex-col gap-2
              p-5 rounded-xl
              border border-white/10
              bg-white/5
              transition-all duration-300
              hover:border-cyan-400
              hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]
              hover:translate-x-1
            "
          >
            {/* topo (tipo + status) */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-cyan-400 text-sm font-medium">
                {item.type}
              </span>

              <span className="text-white/40 text-xs uppercase tracking-wider">
                {item.status}
              </span>
            </div>

            {/* instituição */}
            <h3 className="text-white font-semibold">{item.institution}</h3>

            {/* curso */}
            <p className="text-white/70 text-sm">{item.course}</p>

            {/* período */}
            <p className="text-white/40 text-xs">{item.period}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
