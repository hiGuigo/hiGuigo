import Section from "../layout/Section";

export default function About() {
  const experiences = [
    "Comunicação: alinhamento direto com cliente para definição de requisitos e entregas de valor",
    "Trabalho em equipe: colaboração com o time no desenvolvimento e organização das atividades",
    "Organização e planejamento: definição de escopo, tarefas e manutenção da documentação do projeto",
    "Visão de produto: priorização de funcionalidades com foco em valor e viabilidade de entrega",
    "Responsabilidade: acompanhamento de demandas e comprometimento com prazos",
    "Resolução de problemas: atuação prática no desenvolvimento, principalmente com React",
    "Adaptabilidade: equilíbrio entre necessidades de negócio e implementação técnica",
  ];

  return (
    <Section id="about">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-12">
          Sobre mim
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* TEXTO */}
          <div className="text-white/60 leading-relaxed space-y-4">
            <p>
              Sou um <strong>desenvolvedor em formação</strong> com foco em me
              tornar <strong>full stack</strong>, atualmente direcionando meus
              estudos para <strong>front-end</strong> com <strong>React</strong>
              , além de fundamentos em <strong>JavaScript</strong>,{" "}
              <strong>TypeScript</strong>, <strong>Node.js</strong> e{" "}
              <strong>APIs REST</strong>.
            </p>

            <p>
              Tenho praticado a construção de <strong>aplicações</strong> que
              integram <strong>interface</strong>, <strong>lógica</strong> e{" "}
              <strong>dados</strong>, incluindo um projeto em desenvolvimento
              com integração real entre <strong>front-end</strong> e{" "}
              <strong>back-end</strong>.
            </p>

            <p>
              Meu objetivo a curto prazo é conseguir um <strong>estágio</strong>{" "}
              como <strong>desenvolvedor</strong>, visando evoluir para{" "}
              <strong>júnior</strong>. No longo prazo, pretendo me consolidar
              como <strong>desenvolvedor full stack pleno</strong>, atuando no
              desenvolvimento de <strong>aplicações web completas</strong>, com
              foco em <strong>boas práticas</strong>,{" "}
              <strong>organização de código</strong>,{" "}
              <strong>componentização</strong> e{" "}
              <strong>integração entre sistemas</strong>.
            </p>
          </div>

          {/* EXPERIÊNCIAS */}
          <div className="flex flex-col gap-4">
            {experiences.map((item, i) => (
              <div
                key={i}
                className="
                  flex items-start gap-3 p-3 rounded-lg
                  border border-white/10 bg-white/5
                  transition-all duration-300
                  hover:border-cyan-400
                  hover:shadow-[0_0_12px_rgba(34,211,238,0.3)]
                  hover:translate-x-1
                "
              >
                <span className="text-cyan-400 mt-1">•</span>
                <p className="text-white/70 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
