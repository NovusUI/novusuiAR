var scene = document.querySelector('a-scene');
var entity = document.querySelector('#entity1');

var touchStartX = 0;
var touchStartY = 0;

scene.addEventListener('touchstart', onTouchStart);
scene.addEventListener('touchmove', onTouchMove);
scene.addEventListener('touchend', onTouchEnd);

function onTouchStart(event) {
  touchStartX = event.touches[0].clientX;
  touchStartY = event.touches[0].clientY;
}

function onTouchMove(event) {
  var touchX = event.touches[0].clientX;
  var touchY = event.touches[0].clientY;
  
  var deltaX = touchX - touchStartX;
  var deltaY = touchY - touchStartY;
  
  // move entity along x and y axis
  var currentPosition = entity.getAttribute('position');
  var newX = currentPosition.x + deltaX / 100;
  var newY = currentPosition.y - deltaY / 100;
  var currentZ = currentPosition.z;
  entity.setAttribute('position', {x: newX, y: newY, z: currentZ});
  
  // update touch start position
  touchStartX = touchX;
  touchStartY = touchY;
}

function onTouchEnd(event) {
  // cleanup code
}
