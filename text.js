// var scene = document.querySelector('a-scene');
// var entity = document.querySelector('#entity1');

// var touchStartX = 0;
// var touchStartY = 0;

// scene.addEventListener('touchstart', onTouchStart);
// scene.addEventListener('touchmove', onTouchMove);
// scene.addEventListener('touchend', onTouchEnd);

// function onTouchStart(event) {
//   touchStartX = event.touches[0].clientX;
//   touchStartY = event.touches[0].clientY;
// }

// function onTouchMove(event) {
//   var touchX = event.touches[0].clientX;
//   var touchY = event.touches[0].clientY;
  
//   var deltaX = touchX - touchStartX;
//   var deltaY = touchY - touchStartY;
  
//   // rotate entity
//   var currentRotation = entity.getAttribute('rotation');
//   var newX = currentRotation.x - deltaY / 2;
//   var newY = currentRotation.y - deltaX / 2;
//   var newZ = currentRotation.z;
//   console.log(newZ)
//   entity.setAttribute('rotation', {x: newX, y: newY, z: 0});
  
//   // update touch start position
//   touchStartX = touchX;
//   touchStartY = touchY;
// }

// function onTouchEnd(event) {
//     touchStartX = null;
//   touchStartY = null;
//   // cleanup code
// }


EightTouch.setup();
      var myEntity = document.getElementById('entity1');
      EightTouch.on('drag', myEntity, function(event) {
        myEntity.object3D.position.x += event.detail.deltaX;
        myEntity.object3D.position.y += event.detail.deltaY;
      });