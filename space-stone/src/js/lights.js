const Lights = function() {};

let lightAmbient = new THREE.AmbientLight(0xffffff, 0.1);

let lightDirectionalBlue = new THREE.DirectionalLight(0xccffff, 1);
let lightDirectionalWhite = new THREE.DirectionalLight(0xffffff, 0.8);

lightDirectionalBlue.position.set(-10, 0, 5);
lightDirectionalWhite.position.set(-10, 10, 5);

Lights.addToScene = function (scene) {
    scene.add(lightAmbient);
    scene.add(lightDirectionalBlue);
    scene.add(lightDirectionalWhite);
};

module.exports = Lights;
