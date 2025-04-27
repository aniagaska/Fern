// Chris made the random image example https://codepen.io/bronzehedwick/pen/dyLdJmG 
// Load random image from images folder on load
(function main() {
    'use strict';
  
    window.addEventListener('load', function handleLoad() {
      const imagePaths = [
        '/images/vet-1.png',
        '/images/vet-2.png',
        '/images/vet-3.png',
      ];
  
      const randomImagePath = imagePaths[Math.floor(Math.random() * imagePaths.length)];
      const imageContainer = document.getElementById('image-container');
      const randomImage = new Image();
      randomImage.src = randomImagePath;
      randomImage.alt = 'Fern the dog is very cute';
      imageContainer.appendChild(randomImage);
    });
  })();