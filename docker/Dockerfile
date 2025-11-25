FROM node:25-alpine
RUN apk add --no-cache git
WORKDIR /mam
COPY ./ giper/baza
RUN npm exec mam@latest giper/baza/app/run

FROM node:25-alpine
COPY --from=0 /mam/giper/baza/app/run/- /mam/giper/baza/app/run/-
WORKDIR /mam/giper/baza/app/run/-
ENTRYPOINT [ "node", "node.js", "port=9090" ]
