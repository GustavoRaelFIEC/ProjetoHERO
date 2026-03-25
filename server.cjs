const express = require('express');
const cors = require('cors');
const app = express();
const { z } = require("zod");

app.use(cors());
app.use(express.json());

const usuarios = [];


const schema = z.object({
  nome: z.string().min(3, 'Deve ter pelo menos 3 caracteres'),
  email: z.string().email('Deve incluir um arroba e um ".com"'),
  senha: z.string().min(6, "Deve ter no mínimo 6 caracteres"),
});

app.post('/cadastrar', (req, res) => {
  const result = schema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json(result.error);
  }

  const { nome, email } = result.data;

  const novoUsuario = {
    id: usuarios.length + 1,
    nome,
    email
  };

  usuarios.push(novoUsuario);

  res.status(201).json({
    mensagem: 'Cadastro realizado!',
    usuario: novoUsuario
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});