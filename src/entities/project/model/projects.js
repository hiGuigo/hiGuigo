import koiAero from "../assets/koi-aero.png";
import koiCenso from "../assets/koi-censo.jpg";
import aerocode from "../assets/aerocode.png";

export const projects = [
  {
    id: 1,
    title: "Análise do Censo 2022 do IBGE",
    status: "Concluído",
    image: koiCenso,

    description:
      "Transformar dados brutos em informações acessíveis e visuais.",

    context:
      "Projeto acadêmico desenvolvido a partir de dados públicos do Censo 2022 do IBGE.",

    challenge:
      "Transformar planilhas extensas em informações acessíveis, especialmente para pessoas sem experiência técnica em análise de dados.",

    action:
      "Em equipe, organizei um fluxo de coleta, tratamento e visualização. Usei Pandas para preparar os dados e Plotly para criar gráficos interativos; também atuei como Product Owner na definição do escopo e na priorização das entregas.",

    result:
      "A aplicação reuniu os dados em visualizações interativas, facilitando a exploração e a identificação de padrões sem depender da leitura manual das planilhas.",

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

    contributionDesc: "Contribuições em destaque:",

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

  {
    id: 2,
    title: "Plataforma de Gerenciamento de Normas Aeronáuticas",
    status: "Concluído",
    image: koiAero,

    description:
      "Centralizar o gerenciamento de normas técnicas com busca, classificação e rastreabilidade.",

    context:
      "Projeto institucional criado para apoiar equipes de engenharia na consulta e no gerenciamento de normas técnicas aeronáuticas.",

    challenge:
      "Centralizar o cadastro e a consulta de normas, preservando versões, relações entre documentos, classificação e rastreabilidade.",

    action:
      "Em equipe, desenvolvi a aplicação com front-end e back-end integrados por API REST. Contribuí na definição de requisitos e prioridades com o cliente e implementei interfaces em React, com preparação para consumo da API.",

    result:
      "A plataforma reúne cadastro, controle de versões, relações entre normas e pesquisa por tags, além de organizar usuários e responsabilidades em um fluxo centralizado.",

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

    contributionDesc: "Contribuições em destaque:",

    contribution: [
      "Atuação como Product Owner, definindo escopo, priorizando entregas e alinhando requisitos com o cliente",
      "Desenvolvimento das interfaces com React e JavaScript",
      "Estruturação do front-end com separação por responsabilidades",
      "Estilização com Tailwind CSS",
      "Preparação do front-end para consumo de API REST",
    ],

    github: "https://github.com/koitech-aero",
    demo: "https://www.youtube.com/watch?v=eS4vuLcupuk",
  },

  {
    id: 3,
    title: "Aerocode",
    status: "Concluído",
    image: aerocode,

    description: "Aplicação web completa com relatório crítico.",

    context:
      "Aplicação web full stack para gerenciar processos de uma fabricante fictícia de aeronaves.",

    challenge:
      "Integrar o gerenciamento de usuários, aeronaves, peças, etapas de produção e testes com autenticação e permissões adequadas.",

    action:
      "Implementei persistência com MySQL e Prisma, organizei o back-end em responsabilidades e desenvolvi autenticação com JWT, criptografia com Bcrypt e controle de acesso por função (RBAC). Também conduzi testes de desempenho com diferentes níveis de concorrência.",

    result:
      "O sistema integra operações de produção e controle de acesso em uma aplicação documentada. A análise de desempenho registra latência e tempos de resposta em cenários com 1, 5 e 10 usuários simultâneos.",

    tech: [
      "Node.js",
      "TypeScript",
      "Prisma ORM",
      "MySQL",
      "Fastify",
      "Vite",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Bcrypt",
      "Autocannon",
      "JSON Web Token",
    ],

    contributionDesc: "Contribuições em destaque:",

    contribution: [
      "Integração com o MySQL utilizando o Prisma ORM",
      "Arquitetura dividida em responsabilidades",
      "Criptografia de senhas utilizando o Bcrypt",
      "Utilização de JWT para autenticação de usuário no login",
      "Rotas protegidas e com verificação de permissões (RBAC)",
      "Análise de latência, tempo de processamento e tempo de resposta",
      "Testes críticos de requisições simultâneas (1, 5 e 10 usuários)",
      "Relatório com análise dos resultados obtidos nos testes de desempenho",
    ],

    github: "https://github.com/hiGuigo/AV3-TPI",
    demo: "#",
  },
];
