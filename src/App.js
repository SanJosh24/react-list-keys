import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { listItems } from './components/ListDemo';
import Card from './components/Card'
import MoviesList from './components/MoviesList'

class App extends Component {

  movies = [
    { title: "Jurassic Park", director: "Steven Spielberg" },
    { title: "Sharknado", director: "Anthony C. Ferrante" },
    { title: "Titanic", director: "James Cameron" }
  ];

  showMovieCards(){
    return this.movies.map((eachMovie, Index)=>{
      return ( <Card {...eachMovie} key={Index} /> )
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Check out this awesome list of movies</h1>
        <p>
          {this.showMovieCards()}
          </p>
      </div>
    );
  }
}

export default App;