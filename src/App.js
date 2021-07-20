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
		</div>
	);
}

export default App;
