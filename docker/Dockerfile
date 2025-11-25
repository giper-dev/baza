FROM node:25
WORKDIR /mam
COPY ./ giper/baza
RUN npm exec --verbose mam@latest giper/baza/app/run

FROM node:25
COPY --from=0 /mam/giper/baza/app/run/- /mam/giper/baza/app/run/-
WORKDIR /mam/giper/baza/app/run/-
ENTRYPOINT [ "node", "node.js", "port=9090" ]
