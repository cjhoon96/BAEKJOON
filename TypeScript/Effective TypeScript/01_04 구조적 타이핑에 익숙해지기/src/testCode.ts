interface Vector2D {
  x: number;
  y: number;
}

function calcLength(v: Vector2D) {
  return Math.sqrt(v.x * v.x + v.y * v.y);
}

interface NamedVector {
  name: string;
  x: number;
  y: number;
}

const v: NamedVector = { x: 3, y: 4, name: "Zee" };

calcLength(v);

///////////////////////

interface Vector3D {
  x: number;
  y: number;
  z: number;
}

function normalize(v: Vector3D) {
  const length = calcLength(v);
  return {
    x: v.x / length,
    y: v.y / length,
    z: v.z / length,
  };
}

/////////////////////////

function calcLengthL1(v: Vector3D) {
  let length = 0;
  for (const axis of Object.keys(v)) {
    const coord = v[axis];
    length += Math.abs(coord);
  }
  return length;
}

const vec3d = {
  x: 3,
  y: 4,
  z: 1,
  address: "123 Broadway",
};

calcLengthL1(vec3d);
