var particleCount = 100000;

let uniforms = {
    texture:   { value: new THREE.TextureLoader().load('textures/spark1.png') }
};

var shaderMaterial = new THREE.ShaderMaterial( {
    uniforms:       uniforms,
    vertexShader:   document.getElementById( 'vertexshader' ).textContent,
    fragmentShader: document.getElementById( 'fragmentshader' ).textContent,
    blending:       THREE.AdditiveBlending,
    depthTest:      false,
    transparent:    true,
    vertexColors:   true
});

let radius = 200;
let particle = new THREE.BufferGeometry();
let positions = [];
let colors = [];
let sizes = [];
let color = new THREE.Color();

for ( var i = 0; i < particleCount; i ++ ) {
    positions.push( ( Math.random() * 2 - 1 ) * radius );
    positions.push( ( Math.random() * 2 - 1 ) * radius );
    positions.push( ( Math.random() * 2 - 1 ) * radius );
    color.setHSL( i / particleCount, 1.0, 0.5 );
    colors.push( color.r, color.g, color.b );
    sizes.push( 20 );;
}

particle.addAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ) );
particle.addAttribute( 'color', new THREE.Float32BufferAttribute( colors, 3 ) );
particle.addAttribute( 'size', new THREE.Float32BufferAttribute( sizes, 1 ).setDynamic( true ) );

let particleSystem = new THREE.Points( particle, shaderMaterial );

function addToScene(scene) {
    scene.add(particleSystem);
}

