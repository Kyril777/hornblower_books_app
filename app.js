var express = require('express');

var app = express();

app.set('view engine', 'ejs');

var routes = require('./routes');


var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));


// Routes
app.get('/', routes.home);

// Book single
app.get('/hornblower_book/:book_number?', routes.book_single);

// Page not found
app.get('*', routes.notFound);

app.listen(3000, function(){
  console.log("The application is running on localhost:3000");
});
