const express = require('express');
const app = express();
const PORT = 3000;

// CRÍTICO: Ativa o interpretador de JSON para o Express ler o req.body
app.use(express.json());

// BANCO DE DADOS EM MEMÓRIA
let funcionarios = [
    { id: 1, nome: "Matias", cargo: "DevOps Engineer", departamento: "Tecnologia" },
    { id: 2, nome: "Ana Silva", cargo: "Recrutadora Tech", departamento: "Recursos Humanos" }
];

// Rota raiz para o Kubernetes Probes
app.get('/', (req, res) => {
    res.status(200).json({ status: "ok", message: "Healthcheck respondendo!" });
});

// Rota de Login corrigida
app.post('/api/login', (req, res) => {
    const { usuario, senha } = req.body;

    // Agora o usuario e senha vão chegar preenchidos aqui!
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
    const novoFuncionario = { id: funcionarios.length + 1, nome, cargo, departamento };
    funcionarios.push(novoFuncionario);
    res.status(201).json({ mensagem: "Funcionário cadastrado com sucesso!", funcionario: novoFuncionario });
});

app.get('/api', (req, res) => {
    res.json({ status: "alive", app: "PeopleFlow API" });
});

app.listen(PORT, () => {
    console.log(`PeopleFlow Backend rodando na porta ${PORT}`);
});
