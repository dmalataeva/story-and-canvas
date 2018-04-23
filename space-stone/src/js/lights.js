let lightAmbient = new THREE.AmbientLight(0xffffff, 0.1);

let lightDirectional = new THREE.DirectionalLight(0xffffff, 1);
lightDirectional.position.set(-10, 0, 5);

function addToScene(scene) {
    scene.add(lightAmbient);
    scene.add(lightDirectional);
}