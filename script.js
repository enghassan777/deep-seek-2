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
// إنشاء الجدران
const wallGeometry = new THREE.BoxGeometry(10, 5, 0.1);
const wallMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa });
const wall1 = new THREE.Mesh(wallGeometry, wallMaterial);
wall1.position.set(0, 0, -5);
scene.add(wall1);

// إنشاء الأرضية
const floorGeometry = new THREE.BoxGeometry(10, 0.1, 10);
const floorMaterial = new THREE.MeshBasicMaterial({ color: 0x777777 });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.position.set(0, -2.5, 0);
scene.add(floor);

// إنشاء الأبواب
const doorGeometry = new THREE.BoxGeometry(2, 4, 0.1);
const doorMaterial = new THREE.MeshBasicMaterial({ color: 0x8B4513 });
const door1 = new THREE.Mesh(doorGeometry, doorMaterial);
door1.position.set(-3, 0, 5);
scene.add(door1);
// تفاعل مع الأبواب
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

window.addEventListener('click', (event) => {
    // تحويل إحداثيات النقر إلى إحداثيات ثلاثية الأبعاد
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // تحديد الباب الذي تم النقر عليه
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects([door1]);

    if (intersects.length > 0) {
        const door = intersects[0].object;
        if (door === door1) {
            console.log("تم النقر على الباب 1");
            // الانتقال إلى الغرفة التالية
            moveToNextRoom();
        }
    }
});
// تفاعل مع الأبواب
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

window.addEventListener('click', (event) => {
    // تحويل إحداثيات النقر إلى إحداثيات ثلاثية الأبعاد
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // تحديد الباب الذي تم النقر عليه
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects([door1]);

    if (intersects.length > 0) {
        const door = intersects[0].object;
        if (door === door1) {
            console.log("تم النقر على الباب 1");
            // الانتقال إلى الغرفة التالية
            moveToNextRoom();
        }
    }
});
