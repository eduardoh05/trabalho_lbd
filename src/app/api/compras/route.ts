import { NextResponse } from "next/server";
import prisma from "../../lib/PrismaClient";

/**
 * @swagger
 * /api/compras:
 *   post:
 *     summary: Cria uma nova compra
 *     description: Registra uma nova compra no banco de dados.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usuarioId:
 *                 type: integer
 *                 example: 1
 *               jogoId:
 *                 type: integer
 *                 example: 2
 *               total:
 *                 type: decimal
 *                 example: 199.99
 *     responses:
 *       201:
 *         description: Compra criada com sucesso
 *       500:
 *         description: Erro ao criar a compra
 */
export async function POST(request: Request) {
  try {
    const { usuarioId, jogoId, total } = await request.json();

    const novaCompra = await prisma.compra.create({
      data: { usuarioId, jogoId, total },
    });

    return NextResponse.json(novaCompra, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao criar compra" },
      { status: 500 }
    );
  }
}

/**
 * @swagger
 * /api/compras:
 *   get:
 *     summary: Lista todas as compras
 *     description: Obtém todas as compras do banco de dados.
 *     responses:
 *       200:
 *         description: Lista de compras retornada com sucesso
 *       500:
 *         description: Erro ao buscar as compras
 */
export async function GET() {
  try {
    const compras = await prisma.compra.findMany({
      include: {
        usuario: true,
        jogo: true,
      },
    });

    return NextResponse.json(compras, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao buscar compras" },
      { status: 500 }
    );
  }
}

/**
 * @swagger
 * /api/compras:
 *   put:
 *     summary: Atualiza uma compra
 *     description: Atualiza os detalhes de uma compra existente no banco de dados.
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
 *               total:
 *                 type: decimal
 *                 example: 149.99
 *     responses:
 *       200:
 *         description: Compra atualizada com sucesso
 *       500:
 *         description: Erro ao atualizar a compra
 */
export async function PUT(request: Request) {
  try {
    const { id, total } = await request.json();

    const compraAtualizada = await prisma.compra.update({
      where: { id },
      data: { total },
    });

    return NextResponse.json(compraAtualizada, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao atualizar compra" },
      { status: 500 }
    );
  }
}
