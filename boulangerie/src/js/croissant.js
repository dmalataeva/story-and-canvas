const Moon = require('./moon.js');

import * as THREE from 'three';
import {THREE as CONTROLS} from './OrbitControls';

let renderer = new THREE.WebGLRenderer();

let scene = new THREE.Scene();

let camera = new THREE.PerspectiveCamera(100, window.innerWidth/window.innerHeight, 0.1, 1000);

let controls = new CONTROLS.OrbitControls(camera, renderer.domElement);

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
}

function animate() {
    requestAnimationFrame(animate);
    Moon.planetMesh.rotation.y += 0.005;

    render();
}

function render() {
    renderer.render(scene, camera);
}
