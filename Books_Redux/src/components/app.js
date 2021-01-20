import React, { Component } from 'react';
import BookDetails from '../containers/BookDetails';
import BookList from "../containers/BookList";

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList></BookList>
        <BookDetails></BookDetails>
      </div>
    );
  }
}
