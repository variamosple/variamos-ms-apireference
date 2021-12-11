FROM node:alpine

# update packages
RUN apk update

# create root application folder
WORKDIR /variaMosApiReference

# copy configs to /variaMosApiReference folder
COPY package*.json ./
COPY tsconfig.json ./

# copy source code to /variaMosApiReference/src folder
COPY ./ . 

# # check files list
# RUN ls -a

RUN npm install
# RUN npm install -g ts-node
RUN npm run build

EXPOSE 4004

CMD [ "npm", "start" ]