FROM node
RUN npm install -g nodemon
WORKDIR /genesys
COPY package.json .
RUN npm install
COPY . .
EXPOSE 5008
ENV NODE_ENV=local
CMD [ "sh", "-c", "if [ \"$NODE_ENV\" = \"local\" ]; then npm run dev; else node app.js; fi" ]