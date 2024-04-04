/**This is my first project ever using three.js so i used a tutorial
 * Find the tutorial I used at: https://www.youtube.com/watch?v=Q7AOvWpIVHU&t=218s
 * Please bare with me, the documentation is quite extensive to allow me to understand and read back on the processes and code
 */

import './style.css';

/**import three.js library */
import * as THREE from 'three';

/** To start you need three objects: 
 * Scene 
 * Camera
 * Renderer
*/

//Scene is like a container to hold all objects, cameras and lights
const scene = new THREE.Scene();

//In order to view things inside the scene, you need a camera
//Multiple existing camera types, most common is perspective camera that mimics human eyeballs view
/**Arguements
 * 1: field of view based on 360 degrees
 * 2: aspect ratio (based off user's browser window)
 * 3, 4: view frustrum 
 */
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/windows.innerHeight, 0.1, 1000);

//Renderer to render the graphics (aka where the magic happens)
const renderer = new THREE.WebGLRenderer ({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( Window.innerWidth, window.innerHeight );
camera.position.setZ(30);

renderer.render( scene, camera );


const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 ); 
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); 
const torus = new THREE.Mesh( geometry, material ); 

scene.add( torus );


//Do not want to have to call the render method everytime for animation to appear, so here is a function that does that through recursion
function animate () {
  requestAnimationFrame( animate );
  renderer.render( scene, camera );
}

animate();