FROM node
WORKDIR /genesys
COPY . .
RUN npm install
RUN npm run build
CMD [ "npm", "start" ]