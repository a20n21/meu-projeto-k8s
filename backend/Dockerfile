FROM node:18-alpine
WORKDIR /app
RUN echo 'const http = require("http"); http.createServer((req, res) => { res.writeHead(200, {"Content-Type": "application/json"}); res.end(JSON.stringify({ status: "alive", message: "Backend conectado com sucesso!" })); }).listen(3000);' > server.js
EXPOSE 3000
CMD ["node", "server.js"]

#teste12
