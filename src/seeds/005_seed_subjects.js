export function seed(knex) {
  return knex("subjects")
    .del()
    .then(() => {
      return knex("subjects").insert([
        {
          name: "Lógica de Programação",
          course_semester_id: 1,
          description: "Esta disciplina ensina os fundamentos de raciocínio lógico aplicados à programação de computadores. Os alunos aprendem a resolver problemas utilizando estruturas de controle, como laços e condições, além de algoritmos básicos. O foco está no desenvolvimento de habilidades analíticas para a resolução de problemas complexos. Conceitos como variáveis, tipos de dados, operadores, expressões, funções, e manipulação de dados são explorados."
        },
        {
          name: "Arquitetura de Computadores",
          course_semester_id: 1,
          description: "A disciplina aborda a estrutura e o funcionamento interno dos sistemas de computador. O estudo inclui componentes como processadores, memória, barramentos e periféricos, além de como esses elementos se comunicam para executar tarefas. O objetivo é compreender as diferentes arquiteturas de computadores, seu design e as técnicas de otimização de desempenho, como cache e pipelining. O curso também introduz conceitos de assembly e linguagens de baixo nível."
        },
        {
          name: "Programação Web",
          course_semester_id: 2,
          description: "A disciplina ensina a desenvolver aplicações web utilizando tecnologias modernas. Os alunos aprendem a criar interfaces interativas e responsivas, utilizando HTML, CSS e JavaScript. O curso aborda conceitos como design responsivo, frameworks front-end, manipulação do DOM, AJAX, e APIs web. Os alunos também aprendem a criar aplicações web dinâmicas utilizando frameworks back-end, como Node.js e Express."
        },
        {
          name: "Redes de Computadores",
          course_semester_id: 3,
          description: "A disciplina aborda os princípios e conceitos fundamentais das redes de computadores. Os alunos aprendem sobre os diferentes tipos de redes, topologias, protocolos, e tecnologias de comunicação. O curso explora temas como endereçamento IP, roteamento, comutação, e segurança de redes. Os alunos também aprendem a configurar e administrar redes locais e remotas, além de diagnosticar e resolver problemas de conectividade."
        },
        {
          name: "Banco de Dados",
          course_semester_id: 3,
          description: "A disciplina ensina os fundamentos de bancos de dados relacionais e não relacionais. Os alunos aprendem a projetar, implementar e consultar bancos de dados utilizando SQL e NoSQL. O curso aborda conceitos como modelagem de dados, normalização, índices, transações, e otimização de consultas. Os alunos também aprendem a administrar bancos de dados, realizar backup e restauração, e garantir a integridade e segurança dos dados."
        },
        {
          name: "Sistemas Operacionais",
          course_semester_id: 3,
          description: "A disciplina aborda os princípios e conceitos fundamentais dos sistemas operacionais. Os alunos aprendem sobre a estrutura e o funcionamento dos sistemas operacionais, incluindo gerenciamento de processos, memória, arquivos, e dispositivos. O curso explora temas como escalonamento de processos, gerenciamento de memória, sistemas de arquivos, e segurança. Os alunos também aprendem a administrar e configurar sistemas operacionais, diagnosticar e resolver problemas de desempenho e segurança."
        },
        {
          name: "Sistemas Distribuídos",
          course_semester_id: 4,
          description: "A disciplina aborda os princípios e conceitos dos sistemas distribuídos. Os alunos aprendem sobre a arquitetura, design, e implementação de sistemas distribuídos, incluindo comunicação, coordenação, e consistência. O curso explora temas como modelos de computação distribuída, protocolos de comunicação, sistemas de arquivos distribuídos, e tolerância a falhas. Os alunos também aprendem a projetar e implementar aplicações distribuídas escaláveis e confiáveis."
        },
        {
          name: "Trabalho de Conclusão de Curso",
          course_semester_id: 4,
          description: "O Trabalho de Conclusão de Curso (TCC) é uma atividade acadêmica que tem como objetivo integrar e aplicar os conhecimentos adquiridos ao longo do curso. Os alunos devem desenvolver um projeto de pesquisa ou desenvolvimento, sob a orientação de um professor. O TCC envolve a elaboração de um relatório técnico e a apresentação de resultados. O trabalho é avaliado por uma banca examinadora, que verifica a qualidade, originalidade, e contribuição do projeto para a área de computação."
        },
      ]);
    });
}
