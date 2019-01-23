
FROM node:10

RUN ls
COPY dist_files/backend/server.js /usr/dist_files
COPY dist_files/frontend/bundle_prod.es5.min.js /usr/dist_files
COPY dist_files/frontend/bundle_prod.css /usr/dist_files
COPY src/frontend/index-prod.html /usr/dist_files
