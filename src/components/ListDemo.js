// components/ListDemo.js
import React, { Component } from 'react';

const numbers = [1, 2, 3, 4, 5, 6];

// array of list item HTML elements that needs to be displayed
const movies = [
  { title: "Jurassic Park", director: "Steven Spielberg" },
  { title: "Sharknado", director: "Anthony C. Ferrante" },
  { title: "Titanic", director: "James Cameron" }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>{ listItems }</ul>
      </div>
    );
  }
}

export const listItems = numbers.map((oneNumber, index) => 
  <li key={index}>{oneNumber}</li>
);