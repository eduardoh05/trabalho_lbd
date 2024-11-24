import { NextResponse } from 'next/server';
import prisma from '../../lib/PrismaClient';

/**
 * @swagger
 * /api/jogos:
 *   put:
 *     summary: Atualiza informações de um jogo
 *     description: Atualiza os detalhes de um jogo existente no banco de dados, incluindo categorias associadas.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 description: ID do jogo a ser atualizado
 *                 example: 1
 *               titulo:
 *                 type: string
 *                 description: Novo título do jogo
 *                 example: "Elden Ring"
 *               descricao:
 *                 type: string
 *                 description: Nova descrição do jogo
 *                 example: "Uma aventura épica atualizada..."
 *               preco:
 *                 type: Decimal
 *                 description: Novo preço do jogo
 *                 example: 299.99
 *               categorias:
 *                 type: array
 *                 items:
 *                   type: integer
 *                   description: IDs das categorias atualizadas
 *                   example: [1, 2]
 *     responses:
 *       200:
 *         description: Jogo atualizado com sucesso
 *       500:
 *         description: Erro ao atualizar o jogo
 */
export async function PUT(request: Request) {
  try {
    const { id, titulo, descricao, preco, categorias } = await request.json();

    const jogoAtualizado = await prisma.jogo.update({
      where: { id },
      data: {
        titulo,
        descricao,
        preco,
        categorias: categorias
          ? {
              deleteMany: {}, // Remove todas as categorias existentes
              create: categorias.map((categoriaId: number) => ({ categoriaId })),
            }
          : undefined,
      },
    });

    return NextResponse.json(jogoAtualizado, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao atualizar jogo' }, { status: 500 });
  }
}
