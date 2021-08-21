import React, { Component } from "react";
import { getAll } from "../BooksAPI";
import Shelf from "../components/Shelf";
import { Link } from "react-router-dom";

export class Home extends Component {
  async componentDidMount() {
    try {
      const books = await getAll();
      this.props.addBooks(books);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {/* Shelf component was here */}
          <Shelf
            title="Currently Reading"
            books={this.props.currentlyReading}
            moveBook={this.props.moveBook}
          />
          <Shelf
            title="Want to read"
            books={this.props.wantToRead}
            moveBook={this.props.moveBook}
          />
          <Shelf
            title="Read"
            books={this.props.read}
            moveBook={this.props.moveBook}
          />
        </div>
        <div className="open-search">
          <Link to={"/search"}>
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
