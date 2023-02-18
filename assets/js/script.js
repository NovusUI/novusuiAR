// Get the <a-entity> element that contains the model
var modelEl = document.querySelector('#entity3');

// Initialize variables to store the initial touch position and the current rotation
var initialX = 0;
var currentRotation = {x: 0, y: 0, z: 0};

// Add an event listener to the document object that listens for touch start events
document.addEventListener('touchstart', function(event) {
  // Get the X coordinate of the touch start event
  initialX = event.touches[0].clientX;
});

// Add an event listener to the document object that listens for touch move events
document.addEventListener('touchmove', function(event) {
  // Get the X coordinate of the touch move event
  var x = event.touches[0].clientX;

  // Calculate the rotation angle based on the touch move distance
  var rotationAngle = (x - initialX) * 0.5;

  // Update the Y rotation of the <a-entity> element based on the rotation angle
  currentRotation.y += rotationAngle;
  modelEl.setAttribute('rotation', currentRotation);
});

