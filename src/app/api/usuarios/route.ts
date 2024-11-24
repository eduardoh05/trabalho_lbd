import { NextResponse } from 'next/server';
import prisma from '../../lib/PrismaClient';

/**
 * @swagger
 * /api/usuarios:
 *   post:
 *     summary: Cria um novo usuário
 *     description: Adiciona um novo usuário ao banco de dados.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: "João Silva"
 *               email:
 *                 type: string
 *                 example: "joao@email.com"
 *               senha:
 *                 type: string
 *                 example: "senha123"
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       500:
 *         description: Erro ao criar o usuário
 */
export async function POST(request: Request) {
  try {
    const { nome, email, senha } = await request.json();

    const novoUsuario = await prisma.usuario.create({
      data: { nome, email, senha },
    });

    return NextResponse.json(novoUsuario, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao criar usuário' }, { status: 500 });
  }
}

/**
 * @swagger
 * /api/usuarios:
 *   get:
 *     summary: Lista todos os usuários
 *     description: Obtém todos os usuários do banco de dados.
 *     responses:
 *       200:
 *         description: Lista de usuários retornada com sucesso
 *       500:
 *         description: Erro ao buscar os usuários
 */
export async function GET() {
  try {
    const usuarios = await prisma.usuario.findMany();

    return NextResponse.json(usuarios, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao buscar usuários' }, { status: 500 });
  }
}

/**
 * @swagger
 * /api/usuarios:
 *   put:
 *     summary: Atualiza informações de um usuário
 *     description: Atualiza os detalhes de um usuário existente no banco de dados.
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
 *               nome:
 *                 type: string
 *                 example: "João Atualizado"
 *               email:
 *                 type: string
 *                 example: "joao.atualizado@email.com"
 *               senha:
 *                 type: string
 *                 example: "novaSenha123"
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *       500:
 *         description: Erro ao atualizar o usuário
 */
export async function PUT(request: Request) {
  try {
    const { id, nome, email, senha } = await request.json();

    const usuarioAtualizado = await prisma.usuario.update({
      where: { id },
      data: { nome, email, senha },
    });

    return NextResponse.json(usuarioAtualizado, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao atualizar usuário' }, { status: 500 });
  }
}
