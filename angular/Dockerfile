#stage 1
FROM node:18 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/group1-itsc-3155 /usr/share/nginx/html