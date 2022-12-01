var express = require('express');  
var app = express();  


app.get('/', function (req, res) {  
   console.log("Got a GET request for the homepage");  
   res.send('Welcome this is Home page');  
})  
app.post('/', function (req, res) {  
   console.log("Got a POST request for the homepage");  
   res.send('This is Home page');  
})  
  
app.get('/about', function (req, res) {  
   console.log("Got a GET request for /about page");  
   res.send('This is about page');  
});


app.listen(3000, function () {  
console.log("listening to port 3000")
});  
