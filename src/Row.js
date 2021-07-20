import React, { useState, useEffect } from "react";
import axios from "./axios";

function Row({ title, fetchURL }) {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchURL);
			setMovies(request.data.results);
			return request;
		}
		fetchData();
	}, [fetchURL]);

	console.log(movies);

	return (
		<div>
			{/* title */}

			{/* container - posters */}
			<div className="row">
				<h2>{title}</h2>
				<div className="row_posters"></div>
			</div>
		</div>
	);
}

export default Row;
