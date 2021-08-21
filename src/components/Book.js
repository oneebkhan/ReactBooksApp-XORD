import React, { Component } from "react";
import { update } from "../BooksAPI";

export class Book extends Component {
  ifChange = async (e) => {
    try {
      const shelf = e.target.value;
      const book = this.props;
      const r = await update(book, shelf);
      this.props.moveBook(book, shelf, r);
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: this.props.imageLinks.thumbnail
                  ? "url(" + this.props.imageLinks.thumbnail + ")"
                  : "",
              }}
            />
            <div className="book-shelf-changer">
              <select onChange={this.ifChange} value={this.props.shelf}>
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">
            {this.props.title ? this.props.title : "No Title"}
          </div>
          <div className="book-authors">
            {this.props.authors ? this.props.authors[0] : "No Author"}
          </div>
        </div>
      </li>
    );
  }
}

export default Book;
