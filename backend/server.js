const express = require('express');
const app = express();
const PORT = 3000;

// Rota principal da API que o Ingress vai chamar
app.get('/', (req, res) => {
    res.json({
        message: "Conexão estabelecida com a API da Matias IT Consulting!",
        timestamp: new Date(),
        servicos: [
            { nome: "Consultoria Cloud AWS", status: "Ativo" },
            { nome: "Esteiras CI/CD (DevOps)", status: "Ativo" },
            { nome: "Suporte Técnico Automatizado", status: "Em Implantação" }
        ]
    });
});

app.listen(PORT, () => {
    console.log(`Backend rodando na porta ${PORT}`);
});
