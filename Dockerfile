FROM node:8.1.0

RUN yarn global add serve

RUN mkdir -p /src/app

WORKDIR /src/app

ADD ./package.json /src/app/package.json
ADD ./yarn.lock /src/app/yarn.lock

RUN yarn && yarn cache clean

ADD ./src /src/app/src
ADD ./bin /src/app/bin
ADD ./public /src/app/public

EXPOSE 3000

RUN ./node_modules/.bin/react-scripts build

CMD ["./bin/serve.sh"]
