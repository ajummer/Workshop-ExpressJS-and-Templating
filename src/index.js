const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path")


const app = express();
const port = 3000; 

// Handlebars config
app.engine("hbs", handlebars.engine({extname: "hbs"}))
app.set("view engine" , "hbs")
app.set("views" , "src/views")

// Setup static files 
app.use(express.static(path.resolve(__dirname,"public")))

app.get("/" , (req,res) =>{
    res.render("home")
})

app.listen(port , () => console.log(`Server is listening at port ${port}`))