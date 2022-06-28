const express = require('express');

const app = express();

app.get("/", function(request, response){
  response.send("Hello");

});

app.get("/contact", function(req, res){
  res.send("conatct me at: gamil@gmail.com");
});

app.get("/about", function(req, res){
  res.send("Hi there! I am a UX/UI Designer and a Full Stack Programmer");
});

app.get("/hobbies", function(req, res){
  res.send("<ul><li>reading</li><li> swimming</li></ul>");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
