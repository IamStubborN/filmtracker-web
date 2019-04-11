FROM node:alpine as builder
WORKDIR '/app'
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build

FROM nginx
RUN rm -v /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf
RUN echo "daemon off;" >> /etc/nginx/nginx.conf
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html
CMD service nginx start