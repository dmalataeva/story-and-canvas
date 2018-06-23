const Moon = function() {};

let texture = new THREE.TextureLoader().load('textures/moon.jpg');
let planetGeometry = new THREE.SphereGeometry(10, 100, 100);

let planetMaterial = new THREE.MeshLambertMaterial({
        map: texture,
        overdraw: 1.0,
        opacity: 1.0,
        transparent: false
    });

Moon.planetMesh = new THREE.Mesh(planetGeometry, planetMaterial);

Moon.addToScene = function (scene) {
    scene.add(Moon.planetMesh);
};

module.exports = Moon;
