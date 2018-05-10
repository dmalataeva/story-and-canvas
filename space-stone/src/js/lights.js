const Lights = function() {};

let lightAmbient = new THREE.AmbientLight(0xffffff, 0.1);

let lightDirectional = new THREE.DirectionalLight(0xffffff, 1);
lightDirectional.position.set(-10, 0, 5);

Lights.addToScene = function (scene) {
    scene.add(lightAmbient);
    scene.add(lightDirectional);
};

module.exports = Lights;
