import React, { Component } from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import Book from "../components/Book";

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      books: [],
    };
  }

  ifChange = async (e) => {
    try {
      const query = e.target.value;
      this.setState({ query });
      if (query.trim()) {
        const r = await search(query);

        if (r.error) {
          this.setState({ books: [] });
        } else {
          this.setState({ books: r });
        }
      } else {
        this.setState({ books: [] });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to={"/"}>
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            {/*
          NOTES: The search from BooksAPI is limited to a particular set of search terms.
          You can find these search terms here:
          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
          you don't find a specific author or title. Every search is limited by search terms.
        */}
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.ifChange}
              value={this.state.query}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid" />
          {this.state.books.length > 0 &&
            this.state.books.map((book) => (
              <Book key={book.id} {...book} moveBook={this.props.moveBook} />
            ))}
        </div>
      </div>
    );
  }
}

export default Search;
