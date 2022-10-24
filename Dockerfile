FROM node:11.0.0
WORKDIR /app
COPY . .
RUN npm cache clean --force
RUN rm -rf node_modules/
RUN npm install

RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]