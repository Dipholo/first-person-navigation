

import * as THREE from "three";

const createWall = () => {
  return new THREE.Mesh(
    new THREE.BoxGeometry(50, 15, 1),
    new THREE.MeshBasicMaterial({ color: "#78909C" })
  );
};

export function walls() {
  const group = new THREE.Group();

  const wall1 = createWall();
  wall1.position.set(0, 0.75, -2.5);
  group.add(wall1);

  

  const wall3 = createWall();
  wall3.position.set(-2.5, 0.75, 0);
  wall3.rotation.y = 1.58;
  group.add(wall3);

  return group;
}
