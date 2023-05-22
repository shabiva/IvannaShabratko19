//window.addEventListener('load'.init);

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


let block = document.querySelector('.block');

function getRandomColor() {
  var color_1 = getRandomNumber(0, 255);
  var color_2 = getRandomNumber(0, 255);
  var color_3 = getRandomNumber(0, 255);
  return 'rgb(' + color_1 + ', ' + color_2 + ', ' + color_3 + ')';
}


setInterval(function() {
  var randomColor = getRandomColor();
  block.style.background = randomColor;
}, 500);


function getRandomPosition() {
  let cubWidth = window.innerWidth;
  let cubHeight = window.innerHeight;

  let maxLeft = cubWidth - block.offsetWidth;
  let maxTop = cubHeight - block.offsetHeight;

  let randomLeft = getRandomNumber(0, maxLeft);
  let randomTop = getRandomNumber(0, maxTop);

  return {
    left: randomLeft,
    top: randomTop
  };
}

setInterval(function() {
  let randomPosition = getRandomPosition();
  
  block.style.left = randomPosition.left + 'px';
  block.style.top = randomPosition.top + 'px';
}, 1000);
















