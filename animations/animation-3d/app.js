// Variables for setup

let container;
let camera;
let renderer;
let scene;
let house;

function init() {
    container = document.querySelector('.scene');

    // Create scene

    scene = new THREE.Scene();
    const fov = 35;
    const aspect = container.clientWidth / container.clientHeight;
    const near = 0.1;
    const far = 500;

    // Camera Setup

    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    if(container.clientWidth > 1200) {
        camera.position.set(-8, 3, 25);
    } else {
        camera.position.set(-4, 3, 25);
    }
    

    const ambient = new THREE.AmbientLight(0x404040, 3);
    scene.add(ambient);

    const light = new THREE.DirectionalLight(0xffffff, 3);
    light.position.set(10, 10, 10);
    scene.add(light);


    // Renderer
    renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(renderer.domElement);


    // Load model

    let loader = new THREE.GLTFLoader();
    loader.load('./3d/scene.gltf', function (gltf) {
        scene.add(gltf.scene);
        house = gltf.scene.children[0];
        animate();
    });
}

function animate() {
    requestAnimationFrame(animate);
    house.rotation.z += 0.005;
    house.rotation.x = 30;
    house.rotation.Y = 30;
    renderer.render(scene, camera);
}

init();

function onWindowResize() {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener('resize', onWindowResize);