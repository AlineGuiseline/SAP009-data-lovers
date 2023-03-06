//Funções dos filmes
//Função para buscar o filme pelo nome
export const searchBar = (title, searchedName) => {
  return title.filter(movie => movie.title.toLowerCase().includes(searchedName)); 
};

//Função para ordenar por A-Z/Z-A
export function sortByOrderFilms(films, order){
  const newArray = [...films]

  if(order === "az") {
    newArray.sort(function(a,b){
      if(a.title < b.title){
        return -1;
      }
    })
  } else {
    newArray.sort(function(a,b){
      if(a.title > b.title){
        return -1;
      }
    })
  }
  return newArray;
}

//Função para ordenar por data de lançamento
export function sortByRelease(films, order){
  const newArray = [...films]

  if(order === "oldest") {
    newArray.sort(function(oldest, recent){
      if(oldest.release_date < recent.release_date){
        return -1;
      }
    })
  } else{
    newArray.sort(function(oldest, recent){
      if(oldest.release_date > recent.release_date){
        return -1;
      }
    })
  }
  return newArray;
}


//Função para filtrar por diretor
export const filters = (array, key, condition) =>
  array.filter((item) => item[key] === condition);


//Funções dos personagens

const getMoviesCharacters = (films) => {
  let chars = []
  for (let index = 0; index < films.length; index++) {
    chars = [...chars, ...films[index].people]
  }
  return chars
}
//Função para buscar o personagem pelo nome
export const searchCharacter = (films, searchedName) => {
  const chars = getMoviesCharacters(films)
  const search = chars.filter(person => person.name.toLowerCase().includes(searchedName))
   
  return search;
} 

//Função para mostrar os personagens de acordo com o filme
export function filmPeople (films, title) {
  const filmsCopy = [...films]

  const filmSelected = filmsCopy.find((film) => {
    return film.title === title
  })
  return filmSelected.people
}