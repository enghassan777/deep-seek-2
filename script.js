// إنشاء المشهد
const scene = new THREE.Scene();

// إضافة إضاءة
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 10, 10);
scene.add(light);

// إنشاء الشخصية (مكعب بسيط)
const characterGeometry = new THREE.BoxGeometry(1, 1, 1);
const characterMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const character = new THREE.Mesh(characterGeometry, characterMaterial);
character.position.set(0, 0, 0);
scene.add(character);

// إضافة الكاميرا
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// إضافة العارض
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('game-container').appendChild(renderer.domElement);

// تحريك الشخصية
function animate() {
    requestAnimationFrame(animate);
    character.rotation.x += 0.01;
    character.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();