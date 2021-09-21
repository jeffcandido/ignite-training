npm init -y

npm install react

npm install react-dom

mkdir src && mkdir public

touch public/index.html

html:5

---

npm install @babel/core @babel/cli @babel/preset-env -D

babel src/index.js --out-file dist/bundle.js

node_modules/.bin/babel src/index.jsx --out-file dist/bundle.js

npm install @babel/preset-react -D
