import "./index.css";
import { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, PerspectiveCamera } from "@react-three/drei";

//shoes function
function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/shoe.gltf");
  return (
    <group ref={group} {...props} dispose={null} scale={3}>
      <mesh
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-color={"black"}
      />
      <mesh
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
        material-color={props.customModel.mesh}
      />
      <mesh
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-color={"white"}
      />
      <mesh
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-color={"white"}
      />
      <mesh
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-color={props.customModel.soul}
      />
      <mesh
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-color={props.customModel.stripes}
      />
      <mesh
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
        material-color={"white"}
      />
      <mesh
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-color={"white"}
      />
    </group>
  );
}

function App() {
  const [mesh, setMesh] = useState("#ffffff");
  const [stripes, setStripes] = useState("#ffffff");
  const [soul, setSoul] = useState("#ffffff");
  return (
    <div className="App">
      <div className="wrapper">
        <div className="card">
          <div className="product-canvas">
            <Canvas>
              <Suspense fallback={null}>
                <ambientLight />
                <spotLight
                  intensity={0.9}
                  angle={0.1}
                  penumbra={1}
                  position={[10, 15, 10]}
                  castShadow
                />
               
                <Model customModel={{ mesh, stripes, soul }} />
                <OrbitControls
                  enablePan={true}
                  enableZoom={true}
                  enableDamping={true}
                ></OrbitControls>
                <PerspectiveCamera makeDefault fov={60} position={[3, 7, 9]} />
               
              </Suspense>
            </Canvas>
          </div>
          <h2>Color chooser</h2>
          <div className="colors">
            <div>
              <input
                type="color"
                id="mesh"
                name="mesh"
                value="#e66465"
                onChange={(color) => setMesh(color.target.value)}
              />
              <label for="mesh">Mesh</label>
            </div>

            <div>
              <input
                type="color"
                id="stripes"
                name="stripes"
                value="#f6b73c"
                onChange={(color) => setStripes(color.target.value)}
              />
              <label for="stripes">Stripes</label>
            </div>
            <div>
              <input
                type="color"
                id="soul"
                name="soul"
                value="#f6b73c"
                onChange={(color) => setSoul(color.target.value)}
              />
              <label for="soul">Soul</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
