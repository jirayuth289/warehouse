FROM node:10.15.1-alpine
LABEL maintainer "jirayuth.si.56@ubu.ac.th" 

RUN mkdir /mini_warehouse

WORKDIR /mini_warehouse

COPY package.json /mini_warehouse

RUN npm install

COPY ./ /mini_warehouse

EXPOSE 8000

CMD ["npm", "start"]
