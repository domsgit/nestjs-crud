FROM node:latest
ADD . /code
WORKDIR /code
EXPOSE 3000
RUN npm config set registry http://registry.npm.taobao.org/ && npm install
ENTRYPOINT ["npm", "run"]
CMD ["start"]
