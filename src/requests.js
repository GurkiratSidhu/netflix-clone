const API_KEY = "fae9acbc9dc2e7cca456ccfe48682f7c";

const requests = {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en=us`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en=us`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_generes=28`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_generes=35`,
	fetchAnimatedMovies: `/discover/movie?api_key=${API_KEY}&with_generes=16`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_generes=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_generes=99`,
	fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_generes=53`,
};

export default requests;
