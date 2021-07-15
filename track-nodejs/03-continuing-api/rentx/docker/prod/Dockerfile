FROM node:14.16.0-alpine AS build

RUN mkdir -p /usr/src/build
WORKDIR /usr/src/build
COPY . ./

RUN apk add --no-cache --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers make python
RUN npm install --quiet node-gyp@7.1.2 typescript -g
RUN npm install  --development --silent
RUN npm cache verify
RUN tsc --pretty --project .
RUN mkdir -p /usr/src/rentx

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "/usr/src/rentx/"]

RUN cp -r ./dist/* /usr/src/rentx/
RUN rm -rf /usr/src/build
RUN npm uninstall --quiet node-gyp@7.1.2 typescript -g
RUN apk del native-deps

FROM node:14.16.0-alpine
ENV NODE_ENV production
WORKDIR /usr/src/rentx

COPY --from=build /usr/src/rentx /usr/src/rentx
RUN npm ci --only=production

RUN npm install --quiet pm2@5.0.4 -g

RUN chown -R node:node /usr/src/rentx

USER 1000

CMD ["pm2-runtime", "server.js", "&&", "pm2", "save"]
