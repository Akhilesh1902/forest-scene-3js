import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import ModelWrapper from "./Components/ModelWrapper"


function App() {
  return (
      
    <div className="App">
      <Canvas className="canvas" shadows={true} >
        <PerspectiveCamera position={[0, 3, 15]} makeDefault />
        <OrbitControls  enableZoom={false} enablePan={false}/>
        <ModelWrapper />
      </Canvas>
    </div>
  )
}

export default App
