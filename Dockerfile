FROM node:12-alpine as build
ARG ENDPOINT_URL="https://compfest-final-task-backend.herokuapp.com/"
WORKDIR /app
COPY ./package.json ./
COPY yarn.lock ./
RUN yarn --silent
COPY . ./
RUN REACT_APP_ENDPOINT_URL=$ENDPOINT_URL yarn build


FROM nginx:stable-alpine as production
COPY --from=build /app/build /usr/share/nginx/html
COPY ./deployment/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]