FROM node:24-alpine
COPY - /giper/baza
WORKDIR /giper/baza
RUN [ "npm", "install" ]
ENTRYPOINT [ "node", "node.js", "port=9090", "giper_baza_logs" ]
