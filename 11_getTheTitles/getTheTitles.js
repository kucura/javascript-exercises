let bookTitleArray = []
const getTheTitles = function(books) {
 for (i=0; i<books.length; i++) {
    bookTitleArray.push(books[i].title) //rewrite with .map
};
return bookTitleArray
}
// Do not edit below this line
module.exports = getTheTitles;
