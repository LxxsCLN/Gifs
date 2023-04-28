const img = document.querySelector('img');

fetch('https://api.giphy.com/v1/gifs/random?api_key=Z0n6ROG5Das3FiyhSXYTwQ2ITEVF1OXX&tag=el chavo del 8', {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
        img.src = response.data.images.original.url;
    });