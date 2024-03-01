FROM node
RUN npm install -g nodemon
WORKDIR /genesys
COPY package.json .
RUN npm install
COPY . .
EXPOSE 5008
CMD ["npm", "run", "dev"]