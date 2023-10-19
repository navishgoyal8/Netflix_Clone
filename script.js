const api = "api_key=219caf46a22a46a51f39170178c95b15";

const base_url = "https://api.themoviedb.org/3";

const img_url = "https://image.tmdb.org/t/p/w500";
const banner_url = "https://image.tmdb.org/t/p/original";

const requests = {

    fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
    fetchNetflixOriginals: `${base_url}/discover/movie?${api}&with_networks=213`,
    fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
    fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
    fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,

};

function truncate(str,n){
    return str?.length > n ? str.substr(0,n-1) + "..." : str;
}

fetch(requests.fetchNetflixOriginals)
    .then((res)=>res.json())           // CONVERT INTO JSON FORMAT 

    .then((data)=>{
    console.log(data.results);
    

    const setMovie = data.results[Math.floor(Math.random() * data.results.length-1)];

    var banner = document.getElementById("banner");
    var banner_title = document.getElementById("banner_title");
    var banner_desc = document.getElementById("banner_description");

    banner.style.backgroundImage = 
        "url("+ banner_url + setMovie.backdrop_path + ")";
        banner_desc.innerHTML = truncate(setMovie.overview,150);
        banner_title.innerHTML = setMovie.original_title; 
 })

 //movie rows

 fetch(requests.fetchNetflixOriginals)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        row.classList.add("netflixrow");

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row_title";
        title.innerHTML = "NETFLIX ORIGINALS";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie)=>{
            const poster = document.createElement("img");
            poster.className = "row_posterLarge";

            var s = movie.id;
            poster.id = s;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    })

fetch(requests.fetchTrending)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        row.classList.add("netflixrow");

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row_title";
        title.innerHTML = "TOP RATED";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row_posterLarge";

            var s = movie.id;
            poster.id = s;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    })

fetch(requests.fetchActionMovies)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        row.classList.add("netflixrow");

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row_title";
        title.innerHTML = "ACTION MOVIES";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row_posterLarge";

            var s = movie.id;
            poster.id = s;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    })

fetch(requests.fetchComedyMovies)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        row.classList.add("netflixrow");

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row_title";
        title.innerHTML = "COMEDY MOVIES";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row_posterLarge";

            var s = movie.id;
            poster.id = s;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    })

fetch(requests.fetchHorrorMovies)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        row.classList.add("netflixrow");

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row_title";
        title.innerHTML = "HORROR MOVIES";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row_posterLarge";

            var s = movie.id;
            poster.id = s;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    })

fetch(requests.fetchRomanceMovies)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        row.classList.add("netflixrow");

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row_title";
        title.innerHTML = "ROMANCE MOVIES";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row_posterLarge";

            var s = movie.id;
            poster.id = s;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    })

fetch(requests.fetchDocumentaries)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        row.classList.add("netflixrow");

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row_title";
        title.innerHTML = "DOCUMENTARIES";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row_posterLarge";

            var s = movie.id;
            poster.id = s;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    })
