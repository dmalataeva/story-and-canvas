const Stars = function() {};

Stars.particleCount = 100000;

let uniforms = {
    texture:   { value: new THREE.TextureLoader().load('textures/spark1.png') }
};

let shaderMaterial = new THREE.ShaderMaterial( {
    uniforms:       uniforms,
    vertexShader:   document.getElementById( 'vertexshader' ).textContent,
    fragmentShader: document.getElementById( 'fragmentshader' ).textContent,
    blending:       THREE.AdditiveBlending,
    depthTest:      false,
    transparent:    true,
    vertexColors:   true
});

let radius = 200;
Stars.particle = new THREE.BufferGeometry();
let positions = [];
let colors = [];
let sizes = [];
let color = new THREE.Color();

for ( var i = 0; i < Stars.particleCount; i ++ ) {
    positions.push( ( Math.random() * 2 - 1 ) * radius );
    positions.push( ( Math.random() * 2 - 1 ) * radius );
    positions.push( ( Math.random() * 2 - 1 ) * radius );
    color.setHSL( i / Stars.particleCount, 1.0, 0.5 );
    colors.push( color.r, color.g, color.b );
    sizes.push( 20 );;
}

Stars.particle.addAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ) );
Stars.particle.addAttribute( 'color', new THREE.Float32BufferAttribute( colors, 3 ) );
Stars.particle.addAttribute( 'size', new THREE.Float32BufferAttribute( sizes, 1 ).setDynamic( true ) );

Stars.particleSystem = new THREE.Points( Stars.particle, shaderMaterial );

Stars.addToScene = function(scene) {
    scene.add(Stars.particleSystem);
};

module.exports = Stars;
