import { Gameboy } from './Gameboy';
import { Canvas } from '@react-three/fiber';
import { XR, createXRStore } from '@react-three/xr';

const store = createXRStore();

function App() {
  return (
    <>
      <button onClick={() => store.enterAR()}>Enter AR</button>
      <Canvas>
        <XR store={store}>
          <Gameboy />
        </XR>
      </Canvas>
    </>
  );
}

export default App;
