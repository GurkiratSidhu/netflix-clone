import "./App.css";
import Row from "./Row";
import requests from "./requests";
import "./Row.css";
import Banner from "./Banner";
import Nav from "./Nav";
//api key
// fae9acbc9dc2e7cca456ccfe48682f7c
function App() {
	return (
		<div className="App">
			<Nav />
			<Banner />
			<Row
				title="NETFLIX ORIGINALS"
				fetchUrl={requests.fetchNetflixOriginals}
				isLargeRow
			/>
			<Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
			<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
			<Row
				title="Comedy Series"
				fetchUrl={requests.fetchComedySeries}
				isLargeRow
			/>
			<Row
				title="Action Movies"
				fetchUrl={requests.fetchActionMovies}
				isLargeRow
			/>
			{/* <Row
				title="Comedy Movies"
				fetchUrl={requests.fetchComedyMovies}
				isLargeRow
			/> */}
			<Row
				title="Animated Movies"
				fetchUrl={requests.fetchAnimatedMovies}
				isLargeRow
			/>
			<Row
				title="Thriller Movies"
				fetchUrl={requests.fetchThrillerMovies}
				isLargeRow
			/>
			<Row
				title="Romance Movies"
				fetchUrl={requests.fetchRomanceMovies}
				isLargeRow
			/>
			<Row
				title="Documentaries"
				fetchUrl={requests.fetchDocumentaries}
				isLargeRow
			/>
		</div>
	);
}

export default App;
