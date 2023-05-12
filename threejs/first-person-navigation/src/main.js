import * as THREE from 'three';
import { OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';


// creating the scene
const scene = new THREE.Scene();

// creating and positioning the camera
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.x = 5; camera.position.y = 30;

// creating the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.shadowMap.enabled = true; // enable shadow rendering
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // choose shadow map type
document.body.appendChild( renderer.domElement );

 // adding light to the scene
 const light = new THREE.DirectionalLight({color: 0xFFFFFF, intensity: 100});
 light.position.set(1, 0, 0); // position the light
 scene.add(light);
 // adding light to the scene
 const ambientLight = new THREE.AmbientLight(0xffffff, 1);
 ambientLight.position.set(1, 0, 0); // position the light
 scene.add(ambientLight);

// -----------------------------------house----------------------------------------------

// Define the materials
const textureLoader = new THREE.TextureLoader();
const roofing = textureLoader.load('./senkess.jpg')
var roofMaterial = new THREE.MeshBasicMaterial({map: roofing});
const wall = textureLoader.load('./bric.jpg')
var wallMaterial = new THREE.MeshBasicMaterial({map: wall});
const door = textureLoader.load('./door.jpg')
var doorMaterial = new THREE.MeshBasicMaterial({map: door});
const stoop = textureLoader.load('./stoop.jpg')
var stepMaterial = new THREE.MeshBasicMaterial({map: stoop});
var windowMaterial = new THREE.MeshBasicMaterial({color: 0x8B4513});
const glass = textureLoader.load('./glass.jpg')
var glassMaterial = new THREE.MeshBasicMaterial({map: glass});
var glassMaterial1 = new THREE.MeshBasicMaterial({map: glass});
var glassMaterial2 = new THREE.MeshBasicMaterial({map: glass});
var glassMaterial3 = new THREE.MeshBasicMaterial({map: glass});
const tube = textureLoader.load('./steel.jpg')
var capMaterial = new THREE.MeshBasicMaterial({map: tube });
var chimneyMaterial = new THREE.MeshBasicMaterial({map: tube });
const toiletWall = textureLoader.load('./bric.jpg')
var toiletMaterial = new THREE.MeshBasicMaterial({map: toiletWall});
const toiletDoor = textureLoader.load('./doooor.jpg')
var toiletDoorMaterial = new THREE.MeshBasicMaterial({map: toiletDoor});
const toiletRoof= textureLoader.load('./r.jpg')
var toiletRoofMaterial = new THREE.MeshBasicMaterial({map: toiletRoof});

//------------------------------------------plane-------------------------------------------
const ground = textureLoader.load('./g.jpg')
var PlaneGeometry = new THREE.PlaneGeometry(40, 40);
var planeMaterial = new THREE.MeshStandardMaterial({map: ground});
var planeMesh = new THREE.Mesh(PlaneGeometry, planeMaterial);
planeMesh.rotation.x = -Math.PI / 2;
planeMesh.position.y = -1;
scene.add(planeMesh);
//-----------------------------------------------------------------------------------------

// Define the geometry for the roof
var roofGeometry = new THREE.ConeGeometry(3.5, 0.5, 4);

// Define the geometry for the walls
var wallGeometry = new THREE.BoxGeometry(3, 2, 4);

// Define the geometry for the house door
var doorGeometry = new THREE.BoxGeometry(2, 1.5, 1);

// Define the geometry for the doorstep
var stepGeometry = new THREE.BoxGeometry(2, 0.25, 1.2);

// Define the geometry for the house window
var windowGeometry = new THREE.BoxGeometry(2, 1, 1.5);

// Define the geometry for the house window glass
var glassGeometry = new THREE.BoxGeometry(0.4, 0.4, 0.6);

// Define the geometry for the house window glass
var glassGeometry1 = new THREE.BoxGeometry(0.4, 0.4, 0.6);

// Define the geometry for the house window glass
var glassGeometry2 = new THREE.BoxGeometry(0.4, 0.4, 0.6);

// Define the geometry for the house window glass
var glassGeometry3 = new THREE.BoxGeometry(0.4, 0.4, 0.6);

// // Define the geometry for the Chimney
var chimneyGeometry = new THREE.CylinderGeometry(0.2, 0.2, 1.5);

// Define the geometry for the chimney cap
var capGeometry = new THREE.CylinderGeometry(0, 0.25, 0.3);

// Define the geometry for the toilet-walls
var toiletGeometry = new THREE.BoxGeometry(2, 2, 2);

// Define the geometry for the toilet-door
var toiletDoorGeometry = new THREE.BoxGeometry(1.5, 1.9, 2.1);

// Define the geometry for the roof
var toiletRoofGeometry = new THREE.ConeGeometry(1.5, 2, 30);


// Create the roof mesh and position it on top of the walls
var roofMesh = new THREE.Mesh(roofGeometry, roofMaterial);
roofMesh.position.y = 1.25;
roofMesh.rotateY(48);
scene.add(roofMesh);

// Create the walls mesh and add it to the scene
var wallsMesh = new THREE.Mesh(wallGeometry, wallMaterial);
scene.add(wallsMesh);

// Create the house door mesh and add it to the scene
var doorMesh = new THREE.Mesh(doorGeometry, doorMaterial);
doorMesh.position.z = 1; doorMesh.position.x = 0.55; doorMesh.position.y = (-0.15);
scene.add(doorMesh);

// Create the doorstep mesh and add it to the scene
var stepMesh = new THREE.Mesh(stepGeometry, stepMaterial);
stepMesh.position.z = 1; stepMesh.position.x = 1.35; stepMesh.position.y = -1;
scene.add(stepMesh);

// Create the house window mesh and add it to the scene
var windowMesh = new THREE.Mesh(windowGeometry, windowMaterial);
windowMesh.position.z = -1; windowMesh.position.x = 0.55; windowMesh.position.y = 0.2;
scene.add(windowMesh);

// Create the house window glass mesh and add it to the scene
var glassMesh = new THREE.Mesh(glassGeometry, glassMaterial);
glassMesh.position.z = -1.38; glassMesh.position.x = 1.36; glassMesh.position.y = 0.45;
scene.add(glassMesh);

// Create the house window glass mesh and add it to the scene
var glassMesh1 = new THREE.Mesh(glassGeometry1, glassMaterial1);
glassMesh1.position.z = -0.65; glassMesh1.position.x = 1.36; glassMesh1.position.y = 0.45;
scene.add(glassMesh1);

// Create the house window glass mesh and add it to the scene
var glassMesh2 = new THREE.Mesh(glassGeometry2, glassMaterial2);
glassMesh2.position.z = -0.65; glassMesh2.position.x = 1.36; glassMesh2.position.y = -0.059;
scene.add(glassMesh2);

// Create the house window glass mesh and add it to the scene
var glassMesh3 = new THREE.Mesh(glassGeometry3, glassMaterial3);
glassMesh3.position.z = -1.39; glassMesh3.position.x = 1.36; glassMesh3.position.y = -0.059;
scene.add(glassMesh3);

var chimneyMesh = new THREE.Mesh(chimneyGeometry, chimneyMaterial);
chimneyMesh.position.set(1, 1, -1);
scene.add(chimneyMesh);

var capMesh = new THREE.Mesh(capGeometry, capMaterial);
capMesh.position.set(1, 1.9, -1);
scene.add(capMesh);

//---------------------------toilet-----------------------------------------------------------

var toiletMesh = new THREE.Mesh(toiletGeometry, toiletMaterial);
toiletMesh.position.set(-5, 0, -10);
scene.add(toiletMesh);

var toiletDoorMesh = new THREE.Mesh(toiletDoorGeometry, toiletDoorMaterial);
toiletDoorMesh.position.set(-5, 0, -10);
scene.add(toiletDoorMesh);

// Create the toilet roof mesh and position it on top of the walls
var toiletRoofMesh = new THREE.Mesh(toiletRoofGeometry, toiletRoofMaterial);
toiletRoofMesh.position.set(-5, 2, -10);
scene.add(toiletRoofMesh);

// -------------------------TREE------------------------------------
const trunkGeometry = new THREE.CylinderGeometry(0.2, 0.4, 2, 16);
const trunk = textureLoader.load('./trunk.jpg')
const trunkMaterial = new THREE.MeshBasicMaterial({ map: trunk });
const trunkMesh = new THREE.Mesh(trunkGeometry, trunkMaterial);

const foliageGeometry = new THREE.SphereGeometry(1, 15, 15);
const foliage = textureLoader.load('./grass.jpg')
const foliageMaterial = new THREE.MeshBasicMaterial({ map: foliage });
const foliageMesh = new THREE.Mesh(foliageGeometry, foliageMaterial);

foliageMesh.position.y = 1.5;
trunkMesh.add(foliageMesh);
trunkMesh.position.set(-6, 0, 6);
trunkMesh.castShadow = true; // enable shadow casting for the mesh
trunkMesh.receiveShadow = true; // enable shadow receiving for the mesh
scene.add(trunkMesh);

//---------------------------------- CAR---------------------------
function createWheels() {
   const geometry = new THREE.CylinderGeometry(8, 8, 34);
   const material = new THREE.MeshLambertMaterial({ color: 0x333333 });
   const wheel = new THREE.Mesh(geometry, material);
   wheel.rotation.x = -Math.PI / 2;
   return wheel;
 }
 function createRims() {
   const rimTxt = textureLoader.load('./rim.png')
   const geometry = new THREE.CylinderGeometry(6, 6, 34.5);
   const material = new THREE.MeshLambertMaterial({ map: rimTxt });
   const rim = new THREE.Mesh(geometry, material);
   rim.rotation.x = -Math.PI / 2;
   return rim;
 }

function createCar() {
   const car = new THREE.Group();
   
   const backWheel = createWheels();
   backWheel.position.y = 6;
   backWheel.position.x = -18;
   car.add(backWheel);
   
   const frontWheel = createWheels();
   frontWheel.position.y = 6;  
   frontWheel.position.x = 18;
   car.add(frontWheel);

   const backRim = createRims();
   backRim.position.y = 6;
   backRim.position.x = -18;
   car.add(backRim);
   
   const frontRim = createRims();
   frontRim.position.y = 6;  
   frontRim.position.x = 18;
   car.add(frontRim);

   const color = textureLoader.load('./car.jpg')
   const main = new THREE.Mesh(
     new THREE.BoxBufferGeometry(60, 15, 30),
     new THREE.MeshLambertMaterial({ map: color })
   );
   main.position.y = 12;
   car.add(main);
   
   const cabin = new THREE.Mesh(
     new THREE.BoxBufferGeometry(33, 12, 30),
     new THREE.MeshLambertMaterial({ map: color })
   );
   cabin.position.x = -13;
   cabin.position.y = 25.5;
   car.add(cabin);

   const sideWindow = new THREE.Mesh(
      new THREE.BoxBufferGeometry(28, 10, 30.5),
      new THREE.MeshLambertMaterial({ map: glass })
    );
    sideWindow.position.x = -13;
    sideWindow.position.y = 25;
    car.add(sideWindow);

   const slant = new THREE.Mesh(
      new THREE.BoxBufferGeometry(22, 15, 30),
      new THREE.MeshLambertMaterial({map: color})
   );
   slant.position.y = 19; slant.position.x = 8.8; slant.rotateZ(-10);
   car.add(slant);

   const carWindow = new THREE.Mesh(
      new THREE.BoxBufferGeometry(20, 15, 28),
      new THREE.MeshLambertMaterial({map: glass})
   );
   carWindow.position.y = 19.2; carWindow.position.x = 8.8; carWindow.rotateZ(-10);
   car.add(carWindow);


   car.scale.set(0.05, 0.05, 0.05);
   car.position.x = 7; car.position.y = -0.8; car.position.z = (4.5);

   return car;
 }
 
 const car = createCar();
 scene.add(car);


// creating the controls
const controls = new OrbitControls( camera, renderer.domElement );
scene.add(controls);

const controls2 = new PointerLockControls(camera, renderer.domElement);
let clock = new THREE.Clock();
scene.add(controls2.getObject());

document.addEventListener('click', () => {
  controls2.lock();
});

let keyboard = [];
addEventListener('keydown', (e)=>{
   keyboard[e.key] = true;
});
addEventListener('keyup', (e)=>{
   keyboard[e.key] = false;
});

function processKeyboard(delta){
   let speed = 5;
   let actualSpeed = speed * delta;
   if(keyboard["w"]){
      controls2.moveForward(actualSpeed);
   }
   if(keyboard["s"]){
      controls2.moveForward(-actualSpeed);
   }
   if(keyboard["a"]){
      controls2.moveRight(actualSpeed);
   }
   if(keyboard["d"]){
      controls2.moveRight(-actualSpeed);
   }
}


function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    let delta = clock.getDelta();
    processKeyboard(delta);
}
animate();
