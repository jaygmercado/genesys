FROM node
RUN npm install -g nodemon
WORKDIR /genesys
COPY package.json .
RUN npm install
COPY . .
EXPOSE 
CMD ["npm", "run", "dev"]