document.addEventListener('DOMContentLoaded', () => {
  const model = document.getElementById('animated-model');

  // Load the 3D model using GLTFLoader
  const loader = new THREE.GLTFLoader();
  loader.load('assets/animation.glb', (gltf) => {
    if (gltf && gltf.scene) {
      model.object3D.add(gltf.scene); // Add the loaded model to the AR marker
      console.log('3D model loaded successfully!');
    } else {
      console.error('Error: GLTF model is missing or invalid.');
    }
  }, undefined, (error) => {
    console.error('Error loading 3D model:', error);
  });
});
