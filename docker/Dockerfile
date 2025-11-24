FROM node:22-alpine
RUN apk add --no-cache git
COPY ./ ./giper/baza
RUN npm exec mam@latest giper/baza/app/run

FROM node:22-alpine
COPY --from=0 ./giper/baza/app/run/- /mam/giper/baza/app/run/-
WORKDIR /mam/giper/baza/app/run/-
ENTRYPOINT node node.js port=9090
