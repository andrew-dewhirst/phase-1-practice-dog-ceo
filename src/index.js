document.addEventListener('DOMContentLoaded', event => {
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(response => response.json()) 
  .then(dogData => dogData.forEach(dog => showDogs(dog)))
});

function showDogs(){
  console.log('hello')
}
