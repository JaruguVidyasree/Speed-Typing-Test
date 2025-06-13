document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    if (!email.includes("@")) {
        document.getElementById("formMsg").textContent = "Please enter a valid email.";
        return;
    }
    document.getElementById("formMsg").textContent = "Message sent!";
});

// 3D Model (spinning cube demo)
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.153.0/build/three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('3dCanvas')
});

renderer.setSize(window.innerWidth, 400);
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({
    color: 0x0077ff
});
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);
camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();