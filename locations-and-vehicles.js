import data from './data/ghibli/ghibli.js';

const films = data.films
const allCards = document.getElementById('allCards')
const locationsCards = showingLocationsCards(films);
const vehiclesCards = showingVehiclesCards(films);
const btnLocations = document.getElementById('locations')
const btnVehicles = document.getElementById('vehicles')

const locationsAndVehicles = locationsCards.concat(vehiclesCards);

function showingLocationsCards(films) {
  const listOfLocations = films.map((film) => {
    const location = film.locations.map((location) => {
      const allLocations = 
        `
        <div id="locationsCard" class="locations">
        <img id="locationsImg" alt="Location poster" src="${location.img}"/>

        <div id="locationsName">
        <p class="locationsTitle">${location.name}</p>
        <p class="locationsMovie">(${film.title})</p>
        </div>

        </div>
        `
      return allLocations
    })
    return location.join('')
  })
  return listOfLocations.join('')
}

function showingVehiclesCards(films) {
  const listOfVehicles = films.map((film) => {
    const vehicle = film.vehicles.map((vehicle) => {
      const allVehicles = 
          `
          <div id="vehiclesCard" class="vehicles">
          <img id="vehiclesImg" alt="Vehicle poster" src="${vehicle.img}"/>
  
          <div id="vehiclesName">
          <p class="vehiclesTitle">${vehicle.name}</p>
          <p class="vehiclesMovie">(${film.title})</p>
          </div>
  
          </div>
          `
      return allVehicles
    })
    return vehicle.join('')
  })
  return listOfVehicles.join('')
}
  
allCards.innerHTML = locationsAndVehicles;  

btnLocations.addEventListener('click', () => {
  allCards.innerHTML = showingLocationsCards(films);
})

btnVehicles.addEventListener('click', () => {
  allCards.innerHTML = showingVehiclesCards(films);
})