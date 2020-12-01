const fov = 75;
const aspectRatio = window.innerWidth / window.innerHeight;
const nearClipping = 0.1;
const farClipping = 1000;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( fov, aspectRatio, nearClipping, farClipping );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry(3, 2, 1);
const material = new THREE.MeshBasicMaterial( { color: 0x5fff5f } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 5;

const controls = new THREE.OrbitControls( camera, renderer.domElement );

function update() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;
}

function render() {
    renderer.render( scene, camera );
}

function GameLoop() {
    requestAnimationFrame( GameLoop );
    update();
	render();
}

GameLoop();