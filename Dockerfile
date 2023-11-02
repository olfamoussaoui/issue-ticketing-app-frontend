# stage 1
FROM node:18.18.2 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build - prod

# stage 2
FROM nginx:alpine
COPY --from=node /app/dist/issue-ticketing-app-frontend /usr/share/nginx/html
