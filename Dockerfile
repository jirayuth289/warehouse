FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 8000
CMD [ "npm", "start" ]

# FROM node:10.15.1-alpine
# LABEL maintainer "jirayuth.si.56@ubu.ac.th" 

# RUN mkdir /mini_warehouse

# WORKDIR /mini_warehouse

# COPY package.json /mini_warehouse
# COPY package*.json ./

# RUN npm install

# COPY ./ /mini_warehouse

# EXPOSE 8000

# CMD ["npm", "start"]
