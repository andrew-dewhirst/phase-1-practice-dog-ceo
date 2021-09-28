const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let allKeys;
const allBreeds = [];

document.addEventListener('DOMContentLoaded', event => {
  fetch(imgUrl)
  .then(response => response.json()) 
  .then(dogData => dogData.message.forEach(dog => renderDog(dog)));
  fetch(breedUrl)
  .then(response => response.json())
  .then(breedData => {
    renderList(breedData)
    allBreeds.push(breedData.message)
  });
  document.querySelector('ul').addEventListener('click',changeFontColor);
  document.querySelector('#breed-dropdown').addEventListener('change',filterDogs);
});
 
function renderDog(dog){
  let container = document.querySelector('#dog-image-container');
    let picture = document.createElement('img');
    picture.src = dog;
    container.appendChild(picture);
};

function renderList(result){
    let div = document.querySelector("body");
    let ul = document.querySelector("#dog-breeds");
    allKeys = Object.keys(result.message);
    allKeys.forEach(key => {
      let breeds = result.message[key];
      let li = document.createElement("li");
      li.innerText = key;
      if (breeds.length != 0) {
        let ul2 = document.createElement("ul");
        breeds.forEach(breed => {
          let li2 = document.createElement("li");
          li2.innerText = breed;
          ul2.appendChild(li2);
        });
        li.append(ul2);
      }
      ul.appendChild(li);
    });
    div.append(ul);
  };

function filterDogs(event){
  let e = event.target.value;
  let newBreedsArray = Object.keys(allBreeds[0]);
  let result = newBreedsArray.filter(word => word.startsWith(e));
  
  document.querySelector('#dog-breeds').innerText = '';
  result.map(dog => {
    let li = document.createElement('li');
    li.innerText = dog;
    document.querySelector('#dog-breeds').appendChild(li);
  })

  console.log(result);
};

function changeFontColor(event){
  let e = event.target;
  e.style.color = 'red';
};


