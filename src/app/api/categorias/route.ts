import { NextResponse } from "next/server";
import prisma from "../../lib/PrismaClient";

/**
 * @swagger
 * /api/categorias:
 *   post:
 *     summary: Cria uma nova categoria
 *     description: Adiciona uma nova categoria ao banco de dados.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Nome da categoria
 *                 example: "RPG"
 *     responses:
 *       201:
 *         description: Categoria criada com sucesso
 *       500:
 *         description: Erro ao criar a categoria
 */
export async function POST(request: Request) {
  try {
    const { nome } = await request.json();

    const novaCategoria = await prisma.categoria.create({
      data: { nome },
    });

    return NextResponse.json(novaCategoria, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao criar categoria" },
      { status: 500 }
    );
  }
}

/**
 * @swagger
 * /api/categorias:
 *   get:
 *     summary: Retorna todas as categorias
 *     description: Obtém uma lista de todas as categorias no banco de dados.
 *     responses:
 *       200:
 *         description: Lista de categorias retornada com sucesso
 *       500:
 *         description: Erro ao buscar as categorias
 */
export async function GET() {
  try {
    const categorias = await prisma.categoria.findMany();

    return NextResponse.json(categorias, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao buscar categorias" },
      { status: 500 }
    );
  }
}

/**
 * @swagger
 * /api/categorias:
 *   put:
 *     summary: Atualiza uma categoria
 *     description: Atualiza o nome de uma categoria existente no banco de dados.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 description: ID da categoria a ser atualizada
 *                 example: 1
 *               nome:
 *                 type: string
 *                 description: Novo nome da categoria
 *                 example: "RPG Atualizado"
 *     responses:
 *       200:
 *         description: Categoria atualizada com sucesso
 *       500:
 *         description: Erro ao atualizar a categoria
 */
export async function PUT(request: Request) {
  try {
    const { id, nome } = await request.json();

    const categoriaAtualizada = await prisma.categoria.update({
      where: { id },
      data: { nome },
    });

    return NextResponse.json(categoriaAtualizada, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao atualizar categoria" },
      { status: 500 }
    );
  }
}

/**
 * @swagger
 * /api/categorias:
 *   delete:
 *     summary: Remove uma categoria
 *     description: Remove uma categoria do banco de dados com base no ID.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Categoria removida com sucesso
 *       500:
 *         description: Erro ao remover a categoria
 */
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();

    const categoriaRemovida = await prisma.categoria.delete({
      where: { id },
    });

    return NextResponse.json(categoriaRemovida, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao remover categoria" },
      { status: 500 }
    );
  }
}
