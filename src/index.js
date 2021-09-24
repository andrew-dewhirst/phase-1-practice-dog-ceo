const imgUrl = "https://dog.ceo/api/breeds/image/random/4"


document.addEventListener('DOMContentLoaded', event => {
  fetch(imgUrl)
  .then(response => response.json()) 
  .then(dogData => dogData.message.forEach(dog => {
    let list = document.querySelector('#dog-image-container');
    let picture = document.createElement('img');
    picture.src = dogData.message[0]
    list.appendChild(picture);
  }));
});


