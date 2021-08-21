import React, { Component } from "react";

export const TheContext = React.createContext();

export class index extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      currentlyReading: [],
      wantToRead: [],
      read: [],
      addBooks: (books) => {
        const currentlyReading = books.filter(
          (book) => book.shelf === "currentlyReading"
        );
        const read = books.filter((book) => book.shelf === "read");
        const wantToRead = books.filter((book) => book.shelf === "wantToRead");
        this.setState({ books, currentlyReading, read, wantToRead });
      },
      moveBook: (book, newShelf, allShelfs) => {
        const newBooks = this.state.books.map((allBooks) => {
          const fid = allShelfs[newShelf].find(
            (bookID) => bookID === allBooks.id
          );
          if (fid) {
            allBooks.shelf = newShelf;
          }
          return allBooks;
        });
        this.state.addBooks(newBooks);
      },
    };
  }

  render() {
    return (
      <TheContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </TheContext.Provider>
    );
  }
}

export default index;
