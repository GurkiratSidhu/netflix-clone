import "./App.css";
import Row from "./Row";
import requests from "./requests";
import "./Row.css";
//api key
// fae9acbc9dc2e7cca456ccfe48682f7c
function App() {
	return (
		<div className="App">
			<h1>Netflix-Clone</h1>
			<Row
				title="NETFLIX ORIGINALS"
				fetchUrl={requests.fetchNetflixOriginals}
			/>
			<Row title="Trending Now" fetchUrl={requests.fetchTrending} />
			<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Animated Movies" fetchUrl={requests.fetchAnimatedMovies} />
			<Row title="Thriller Movies" fetchUrl={requests.fetchThrillerMovies} />
			<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
			<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
		</div>
	);
}

export default App;
