let moonTexture = new THREE.TextureLoader().load('textures/moon.jpg');
let planetGeometry = new THREE.SphereGeometry(10, 100, 100);

let planetMaterial = new THREE.MeshLambertMaterial({
        map: moonTexture,
        overdraw: 0.5
    });

let planet = new THREE.Mesh(planetGeometry, planetMaterial);

function addToScene(scene) {
    scene.add(planet);
}
