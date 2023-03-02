const express = require("express");
const bodyParser = require("body-parser");
const date= require(__dirname + "/views/date.js");
const app = express();
let items=["study for mid sems","course","linkedin post"];
let workitems= [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req,res){
    let day = date();
    res.render("List", {KindOfDay: day, newListItem: items});
});

app.post("/", function(req,res){
     let item = req.body.inp;
     items.push(item);
    res.redirect("/");
});

app.get("/work",function(req,res){
    res.render("List", {KindOfDay: "Work List", newListItem: workitems});
});

app.post("/work", function(req,res){
    let item = req.body.inp;
    workitems.push(item);
   res.redirect("/work");
});

app.get("/about",function(req,res){
    res.render("about");
})

app.listen(3000, function(){
    console.log("Server is started on port 3000");

});
