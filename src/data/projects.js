import koiAero from "../assets/images/projects/koi-aero.png";
import koiCenso from "../assets/images/projects/koi-censo.jpg";

export const projects = [
  {
    id: 1,
    title: "Plataforma de Gerenciamento de Normas Aeronáuticas",
    status: "em desenvolvimento",
    image: koiAero,

    problem:
      "O cliente utiliza um grande volume de normas técnicas ao longo do processo de engenharia, mas a consulta dessas normas é lenta e desorganizada.",

    objective:
      "Centralizar o gerenciamento de normas técnicas com busca, classificação e rastreabilidade.",

    solution:
      "Aplicação web com arquitetura separada entre front-end e back-end, API REST, Fastify, Prisma e Zod.",

    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Fastify",
      "Prisma",
      "Zod",
      "Docker",
      "Git",
    ],

    result:
      "Redução do tempo de busca de normas e substituição de processos manuais por uma solução estruturada.",

    contribution: [
      "Atuação como Product Owner",
      "Desenvolvimento de interfaces com React",
      "Estruturação de front-end modular",
      "Integração com API REST",
      "Estilização com Tailwind CSS",
    ],

    github: "https://github.com/koitech-aero",
    demo: "https://www.youtube.com/watch?v=e-QOllVsI6s",
  },

  {
    id: 2,
    title: "Análise do Censo 2022 IBGE",
    image: koiCenso,

    problem:
      "Dados do IBGE são extensos, não padronizados e difíceis de analisar.",

    objective:
      "Transformar dados brutos em informações acessíveis e visuais.",

    solution:
      "Pipeline de dados com Pandas + visualização com Plotly + Flask.",

    tech: ["Python", "Pandas", "Plotly", "Flask", "HTML", "CSS", "JS", "Git"],

    result:
      "Facilitou análise de dados demográficos com gráficos interativos.",

    contribution: [
      "Tratamento de dados nulos",
      "Normalização de colunas",
      "Criação de gráficos com Plotly",
      "Estruturação com Flask",
    ],

    github: "https://github.com/koitech-API",
    demo: "https://www.youtube.com/watch?v=_kmMAI6yvoQ",
  },
];