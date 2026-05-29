const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let funcionarios = [
    { id: 1, nome: "Matias", cargo: "DevOps Engineer", departamento: "Tecnologia" },
    { id: 2, nome: "Ana Silva", cargo: "Recrutadora Tech", departamento: "Recursos Humanos" }
];

app.get('/', (req, res) => {
    res.status(200).json({ status: "ok", message: "Healthcheck respondendo!" });
});

// Rota de Login com LOG de diagnóstico
app.post('/api/login', (req, res) => {
    // ESSA LINHA VAI SALVAR A NOSSA SEXTA-FEIRA:
    console.log("--> DADOS RECEBIDOS NO BACKEND:", req.body);

    const { usuario, senha } = req.body;

    if (usuario === 'admin' && senha === 'matias123') {
        return res.json({ success: true, token: "fake-jwt-token-rh-2026", mensagem: "Login efetuado com sucesso!" });
    } else {
        return res.status(401).json({ success: false, mensagem: "Usuário ou senha inválidos." });
    }
});

app.get('/api/funcionarios', (req, res) => { res.json(funcionarios); });
app.post('/api/funcionarios', (req, res) => {
    const { nome, cargo, departamento } = req.body;
    const novoFuncionario = { id: funcionarios.length + 1, nome, cargo, departamento };
    funcionarios.push(novoFuncionario);
    res.status(201).json({ mensagem: "Sucesso!", funcionario: novoFuncionario });
});

app.listen(PORT, () => { console.log(`PeopleFlow Backend rodando na porta ${PORT}`); });
