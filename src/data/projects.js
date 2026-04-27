import koiAero from "../assets/images/projects/koi-aero.png";
import koiCenso from "../assets/images/projects/koi-censo.jpg";

export const projects = [
  {
    id: 1,
    title: "Plataforma de Gerenciamento de Normas Aeronáuticas",
    status: "Em desenvolvimento",
    image: koiAero,

    description:
      "Centralizar o gerenciamento de normas técnicas com busca, classificação e rastreabilidade.",

    objective:
      "Desenvolver uma plataforma capaz de centralizar o gerenciamento de normas técnicas, permitindo aos engenheiros e time técnico organizar, registrar e consultar informações de forma estruturada, com recursos de busca, classificação e rastreabilidade.",

    solution:
      "Até o momento, desenvolvi, em equipe, uma aplicação web para gerenciamento de normas técnicas, estruturada para suportar operações de cadastro, consulta e relacionamento entre normas. A arquitetura da aplicação foi dividida entre front-end e back-end, com comunicação via API REST e a estruturação do backend com Fastify, incluindo modelagem de dados com Prisma e validação de dados com Zod.",

    result:
      "A aplicação já permite o cadastro e gerenciamento de normas técnicas, incluindo controle de versões, relacionamento entre normas e aplicação de filtros para consulta. Com isso, o sistema substitui processos manuais e descentralizados por uma solução estruturada, reduzindo o tempo necessário para localizar normas técnicas e melhorando a organização das informações no fluxo de engenharia.",

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
      "JavaScript",
      "HTML5",
      "CSS",
    ],

    contribution: [
      "Atuação como Product Owner, definindo escopo, priorizando entregas e alinhando requisitos com o cliente",
      "Desenvolvimento das interfaces com React e JavaScript",
      "Estruturação do front-end com separação por responsabilidades (components, services, utils, pages)",
      "Estilização com Tailwind CSS",
      "Preparação do front-end para consumo de API REST",
    ],

    github: "https://github.com/koitech-aero",
    demo: "https://www.youtube.com/watch?v=e-QOllVsI6s",
  },

  {
    id: 2,
    title: "Análise do Censo 2022 IBGE",
    status: "Concluído",
    image: koiCenso,

    description:
      "Transformar dados brutos em informações acessíveis e visuais.",

    objective:
      "Transformar dados brutos do Censo em informações acessíveis e de fácil interpretação — especialmente para usuários não técnicos.",

    solution:
      "Desenvolvi, em equipe, uma aplicação para processamento e visualização de dados, estruturando um pipeline completo (coleta → tratamento → insights → visualização). Os dados foram extraídos de planilhas oficiais (.xlsx), tratados e organizados com Pandas, e transformados em visualizações interativas com Plotly.",

    result:
      "A aplicação reduziu significativamente o tempo e o esforço necessários para análise dos dados demográficos, que antes eram processados manualmente em planilhas. Ao centralizar as informações em gráficos interativos, a solução permitiu identificar padrões de forma mais rápida e intuitiva, facilitando a geração de insights e apoiando a tomada de decisão em contextos públicos.",

    tech: [
      "Python",
      "Pandas",
      "Plotly",
      "Flask",
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "Google Colab",
    ],

    contribution: [
      "Atuação como Product Owner, definindo escopo e priorizando entregas",
      "Tratamento de valores nulos",
      "Normalização de colunas",
      "Exportação de gráficos em JSON",
      "Geração de gráficos interativos com Plotly",
      "Desenvolvimento do front-end com HTML, CSS e JavaScript",
      "Estruturação de templates com Flask (Jinja2)",
    ],

    github: "https://github.com/koitech-API",
    demo: "https://www.youtube.com/watch?v=_kmMAI6yvoQ",
  },
];
