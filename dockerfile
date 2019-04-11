FROM tiangolo/node-frontend:latest as build-stage
WORKDIR /app
COPY package*.json /app/
RUN yarn install
COPY ./ /app/
RUN yarn build

FROM nginx:latest
COPY --from=build-stage /app/build/ /usr/share/nginx/html
COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD service nginx start