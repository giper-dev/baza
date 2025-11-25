FROM node:24-alpine
COPY ./app/run/- /giper/baza
WORKDIR /giper/baza
RUN [ "npm", "install" ]
ENTRYPOINT [ "node", "node.js", "port=9090" ]
