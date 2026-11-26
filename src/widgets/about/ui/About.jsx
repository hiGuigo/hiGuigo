import Section from "../../../shared/ui/Section";

export default function About() {
  return (
    <Section id="about">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-10">
          Sobre mim
        </h2>

        <div className="max-w-4xl space-y-5 text-justify leading-relaxed text-white/70">
          <p>
            Sou Guilherme Alvarenga, tecnólogo em Análise e Desenvolvimento de
            Sistemas e atualmente estudante de Desenvolvimento de Software
            Multiplataforma na FATEC. No início da minha trajetória, atuei como
            estagiário desenvolvendo e mantendo páginas web com HTML, CSS e C#,
            além de dar suporte a dados em SQL Server.
          </p>
          <p>
            Nos projetos, tenho trabalhado entre desenvolvimento web e dados:
            desde entender o problema e organizar requisitos até implementar
            interfaces, integrações e visualizações que ajudam pessoas a
            encontrar e usar informação. Busco uma oportunidade de estágio ou
            uma posição júnior em desenvolvimento de software.
          </p>
        </div>

        <div className="mt-8 max-w-4xl">
          <p className="border-t border-white/10 pt-4 text-sm text-white/50">
            <strong className="font-semibold text-cyan-300">
              Palavras-chave:
            </strong>{" "}
            desenvolvimento web; React; TypeScript; APIs REST; Node.js; SQL
            Server; Python; análise de dados; Java; Spring.
          </p>
        </div>

        <div className="mt-6 max-w-4xl rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-5">
          <h3 className="mb-2 font-semibold text-cyan-300">
            O que estou aprendendo agora
          </h3>
          <p className="text-justify text-sm leading-relaxed text-white/70">
            Estou aprofundando meus conhecimentos em programação orientada a
            objetos, Java, Spring, padrões de projeto e boas práticas de
            arquitetura, enquanto continuo desenvolvendo projetos com React,
            APIs REST e Python.
          </p>
        </div>
      </div>
    </Section>
  );
}
