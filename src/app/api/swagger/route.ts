import swaggerSpec from "../../lib/swagger";
import { NextResponse } from "next/server";

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
 *   post:
 *     summary: Cria um novo usuário
 *     description: Cria um novo usuário no banco de dados.
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
 *   put:
 *     summary: Atualiza um usuário
 *     description: Atualiza as informações de um usuário existente no banco de dados.
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
 *   delete:
 *     summary: Remove um usuário
 *     description: Remove um usuário do banco de dados com base no ID.
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
 *         description: Usuário removido com sucesso
 *       500:
 *         description: Erro ao remover o usuário
 * /api/jogos:
 *   get:
 *     summary: Lista todos os jogos
 *     description: Obtém todos os jogos do banco de dados.
 *     responses:
 *       200:
 *         description: Lista de jogos retornada com sucesso
 *       500:
 *         description: Erro ao buscar os jogos
 *   post:
 *     summary: Cria um novo jogo
 *     description: Adiciona um novo jogo ao banco de dados.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *                 example: "Elden Ring"
 *               descricao:
 *                 type: string
 *                 example: "Uma aventura épica..."
 *               preco:
 *                 type: decimal
 *                 example: 249.99
 *               dataLancamento:
 *                 type: string
 *                 format: date
 *                 example: "2022-02-25"
 *               categorias:
 *                 type: array
 *                 items:
 *                   type: integer
 *                   example: [1, 2]
 *     responses:
 *       201:
 *         description: Jogo criado com sucesso
 *       500:
 *         description: Erro ao criar o jogo
 *   put:
 *     summary: Atualiza um jogo
 *     description: Atualiza as informações de um jogo existente no banco de dados.
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
 *               titulo:
 *                 type: string
 *                 example: "Elden Ring Atualizado"
 *               descricao:
 *                 type: string
 *                 example: "Uma aventura épica no novo mapa..."
 *               preco:
 *                 type: decimal
 *                 example: 259.99
 *               categorias:
 *                 type: array
 *                 items:
 *                   type: integer
 *                   example: [1, 3]
 *     responses:
 *       200:
 *         description: Jogo atualizado com sucesso
 *       500:
 *         description: Erro ao atualizar o jogo
 *   delete:
 *     summary: Remove um jogo
 *     description: Remove um jogo do banco de dados com base no ID.
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
 *         description: Jogo removido com sucesso
 *       500:
 *         description: Erro ao remover o jogo
 * /api/categorias:
 *   get:
 *     summary: Lista todas as categorias
 *     description: Obtém todas as categorias do banco de dados.
 *     responses:
 *       200:
 *         description: Lista de categorias retornada com sucesso
 *       500:
 *         description: Erro ao buscar as categorias
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
 *                 example: 1
 *               nome:
 *                 type: string
 *                 example: "RPG Atualizado"
 *     responses:
 *       200:
 *         description: Categoria atualizada com sucesso
 *       500:
 *         description: Erro ao atualizar a categoria
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
 * /api/compras:
 *   get:
 *     summary: Lista todas as compras
 *     description: Obtém todas as compras do banco de dados.
 *     responses:
 *       200:
 *         description: Lista de compras retornada com sucesso
 *       500:
 *         description: Erro ao buscar as compras
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
 *   delete:
 *     summary: Remove uma compra
 *     description: Remove uma compra do banco de dados com base no ID.
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
 *         description: Compra removida com sucesso
 *       500:
 *         description: Erro ao remover a compra
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  // Se for solicitado o JSON da especificação, retornamos o JSON
  if (searchParams.get("type") === "json") {
    return NextResponse.json(swaggerSpec);
  }

  // Caso contrário, retornamos o Swagger UI em HTML
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Swagger UI</title>
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.css">
    </head>
    <body>
      <div id="swagger-ui"></div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui-bundle.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui-standalone-preset.js"></script>
      <script>
        window.onload = function() {
          SwaggerUIBundle({
            url: '/api/swagger?type=json',
            dom_id: '#swagger-ui',
            presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
            layout: 'StandaloneLayout'
          });
        };
      </script>
    </body>
    </html>
  `;

  return new Response(html, {
    headers: { "Content-Type": "text/html" },
  });
}
