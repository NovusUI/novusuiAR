// Get the A-Frame scene
var scene = document.querySelector('a-scene');

// Get the entities that will be rotated on touch
var entity1 = document.querySelector('#entity1');
var entity2 = document.querySelector('#entity2');
// var entity3 = document.querySelector('#entity3');
var entity4 = document.querySelector('#entity4');

// Add event listeners for touch events on the scene
scene.addEventListener('touchstart', onTouchStart);
scene.addEventListener('touchmove', onTouchMove);
scene.addEventListener('touchend', onTouchEnd);

// Initialize variables to store touch position and entity rotation
let touchX;
let touchY;
let touchZ;
let entityRotation;

// Function to handle touchstart event
function onTouchStart(event) {
  console.log('touch start')
  // Store touch position
  touchX = event.touches[0].pageX;
  touchY = event.touches[0].pageY;

  // Get the current rotation of the entity to be rotated
  entityRotation = entity1.getAttribute('rotation');
}

// Function to handle touchmove event
function onTouchMove(event) {
  console.log('touchmove')
  // Calculate the change in touch position
  var deltaX = event.touches[0].pageX - touchX;
  var deltaY = event.touches[0].pageY - touchY;
  var deltaZ = event.touches[0].pageY - touchY;

  // Calculate the new rotation for the entity
  var newRotation = {
      x: entityRotation.x + deltaY * 0.3,
      y: entityRotation.y + deltaX * 0.3,
      z: entityRotation.z + deltaZ * 0.3,
  };
  
  // Set the new rotation for the entity
  entity1.setAttribute('rotation', newRotation);
  console.log('newRotation', newRotation);
}

// Function to handle touchend event
function onTouchEnd(event) {
  // Do any necessary cleanup
}