const express=require("express");
const app = express();
 const port =8080;
const path =require("path");


// Serve static files
app.use(express.static(path.join(__dirname, "public/js")));
app.use(express.static(path.join(__dirname, "public/css")));

// Set EJS as the view engine
app.set("view engine", "ejs");

// Set the views directory
app.set("views", path.join(__dirname, "views"));

// Home route
app.get("/", (req, res) => {
    res.render("home.ejs");
});

// Instagram route
app.get("/ig/:username", (req, res) => {
    const { username } = req.params; // Extract the username parameter
    const instaData = require("./data.json"); // Import data from JSON file
    const data = instaData[username]; // Retrieve data for the given username

    console.log(data); // Log the user data (optional debugging)
    console.log(instaData); // Log all Instagram data (optional debugging)

    if (data) {
        // If user data exists, render the Instagram page
        res.render("instagram.ejs", { data });
    } else {
        // If user data does not exist, render an error page
        res.render("error.ejs");
    }
});


 
app.get("/hello",(req,res)=>{
   res.send("hello");
});
app.get("/rolldic",(req,res)=>{
   let dicevalue =  Math.floor(Math.random()*6 ) +1
   res.render("rolldice.ejs",{dicevalue});
});
 app.listen(port,()=>{
    console.log(`listing at port no ${port}`);
 });