FROM node:14.15
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY . .
EXPOSE 8070
ARG BACKEND_ENV=development
ENV CLIENT=$BACKEND_ENV
CMD npm run prod:${CLIENT}