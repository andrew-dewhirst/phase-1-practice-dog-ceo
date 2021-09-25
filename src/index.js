const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', event => {
  fetch(imgUrl)
  .then(response => response.json()) 
  .then(dogData => dogData.message.forEach(dog => renderDog(dog)));
  fetch(breedUrl)
  .then(response => response.json())
  .then(dogList => {
    let fullNames = Object.entries(dogList.message);
    fullNames.forEach(name => renderList(name));
    document.querySelector('ul').addEventListener('click',changeFontColor);
  })
  document.querySelector('#breed-dropdown').addEventListener('click',dropdown);
});

function renderDog(dog){
  let container = document.querySelector('#dog-image-container');
    let picture = document.createElement('img');
    picture.src = dog;
    container.appendChild(picture);
};

function renderList(name){
  let list = document.querySelector('#dog-breeds');
  let dogNames = document.createElement('li');
  dogNames.classList.add('.clickable');
  dogNames.textContent = name;
  list.appendChild(dogNames);
};

function changeFontColor(event){
  let e = event.target;
  e.style.color = 'red';
};

function dropdown (event) {
  console.log(event.target.value)
  if (event.target.value == 'a') {
    let a = document.querySelector('ul').innerText;
    let result = a.match(/a[0-9]/g)
    console.log(result)
  }
}

