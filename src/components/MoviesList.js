import React, { Component } from 'react';
import { listItems } from './ListDemo';
import Card from './Card';

class MoviesList extends Component {
	movies = [
		{ title: 'Jurassic Park', director: 'Steven Spielberg' },
		{ title: 'Sharknado', director: 'Anthony C. Ferrante' },
		{ title: 'Titanic', director: 'James Cameron' }
	];

	showMovieCards(props) {
		return this.movies.map((eachMovie, Index) => {
			return (
				<div className="card">
					<h2>{props.title}</h2>
					<p>Director: {props.director}</p>
          <button onClick={() => this.deleteMovie()}>Delete</button>
				</div>
			);
		});
	}

	deleteMovie() {
		console.log('button clicked');
	}

	render() {
		return (
			<div className="List">
				<h1>Check out this awesome list of movies</h1>
				<p>{this.showMovieCards()}</p>
				<button onClick={() => this.deleteMovie()}>Delete</button>
			</div>
		);
	}
}

export default MoviesList;
