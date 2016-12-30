FROM node:argon
RUN mkdir -p /home/apps/auction
WORKDIR /home/apps/auction
COPY package.json /home/apps/auction
RUN npm install sails -g
RUN npm install sails
RUN npm install grunt -g
RUN npm install grunt
RUN npm install
COPY . /home/apps/auction
