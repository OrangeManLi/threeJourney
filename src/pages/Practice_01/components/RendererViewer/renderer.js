import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import State from "three/examples/jsm/libs/stats.module";

import fileUrl from "./assets/falerw4.fbx";

// scence
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xe0e0e0);
scene.fog = new THREE.Fog(0xe0e0e0, 20, 100);

// ground
const meshGround = new THREE.Mesh(
  new THREE.PlaneGeometry(2000, 2000),
  new THREE.MeshPhongMaterial({ color: 0x999999, depthWrite: false })
);

meshGround.rotation.x = -Math.PI / 2;
scene.add(meshGround);

const gridGround = new THREE.GridHelper(200, 40, 0x000000, 0x000000);
gridGround.material.opacity = 0.2;
gridGround.material.transparent = true;
scene.add(gridGround);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(-5, 3, 10);
camera.lookAt(0, 2, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

camera.position.z = 5;

const controls = new OrbitControls(camera, renderer.domElement);

// 状态
let stats = new State();

// 灯光
const light = new THREE.AmbientLight(0x404040);
scene.add(light);
const light2 = new THREE.HemisphereLight(0xffffff, 0x444444);
light2.position.set(0, 20, 0);
scene.add(light2);

// 加载loader
const loader = new FBXLoader();
console.log("加载", fileUrl);
loader.load(fileUrl, (fbx) => {
  console.log("加载的了", fbx);
  fbx.position.set(0, 2, 2);
  fbx.scale.set(0.2, 0.2, 0.2);
  scene.add(fbx);
});

const mount = (dom) => {
  dom.appendChild(renderer.domElement);
  dom.appendChild(stats.dom);

  function onWindowResize() {
    camera.aspect = dom.innerWidth / dom.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(dom.innerWidth, dom.innerHeight);
  }

  window.addEventListener("resize", onWindowResize);
};

const animate = () => {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
  stats.update();

  requestAnimationFrame(animate);
};

export { animate, mount };
export default scene;
