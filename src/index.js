const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let allKeys;

document.addEventListener('DOMContentLoaded', event => {
  fetch(imgUrl)
  .then(response => response.json()) 
  .then(dogData => dogData.message.forEach(dog => renderDog(dog)));
  fetch(breedUrl)
  .then(response => response.json())
  .then(() => renderList());
  });


function renderDog(dog){
  let container = document.querySelector('#dog-image-container');
    let picture = document.createElement('img');
    picture.src = dog;
    container.appendChild(picture);
};

function renderList(){
fetch(breedUrl)
  .then(res => res.json())
  .then(result => {
    let div = document.querySelector("body");
    let ul = document.createElement("ul");
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
  });
}

function changeFontColor(event){
  let e = event.target;
  e.style.color = 'red';
};

function dropdown (event) {
  console.log(event.target.value)
  let e = event.target.value;
  let startsWithLetter = fullNames.filter(name => name.startsWith(e));
  console.log(startsWithLetter)
}

