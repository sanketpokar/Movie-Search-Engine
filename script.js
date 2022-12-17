let movies = {
    fetchMovies: function (moviename) {
        fetch(
            "http://www.omdbapi.com/?apikey=3743bfa2&t=" + moviename)
            .then((response) => {
                if (!response.ok) {
                    alert("No such movie exists");
                    throw new Error("No movie named" + moviename);
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                this.displayMovie(data);
            });
    },
    displayMovie: function (data) {
        const { Title } = data;
        const { Year } = data;
        const { Rated } = data;
        const { Released } = data;
        const { Runtime } = data;
        const { imdbRating } = data;
        const { BoxOffice } = data;
        console.log(Title);
    }
};

document.querySelector(".search button")
    .addEventListener("click", 
        () => movies.fetchMovies(document.querySelector(".search-bar").value)
    );