FROM node:18-alpine
WORKDIR /app


RUN echo 'const http = require("http"); http.createServer((req, res) => { res.writeHead(200, {"Content-Type": "application/json"}); res.end(JSON.stringify({ message: "Conexão estabelecida com a API!", servicos: [ { nome: "Consultoria Cloud AWS", status: "Ativo" }, { nome: "Esteiras CI/CD (DevOps)", status: "Ativo" }, { nome: "Suporte Técnico Automatizado", status: "Em Implantação" } ] })); }).listen(3000);' > server.js

EXPOSE 3000
CMD ["node", "server.js"]


