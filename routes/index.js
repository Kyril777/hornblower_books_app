var booksJSON = require('../books.json');

// Home
exports.home = function(req, res){

  var books = booksJSON.books;

  res.render('home', {
    title: "Hornblower Books",
    books : books
  });
};

// Book single
exports.book_single = function(req, res){

  var book_number = req.params.book_number;

  var books = booksJSON.books;

  if (book_number >= 1 && book_number <= 11){
      var book = books[book_number -1];

      var title = book.title;

      var main_characters = book.main_characters;

      res.render('book_single', {
        books : books,
        title : title,
        book : book,
        main_characters : main_characters
      });
    } else {
      res.render('notFound',{
        books : books,
        title : "Like two ships passing by the night."
      });
    }
};

// Page not found
exports.notFound = function(req, res){

  var books = booksJSON.books;

  res.render('notFound', {
    books : books,
    title: "Like two ships passing by the night."
  });
};
