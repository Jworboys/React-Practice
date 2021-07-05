import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	async function fetchMoviesHandler() {
		// Default method is GET, otherwise can give a 2nd parameter.
		// .then is a "promise" it waits for the step prior to be finished.
		// U can also use await as shown below.
		setIsLoading(true);
		const response = await fetch('https://swapi.dev/api/films/');
		const data = await response.json();

		const tranformedMovies = data.results.map(movieData => {
			return {
				id: movieData.episode_id,
				title: movieData.title,
				openingText: movieData.opening_crawl,
				releaseDate: movieData.release_date,
			};
		});
		setMovies(tranformedMovies);
		setIsLoading(false);
	}

	return (
		<React.Fragment>
			<section>
				<button onClick={fetchMoviesHandler}>Fetch Movies</button>
			</section>
			<section>
				{!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
				{!isLoading && movies.length === 0 && <p>Found no movies.</p>}
				{isLoading && <p>Loading...</p>}
			</section>
		</React.Fragment>
	);
}

export default App;
