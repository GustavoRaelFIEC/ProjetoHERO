const { z } = require('zod');

// Definido Schema (Contrato)
const ProdutoSchema = z.object({
    nome: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
    preco: z.coerce.number().positive("O preço deve ser um numero positivo"),
    categoria: z.enum(['Eletrônicos', "Alimentos", "Vestuários"]),
    emEstoque: z.boolean().default(true)
})

// Função para testar a validação
function validarProduto(dados) {
    console.log('------------- VALIDAÇÃO PRODUTOS -------------')
    const resultado = ProdutoSchema.safeParse(dados);

    if (resultado.success) {
        console.log("✅ Sucesso! Dados validados:", resultado.data);
    }else{
        console.error('❌ Erro na validação');
        // Zod retorna um array de erros detalhados
        console.log(JSON.stringify(errosFormatados, null, 2));
    }
    console.log('\n');
}

// CASO 1: Dados corretos
validarProduto({
    nome: "Teclado Mecânico",
    preco: '250.09', // z.coerce vai transformar a string em número
    categoria: "Eletrônicos"
});

console.log(validarProduto);