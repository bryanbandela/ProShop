I. [FRONTEND]

- Create a folder frontend
- Initialize npm inside frontend

II. [BACKEND]

II.1. [Serve & Fetch Data from express]
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

II.1. [Getting_started_with_MongoDB]

[Part_1]: Connecting to MongoDB

- Log in to Atlas (Cloud version of MongoDB) + Create/Use the available cluster
- Download MongoDB Compass: Graphical UI for desktop app
- Under Database Access: create a new DB user
- Under Network Acess: Add IP Address (current IP Adress if it's a production app that I'm deploying other allow access from anywhere)
- Create a DB & collections under Clusters
- Connect DB with compass by copying & pasting the link to Atlas: In the link put the correct name of the DB you wanna work with and the password somewhere in the link.
- Last thing: Go to connect [again] -> connect your application -> copy that link to the env file and put the correct DB name,etc

[Part_2]: Installing Mongoose

- Mongoose: Object Modeling for MongoDB (to create a model & a schema for our DB)
- root: npm i mongoose
- backend/config/db.js
- package: color.js : to add color in the console
- backend/models : users, products & orders
- model creation: import mongoose, create a schema, then the model.

- remove ids from products.js
- data/users.js : add an array of 3 users including 1 admin (follow schema)
- root : npm i bcryptjs

Routes:

- backend/routes/productRoutes.js : put the relevant routes there
- npm i express-async-handler : to handle errors for async/await

Middleware:

- backend/middleware/errorMiddleware.js
