I. [FRONTEND]

- Create a folder frontend
- Initialize npm inside frontend

II. [BACKEND]
We'll now fetch the data from the backend

- Create a folder : PROSHOP/backend & ../backend/server.js
- Initialize package.json in root folder (not in backend)
- npm i express
- Create a folder & paste products.js from frontend/src: ../backend/data/products.js
- Create a route to serve products from the backend
- In package.json => change the scripts : "start" : "node backend/server.js" to run npm start
- Configure your servers with routes
- In frontend folder: npm i axios (one of the ways to make http request):
  It's just temporary but later on we'll use a redux tool called "action creators" but right now we'll do right from the component
- With axios in frontend, the app will try to use the default localhost3000 but won't find it so we have to set a proxy in the package.json in the frontend
- root: npm i -D nodemon concurrently : -D => Dev dependencies
- Add more scripts for server & client
- Add dotenv : npm i dotenv (we install, require it, call its config method and use it for its created variables)
- restart server whenever you add .env file
- to convert from require to module: In package.json , under "main":
  => "type": "module", & export & import properly (see products file)
