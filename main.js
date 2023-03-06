import {searchBar, sortByOrderFilms, sortByRelease, filters} from './data.js'; 

import data from './data/ghibli/ghibli.js';


const films = data.films
const movies = document.getElementById('movieCards')
const movieSearch = document.getElementById('movies-search')
const order = document.getElementById('order')
const release = document.getElementById('release')
const director = document.getElementById('director')
const stats = document.querySelector('.stats')

//Função para fazer os cards aparecerem na tela
function showingMovieCards(films) {
  const listOfMovies = films.map((film) => {
    const allMovies = 
    `
    <div id="container">
    <div id="card">

    <div id="frontCard" class="movies">

    <img alt="Film poster" src="${film.poster}" id="filmPoster"/>
    
    <div id="divText">
    <strong class="movieTitle">${film.title}</strong>
    </div>

    <ul style="list-style: none;">
    <li id="director">${film.director}</li>
    <li id="releaseDate">${film.release_date}</li>
    </ul>

    </div>


    <div id="backCard" class="movies">
    <p id="description"><strong>Description:</strong> ${film.description}</p>
    </div>

    </div>
    </div>
    `
    return allMovies
  });
  return listOfMovies.join('');
}

movies.innerHTML = showingMovieCards(films)


//Função para buscar o filme pelo nome
movieSearch.addEventListener ('input', event => {
  const searchedName = event.target.value.toLowerCase()
  const filteredName = searchBar(films, searchedName)
  const card = showingMovieCards(filteredName)
  movies.innerHTML = card

})

//Botão para limpar os filtros/busca e dar refresh na página
const clean = document.getElementById('clean')

clean.addEventListener('click', function refresh(){
  window.location.reload()})

//Função para ordenar por A-Z/Z-A
order.addEventListener ('change', () => {
  const pressed = (order).value;
  const sortedOrder = sortByOrderFilms(films, pressed)
  const cards = showingMovieCards(sortedOrder)
  movies.innerHTML = cards
})

//Função para ordenar por data de lançamento
release.addEventListener ('change', () => {
  const selected = (release).value;
  const sorted = sortByRelease(films, selected)
  const card = showingMovieCards(sorted)
  movies.innerHTML = card
})

//Função para filtrar os diretores
director.addEventListener('change', (event) => {
  const selectedDirector = event.target.value
  const filtered = filters(films, 'director', selectedDirector)
  const cards = showingMovieCards(filtered)
  movies.innerHTML = cards

  const message = `The great Sr. ${selectedDirector} has directed ${filtered.length} film(s) in Studio Ghibli's history`
  stats.innerHTML= message
  movies.innerHTML = cards
})