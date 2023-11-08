const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzAyYTg5ZGY3OTRkNTIwYzFmMmVkYWJmZmQ2MDJhNyIsInN1YiI6IjYxZmRjYWQ5YzU4NDBkMDBhMWMyODMzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X11NlsaYsGCZW6c0IJZ4XU8VoI6vX9cCbALnjkEngX0'


const movieDetails = document.getElementById('movieDetails');
const movieCartel = document.getElementById('movieCartel');
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+AUTH_TOKEN
    }
  };

  updateData();

  function updateData(){
    var randomMovie =  Math.floor(Math.random() * 66770);
    var toFetch ='https://api.themoviedb.org/3/movie/'+randomMovie +'?language=en-US'
    fetch(toFetch, options)
    .then(response => response.json())
    .then(response => {const movieInfo = `
    
    <h2 class="movie-title">${response.title}</h2>
    <p class="movie-info">Fecha de Lanzamiento: ${response.release_date}</p>
    <p class="movie-info">Géneros: ${response.genres.map(genre => genre.name).join(', ')}</p>
    <p class="movie-info">Puntuación: ${response.vote_average}</p>
    <p class="movie-info">Duración: ${response.runtime} minutos</p>
    <p class="movie-info">Resumen: ${response.overview}</p>
    <p class="movie-info">Presupuesto: $${response.budget}</p>
    <p class="movie-info">Recaudación: $${response.revenue}</p>
    <p class="movie-info">Idioma Original: ${response.original_language}</p>
    <p class="movie-info">Países de Producción: ${response.production_countries.map(country => country.name).join(', ')}</p>
    <p class="movie-info">Compañías de Producción: ${response.production_companies.map(company => company.name).join(', ')}</p>
    <p class="movie-info">Idiomas Hablados: ${response.spoken_languages.map(language => language.name).join(', ')}</p>
    <p class="movie-info">Tagline: ${response.tagline}</p>
    <p class="movie-info">IMDB ID: ${response.imdb_id}</p>
    <p class="movie-info">Popularidad: ${response.popularity}</p>
    <p class="movie-info">Votos: ${response.vote_count}</p>
    <p class="movie-info">Estado: ${response.status}</p>
    <p class="movie-info">Adulto: ${response.adult ? "Sí" : "No"}</p>
    <p class="movie-info">Video: ${response.video ? "Sí" : "No"}</p>
`
movieDetails.innerHTML = movieInfo;
const moviePoster = `<img src="https://image.tmdb.org/t/p/w500${response.poster_path}" alt="${response.title}" class="movie-poster">  
` 
movieCartel.innerHTML = moviePoster})
    .then(response => console.log(response))
    .catch(err => err.toString().includes('Cannot') ? updateData() : console.log(err))
    
  }

  function mostrarDetallesPelicula() {
    updateData();
}





