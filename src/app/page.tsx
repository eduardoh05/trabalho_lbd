import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <title>Loja de Jogos Online</title>
      <h2 className={styles.title}>Trabalho de LBD</h2>
      <p className={styles.subtitle}>
        Integração de ORM com Prisma e PostgreSQL
      </p>

      <div className={styles.descriptionContainer}>
        <p className={styles.description}>
          Este trabalho foi desenvolvido por Eduardo Henrique Alves, Guilherme
          Siqueira Fiani e João Augusto Antonow. O objetivo é criar uma loja de
          jogos online utilizando as melhores práticas de integração entre o ORM
          Prisma e o banco de dados PostgreSQL.
        </p>
        <p className={styles.description}>
          O sistema permite realizar operações CRUD (Create, Read, Update,
          Delete) sobre um banco de dados PostgreSQL, gerenciado através do
          Prisma ORM. As operações de CRUD estão relacionadas a jogos, usuários,
          categorias e compras, com funcionalidades completas para criar,
          atualizar, listar e excluir registros.
        </p>
        <p className={styles.description}>
          Utilizando o Next.js como framework de desenvolvimento, a aplicação
          inclui uma API para o gerenciamento de dados, e sua documentação foi
          gerada automaticamente através do Swagger. O sistema é projetado para
          ser robusto, escalável e fácil de integrar com outras ferramentas ou
          tecnologias no futuro.
        </p>
      </div>

      <p className={styles.description}>
        Acesse a documentação da API gerada pelo Swagger clicando no link
        abaixo:
      </p>
      <a href="http://localhost:3000/api/swagger" className={styles.link}>
        Documentação da API
      </a>
    </div>
  );
}
