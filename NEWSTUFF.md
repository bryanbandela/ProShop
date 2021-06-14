I. Remove git file in the frontend folder created by react
We want our git file in the root of the folder

- ls -a (to see all the files including the hidden ones)
- rm -rf .git

II. Shortcut (With ES7 React ... )

- rafce : to create a react component with arrow function (Thanks to ES7 React,etc)

- race : React Arrow-function Component Export

III. Link

the Link component from react-router-dom does not reload the page and hence it's faster unlike the "a" tag

IV. React-bootstrap
To keep the image to go over the container

V. Backend
Change: export default products to module.export = products
Axios: one of the ways to make https requets from backend
State: you have component level state & global/App level state
useEffect: REACT function that runs as the app loads

Adding "scripts" in package.js:
"scripts": {
"start": "node backend/server.js",
"server": "nodemon backend/server.js",
"client": "npm start --prefix frontend",
"dev": "concurently \"npm run server\" \"npm run client\""
},
=> for concunrently see how the server is run first then the client
=> When you run in the directory : npm run ...
