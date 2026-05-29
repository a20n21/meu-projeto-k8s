FROM nginx:alpine


COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN echo '<h1>Frontend rodando no Kubernetes!</h1><div id="status">Conectando ao backend...</div><script>fetch("/api").then(res => res.json()).then(data => { document.getElementById("status").innerText = data.message; }).catch(() => { document.getElementById("status").innerText = "Não foi possível conectar ao backend."; });</script>' > /usr/share/nginx/html/index.html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]# update
