import koiAero from "../assets/images/projects/koi-aero.png";
import koiCenso from "../assets/images/projects/koi-censo.jpg";
import aerocode from "../assets/images/projects/aerocode.png";

export const projects = [
  {
    id: 1,
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

    contributionDesc: "Minha contribuição:",

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

    objective:
      "Desenvolver uma plataforma capaz de centralizar o gerenciamento de normas técnicas, permitindo aos engenheiros e time técnico organizar, registrar e consultar informações de forma estruturada, com recursos de busca, classificação e rastreabilidade.",

    solution:
      "Desenvolvi, em equipe, uma aplicação web para gerenciamento de normas técnicas, estruturada para suportar operações de cadastro, consulta e relacionamento entre normas. A arquitetura da aplicação foi dividida entre front-end e back-end, com comunicação via API REST e a estruturação do back-end com Fastify, incluindo modelagem de dados com o ORM Prisma e validação de dados com Zod.",

    result:
      "A aplicação permite o cadastro e gerenciamento de normas técnicas, incluindo controle de versões, relacionamento entre normas e aplicação de filtros para consulta. Além disso, conta com um sistema de pesquisa com base em tags atribuídas às normas, controle de usuários e responsabilidades. Com isso, o sistema substitui processos manuais e descentralizados por uma solução estruturada, reduzindo o tempo necessário para localizar normas técnicas e melhorando a organização das informações no fluxo de engenharia.",

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

    contributionDesc: "Minha contribuição:",

    contribution: [
      "Atuação como Product Owner, definindo escopo, priorizando entregas e alinhando requisitos com o cliente",
      "Desenvolvimento das interfaces com React e JavaScript",
      "Estruturação do front-end com separação por responsabilidades",
      "Estilização com Tailwind CSS",
      "Preparação do front-end para consumo de API REST",
    ],

    github: "https://github.com/koitech-aero",
    demo: "https://www.youtube.com/watch?v=jP18nC-Def4",
  },

  {
    id: 3,
    title: "Aerocode",
    status: "Concluído",
    image: aerocode,

    description: "Aplicação web completa com relatório crítico.",

    objective:
      "Criar um sistema completo com back e front-end utilizando conceitos de programação orientada a objetos. Além disso o sistema conta com uma análise de métricas, visando identificar o desempenho e disponibilidade da aplicação.",

    solution:
      "O sistema em si é um gerenciador de processos de uma empresa fabricante de aeronaves. Ele conta com gerenciamento de usuários, bem como suas permissões dentro do sistema (Role-Based Access Controll), gerência de aeronaves, peças, etapas, testes e criação de relatórios.",

    result:
      "Esse projeto contribuiu principalmente para reforçar os conceitos utilizados no desenvolvimento de aplicações web, como a utilização de controllers, services e repositories, validações e permissões baseadas em cargos (roles), persistência de dados, integração com banco de dados utilizando ORM, entre outros métodos e práticas. A documentação contida no repositório do projeto passa pelos principais pontos e como cada um deles foi atendido, tendo detalhado a intalação e execução do projeto, sua estrutura, as regras de negócio, modelo do banco de dados e testes de desempenho.",

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
      "Jason Web Token",
    ],

    contributionDesc: "Principais features implementadas:",

    contribution: [
      "Integração com o MySQl utilizando o Prisma ORM",
      "Arquitetura dividida em responsabilidades",
      "Criptografia de senhas utilizando o Bcrypt",
      "Utilização de JWT para autenticação de usuário no login",
      "Rotas protegidas e com verificação de permissões (RBAC)",
      "Análize de latência, tempo de processamento e tempo de resposta",
      "Testes críticos de requisições simultâneas (1, 5 e 10 usuários)",
      "Relatório com análise dos resultados obtidos nos testes de desempenho",
    ],

    github: "https://github.com/hiGuigo/AV3-TPI",
    demo: "",
  },
];
