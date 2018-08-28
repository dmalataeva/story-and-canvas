const Moon = require('./moon.js');
const Stars = require('./stars.js');
const Lights = require('./lights.js');
const Audio = require('./audio.js');

let renderer = new THREE.WebGLRenderer();

let scene = new THREE.Scene();

let camera = new THREE.PerspectiveCamera(100, window.innerWidth/window.innerHeight, 0.1, 1000);

let controls = new THREE.OrbitControls(camera, renderer.domElement);

initializeWindow();
animate();
Audio.initialize();

function initializeWindow() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio( window.devicePixelRatio );

    document.body.appendChild(renderer.domElement);

    controls.addEventListener('change', render);
    camera.position.z = 20;

    Moon.addToScene(scene);
    Stars.addToScene(scene);
    Lights.addToScene(scene);
}

function animate() {
    requestAnimationFrame(animate);
    Moon.planetMesh.rotation.y += 0.005;

    render();
}

function render() {
    let time = Date.now() * 0.005;
    Stars.particleSystem.rotation.z = 0.01 * time;
    let sizes = Stars.particle.attributes.size.array;
    for (let i = 0; i < Stars.particleCount; i++) {
        sizes[ i ] = 10 * ( 1 + Math.sin( 0.1 * i + time ) );
    }
    Stars.particle.attributes.size.needsUpdate = true;

    renderer.render(scene, camera);
}
