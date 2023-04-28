const img = document.querySelector('img');
const button = document.querySelector("button")
const input = document.querySelector("#search")
const h1 = document.querySelector("h1")

fetch('https://api.giphy.com/v1/gifs/random?api_key=Z0n6ROG5Das3FiyhSXYTwQ2ITEVF1OXX&tag=el chavo del 8', {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
        img.src = response.data.images.original.url;
    });

button.addEventListener("click", () => {
  if (input.value === "") {
    input.style.color = "white";
    input.value = h1.innerText;
  }
  fetch(`https://api.giphy.com/v1/gifs/random?api_key=Z0n6ROG5Das3FiyhSXYTwQ2ITEVF1OXX&tag=${input.value}`, {mode: 'cors'})
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
      img.src = response.data.images.original.url;
  })
  .then(() => {
    h1.innerText = input.value.charAt(0).toUpperCase() + input.value.slice(1);
    input.value = "";
    input.style.color = "black";
  })  
  .catch(function (error){
    alert("No encontramos ningun gif con ese nombre")
    console.log(error)
  }) 
});
