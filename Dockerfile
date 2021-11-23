# Stage 0 - Build Frontend Assets
FROM node:14-alpine as build

WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
ENV REACT_APP_API=http://localhost:3000
ENV GENERATE_SOURCEMAP=false

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn build

# Stage 1 - Serve Frontend Assets
FROM fholzer/nginx-brotli:v1.19.1

WORKDIR /etc/nginx
ADD nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
