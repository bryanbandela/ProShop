I. Remove git file in the frontend folder created by react
We want our git file in the root of the folder

- ls -a (to see all the files including the hidden ones)
- rm -rf .git

II. [Shortcut] (With ES7 React ... )

- rafce : to create a react component with arrow function (Thanks to ES7 React,etc)

- race : React Arrow-function Component Export

III. [Link]

the Link component from react-router-dom does not reload the page and hence it's faster unlike the "a" tag

IV. [React-bootstrap]
To keep the image to go over the container

V. [Backend]

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

VI. [MongoDB]
Atlas is just the cloud version of MongoDB, instead of downloading. It's easier for deployment

- Whenever you get a Promise (eg. using mongoDB method like : .connect, .find,etc), use async/await because it returns a promise

VII. [Mongoose]
require mongoose, create a schema then set the model
const reviewSchema = mongoose.Schema(
{
name: {
type: String,
required: true,
},
rating: {
type: Number,
required: true,
}
},
{
timestamps: true, //this records whta time this was made
}
);

VIII. [DATA_SEEDER]
I actually don't need a data seeder coz the app is fully functional without it. It is just helpful if we want to mess with data and then reinstate the original, for testing and evaluating.

[ERROR] : [ERR_MODULE_NOT_FOUND] I imported files without the file extension

IX. [ROUTER]
app.use("/api/products", productRoutes); //for anything that goes to "/api/products" use the file productRoutes. assuming there is a file with all the routes

X. [useDispatch_useSelector]

useDispatch/dispatch => whenever you want your state to be saved in the store

useSelector => whenever you want to use your state in your UI
eg: const userLogin = useSelector((state) => state.userLogin);
const { userInfo } = userLogin;

[ERROR_HANDLING]

1. Type_Error: "name" propety not found/undefined, unable to deconstruct:

- Check the spelling or accuracy of file imported
- console.log the values before it gets called
- check what the params gives you and read the errors

2. Error: React.Children.only expected to receive a single React element child
   Problem: I inserted two elements in a component
   e.g <LinkContainer>{}{}</LinkContainer>
   Solution: I had to remove it

[BUGS_TO_FIX]

Cart reset & other bugs
16
16 upvotes
Alexei · Lecture 90 · 9 months ago
Hey Brad,

Thanks for the great course, as usual :P

Some bugs I found...

1. You forgot to implement cart reset after order is submited, the cart stays with the items even if the order submited and payed,

2. The search box, when you press the "back" button, it goes back, but the search input stays with the search value.

3. The loaders.. when you used {successUpdate && ...} and {success && ...} sometimes you can see two loaders on one action (for example in the product managment page, try to delete a couple of products one after other).

4. product details page reset.. when you enter a couple of different products, you can see the previous product details for a second, untill it updates with the new product details.

5. Usualy only clients that bought some product should be able to rate it, not everybody.

6. When you delete user, you should delete his orders also... its not makes sense to leave it.. besides you cant enter/view any of the deleted user orders...

7. When you keep the product details in the order tabe (details like image), if the product get updated, its not appears in the orders.. you can still see the old product details.. I think it should be populated with the product table and get the updated details from that table.

8. Maybe you can add stripe in addition to paypal.

"engines": { "node": ">=12.19.0" },
