var scene = document.querySelector('a-scene');
var entity1 = document.querySelector('#entity1');
var entity2 = document.querySelector('#entity2');
var entity3 = document.querySelector('#entity3');
var entity4 = document.querySelector('#entity4');
scene.addEventListener('touchstart', onTouchStart);
scene.addEventListener('touchmove', onTouchMove);
scene.addEventListener('touchend', onTouchEnd);

let touchX;
let touchY;
let entityRotation;

function onTouchStart(event) {
  touchX = event.touches[0].pageX;
  touchY = event.touches[0].pageY;
  entityRotation = entity.getAttribute('rotation');
}



function onTouchMove(event) {
  var deltaX = event.touches[0].pageX - touchX;
  var deltaY = event.touches[0].pageY - touchY;
  var newRotation = {
      x: entityRotation.x + deltaY * 0.1,
      y: entityRotation.y + deltaX * 0.1,
      z: entityRotation.z
  };
  entity.setAttribute('rotation', newRotation);
}

function onTouchEnd(event) {
  // Do any necessary cleanup
}


