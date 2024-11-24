import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Criação de desenvolvedores
  const desenvolvedores = await prisma.desenvolvedor.createMany({
    data: [
      { nome: "Rockstar Games" },
      { nome: "CD Projekt Red" },
      { nome: "FromSoftware" },
    ],
  });

  // Criação de categorias
  const categorias = await prisma.categoria.createMany({
    data: [
      { nome: "RPG" },
      { nome: "Ação" },
      { nome: "Aventura" },
      { nome: "Simulação" },
    ],
  });

  // Criação de jogos
  await prisma.jogo.createMany({
    data: [
      {
        titulo: "Red Dead Redemption 2",
        descricao: "Um épico do velho oeste",
        preco: 199.99,
        dataLancamento: new Date("2018-10-26"),
        desenvolvedorId: 1,
      },
      {
        titulo: "The Witcher 3",
        descricao: "RPG de mundo aberto com Geralt de Rívia",
        preco: 129.99,
        dataLancamento: new Date("2015-05-19"),
        desenvolvedorId: 2,
      },
      {
        titulo: "Elden Ring",
        descricao:
          "Um novo mundo de fantasia de Hidetaka Miyazaki e George R.R. Martin",
        preco: 249.99,
        dataLancamento: new Date("2022-02-25"),
        desenvolvedorId: 3,
      },
    ],
  });

  // Relacionamento de jogos e categorias (n:n)
  await prisma.jogoCategoria.createMany({
    data: [
      { jogoId: 1, categoriaId: 2 },
      { jogoId: 1, categoriaId: 3 },
      { jogoId: 2, categoriaId: 1 },
      { jogoId: 2, categoriaId: 3 },
      { jogoId: 3, categoriaId: 1 },
      { jogoId: 3, categoriaId: 2 },
    ],
  });

  // Criação de usuários
  const usuarios = await prisma.usuario.createMany({
    data: [
      {
        nome: "Eduardo Alves",
        email: "eduardo.alves@email.com",
        senha: "123456",
      },
      {
        nome: "Joao Augusto",
        email: "joao.augusto@email.com",
        senha: "654321",
      },
      {
        nome: "Guilherme Fiani",
        email: "guilherme.fiani@email.com",
        senha: "senha123",
      },
    ],
  });

  // Criação de compras
  await prisma.compra.createMany({
    data: [
      {
        usuarioId: 1,
        jogoId: 1,
        total: 199.99,
        dataCompra: new Date("2024-11-01"),
      },
      {
        usuarioId: 1,
        jogoId: 2,
        total: 129.99,
        dataCompra: new Date("2024-11-02"),
      },
      {
        usuarioId: 2,
        jogoId: 3,
        total: 249.99,
        dataCompra: new Date("2024-11-03"),
      },
      {
        usuarioId: 3,
        jogoId: 1,
        total: 199.99,
        dataCompra: new Date("2024-11-04"),
      },
    ],
  });

  console.log("Banco de dados populado com sucesso!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
