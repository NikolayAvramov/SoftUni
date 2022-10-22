class LibraryCollection {
	constructor(capacity) {
		(this.capacity = capacity), (this.book = []);
	}
	addBook(bookName, bookAuthor) {
		if (this.book.length == this.capacity) {
			throw new Error("Not enough space in the collection.");
		}
		this.book.push({bookName, bookAuthor, payed: false});
		return `The ${bookName}, with an author ${bookAuthor}, collect.`;
	}
	payBook(bookName) {
		if (!this.book.some((x) => x.bookName == bookName)) {
			throw new Error(`${bookName} is not in the collection.`);
		}
		let searchedBook = this.book.find((x) => x.bookName == bookName);
		if (searchedBook.payed) {
			throw new Error(`${bookName} has already been paid.`);
		}
		searchedBook.payed = true;
		return `${bookName} has been successfully paid.`;
	}
	removeBook(bookName) {
		if (!this.book.some((x) => x.bookName == bookName)) {
			throw new Error(`The book, you're looking for, is not found.`);
		}
		let bookToRemove = this.book.find((x) => x.bookName == bookName);
		if (!bookToRemove.payed) {
			throw new Error(
				`${bookName} need to be paid before removing from the collection.`
			);
		}
		let indexOfBook = this.book.findIndex((x) => x.bookName == bookName);
		this.book.splice(indexOfBook, 1);
		return `${bookName} remove from the collection.`;
	}
	getStatistics(bookAuthor) {
		if (bookAuthor) {
			let searchedBook = this.book.find(
				(x) => x.bookAuthor == bookAuthor
			);

			if (!searchedBook) {
				throw new Error(`${bookAuthor} is not in the collection.`);
			}

			return `${searchedBook.bookName} == ${searchedBook.bookAuthor} - ${
				searchedBook.payed ? "Has Paid" : "Not Paid"
			}.`;
		} else {
			let emptySlots = this.capacity - this.book.length;
			let buff = `The book collection has ${emptySlots} empty spots left.`;
			this.book.sort((a, b) => {
				a.bookName.localeCompare(b.bookName);
			});
			for (let obj of this.book) {
				let isPayed = "Not Paid";
				if (obj.payed) {
					isPayed = "Has Paid";
				}
				buff += `\n${obj.bookName} == ${obj.bookAuthor} - ${isPayed}.`;
			}
			return buff.trim();
		}
	}
}
const library = new LibraryCollection(2);
console.log(library.addBook("Don Quixote", "Miguel de Cervantes"));
console.log(library.getStatistics("Miguel de Cehrvantes"));
