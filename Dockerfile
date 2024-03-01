FROM node
RUN npm install -g nodemon
WORKDIR /genesys
COPY package.json .
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "run", "dev"]