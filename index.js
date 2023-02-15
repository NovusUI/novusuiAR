

const startCameraButton = document.getElementById('startCamera');
const cameraContainer = document.getElementById('cameraContainer');

startCameraButton.addEventListener('click', function() {
  // Code to start the camera

  
});



  <a-scene  camera aspect-ratio="4:3" pov="50" embedded arjs arjs-debug="false">
    <a-marker id="marker1" type='pattern' url='./assets/images/pattern-images (1).patt'>
        <a-box position="0 1 0" rotation="0 45 0" color="#4CC3D9"></a-box>
      </a-marker>


         <a-marker id="marker2" type='pattern' url='./assets/images/pattern-IMG-20210419-WA0007.patt'>

           <a-box position="0 1 0" rotation="0 45 0" color="#5d612f"></a-box>

      </a-marker>

      
      <a-marker  id="marker3" type='pattern' url='./assets/images/pattern-061.patt'>

          <a-sphere position="0 1 0" radius="1.25" color="#5a70ad"></a-sphere>
      </a-marker>

      <a-marker id="marker4" type='pattern' url='./assets/images/pattern-06.patt'>

           <a-sphere position="0 1 0" radius="1.25" color="#EE4B2B"></a-sphere>
      </a-marker> 

      <a-entity camera></a-entity>

    </a-scene>



