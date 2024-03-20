FROM node
RUN npm install -g nodemon
WORKDIR /genesys
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 5008
ENV NODE_ENV=local
CMD ["node","app.js"]