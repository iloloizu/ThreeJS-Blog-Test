import React from 'react'
import './App.css';

//three.js
import {Canvas} from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Box from './Box';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
            <Canvas className='canvas' >
                <Box/>
                <ambientLight intensity={1}/>
                <directionalLight position={[-2,5,2]} intensity={1}/>
                <OrbitControls enableZoom={false} autoRotate={true}/>
            </Canvas>
        </p>
      </header>
    </div>
  );
}

export default App;
