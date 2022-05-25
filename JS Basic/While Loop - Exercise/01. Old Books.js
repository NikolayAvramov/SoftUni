function oldBook(input) {
    let index = 0;
    let searchedBook = input[index];
    index++
    let bookCounter = 0;
    let currentBook = input[index]
    index++
    let isFound = false
    while (currentBook !== "No More Books") {

        if (currentBook == searchedBook) {
            console.log(`You checked ${bookCounter} books and found it.`)
            isFound = true
            break;
        } else {
            bookCounter++
        }

        currentBook = input[index];
        index++
    }
    if (!isFound) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${bookCounter} books.`);
    }
}
oldBook(["The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"])
