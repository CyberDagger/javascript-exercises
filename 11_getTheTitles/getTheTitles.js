const getTheTitles = function(books) {
    let titles = [];
    titles = books.map(book => book.title);
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
