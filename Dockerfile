
FROM node:10

COPY node_modules /usr/dist_files/node_modules/

COPY dist_files/backend/server.js /usr/dist_files/server.js
COPY dist_files/frontend/bundle_prod.es5.min.js /usr/dist_files/bundle_prod.es5.min.js
COPY dist_files/frontend/bundle_prod.css /usr/dist_files/bundle_prod.css
COPY src/frontend/index-prod.html /usr/dist_files/index.html
