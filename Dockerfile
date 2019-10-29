FROM node:10.16.2
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run dev
EXPOSE 9080

