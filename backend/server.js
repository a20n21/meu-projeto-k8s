const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para entender requisições JSON
app.use(express.json());

// "Banco de Dados" temporário na memória RAM
let funcionarios = [
    { id: 1, nome: "Matias", cargo: "DevOps Engineer", departamento: "Tecnologia" },
    { id: 2, nome: "Ana Silva", cargo: "Recrutadora Tech", departamento: "Recursos Humanos" }
];

// Rota de Login (Simulada)
app.post('/api/login', (req, res) => {
    const { usuario, senha } = req.body;

    if (usuario === 'admin' && senha === 'matias123') {
        return res.json({ success: true, token: "fake-jwt-token-rh-2026", mensagem: "Login efetuado com sucesso!" });
    } else {
        return res.status(401).json({ success: false, mensagem: "Usuário ou senha inválidos." });
    }
});

// Rota para Listar Funcionários
app.get('/api/funcionarios', (req, res) => {
    res.json(funcionarios);
});

// Rota para Cadastrar Funcionário
app.post('/api/funcionarios', (req, res) => {
    const { nome, cargo, departamento } = req.body;
    
    if (!nome || !cargo || !departamento) {
        return res.status(400).json({ mensagem: "Todos os campos são obrigatórios." });
    }

    const novoFuncionario = {
        id: funcionarios.length + 1,
        nome,
        cargo,
        departamento
    };

    funcionarios.push(novoFuncionario);
    res.status(201).json({ mensagem: "Funcionário cadastrado com sucesso!", funcionario: novoFuncionario });
});

// Rota padrão para o Ingress não quebrar na raiz da API
app.get('/api', (req, res) => {
    res.json({ status: "alive", app: "PeopleFlow API" });
});

app.listen(PORT, () => {
    console.log(`PeopleFlow Backend rodando na porta ${PORT}`);
});
