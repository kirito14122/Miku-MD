FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/jayjay-ops/Miku-MD /root/jayjay-ops
WORKDIR /root/jayjay-ops/
RUN npm i
EXPOSE 8000
CMD ["node", "."]


