import React, { useRef } from 'react';
import { useLoader, useThree } from '@react-three/fiber';
import { useAnimations } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { Group } from 'three';

interface GameboyProps extends React.PropsWithChildren<{}> {}

function Gameboy(props: GameboyProps) {
  const group = useRef<Group>(null);
  const { gl } = useThree();

  // Create and configure the loaders
  const ktx2Loader = new KTX2Loader()
    .setTranscoderPath('/basis/')
    .detectSupport(gl);

  const dracoLoader = new DRACOLoader().setDecoderPath(
    'https://www.gstatic.com/draco/v1/decoders/'
  );

  const gltfLoader = new GLTFLoader();
  gltfLoader.setKTX2Loader(ktx2Loader);
  gltfLoader.setDRACOLoader(dracoLoader);

  // Register the loaders before using useLoader
  GLTFLoader.prototype.setKTX2Loader.call(gltfLoader, ktx2Loader);
  GLTFLoader.prototype.setDRACOLoader.call(gltfLoader, dracoLoader);

  const { nodes, materials, animations } = useLoader(
    GLTFLoader,
    '/gameboy.glb',
    (loader: GLTFLoader) => {
      loader.setKTX2Loader(ktx2Loader);
      loader.setDRACOLoader(dracoLoader);
    }
  );

  useAnimations(animations, group);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <group
          name='ctrl_gameboy_grey001'
          rotation={[3.116, -0.089, 2.863]}
          scale={[0.015, 0.05, 0.031]}>
          <mesh
            name='Cube005'
            castShadow
            receiveShadow
            geometry={(nodes as any).Cube005.geometry}
            material={materials['mat_black.001']}
            position={[-0.811, 0.164, -0.171]}
            rotation={[-3.132, 0.142, 2.732]}
            scale={[63.125, 26.213, 33.013]}
          />
          <mesh
            name='obj_battery_cover006'
            castShadow
            receiveShadow
            geometry={(nodes as any).obj_battery_cover006.geometry}
            material={materials['mat_battery_door_grey.001']}
            scale={[65.67, 19.925, 32.436]}
          />
          <mesh
            name='obj_battery_plate006'
            castShadow
            receiveShadow
            geometry={(nodes as any).obj_battery_plate006.geometry}
            material={materials['mat_buttons2.001']}
            scale={[65.67, 19.925, 32.436]}
          />
          <mesh
            name='obj_button_a006'
            castShadow
            receiveShadow
            geometry={(nodes as any).obj_button_a006.geometry}
            material={materials['mat_buttons_default_dark2.001']}
            scale={[65.67, 19.925, 32.436]}
          />
          <mesh
            name='obj_button_b006'
            castShadow
            receiveShadow
            geometry={(nodes as any).obj_button_b006.geometry}
            material={materials['mat_buttons_default_dark2.001']}
            position={[0, 0.084, -0.293]}
            scale={[65.67, 19.925, 32.436]}
          />
          <mesh
            name='obj_button_startselect006'
            castShadow
            receiveShadow
            geometry={(nodes as any).obj_button_startselect006.geometry}
            material={materials['mat_buttons_default_dark2.001']}
            scale={[65.67, 19.925, 32.436]}
          />
          <mesh
            name='obj_contrast_wheel006'
            castShadow
            receiveShadow
            geometry={(nodes as any).obj_contrast_wheel006.geometry}
            material={materials['mat_pcb_front.001']}
            scale={[65.67, 19.925, 32.436]}
          />
          <mesh
            name='obj_dpad006'
            castShadow
            receiveShadow
            geometry={(nodes as any).obj_dpad006.geometry}
            material={materials['mat_buttons_default_dark2.001']}
            scale={[65.67, 19.925, 32.436]}
          />
          <mesh
            name='obj_housing_front006'
            castShadow
            receiveShadow
            geometry={(nodes as any).obj_housing_front006.geometry}
            material={materials['mat_housing_front_grey.001']}
            scale={[65.67, 19.925, 32.436]}
          />
          <mesh
            name='obj_housing_rear006'
            castShadow
            receiveShadow
            geometry={(nodes as any).obj_housing_rear006.geometry}
            material={materials.mat_housing_rear_grey}
            scale={[65.67, 19.925, 32.436]}
          />
          <mesh
            name='obj_led010'
            castShadow
            receiveShadow
            geometry={(nodes as any).obj_led010.geometry}
            material={materials['mat_led_light.002']}
            position={[0.179, 0.005, 0.001]}
            rotation={[0, 0, -0.407]}
            scale={[63.401, 26.267, 32.436]}
          />
          <mesh
            name='obj_led011'
            castShadow
            receiveShadow
            geometry={(nodes as any).obj_led011.geometry}
            material={materials['mat_led.001']}
            position={[0.179, 0.005, 0.001]}
            rotation={[0, 0, -0.407]}
            scale={[63.401, 26.267, 32.436]}
          />
          <mesh
            name='obj_pcb_bottom006'
            castShadow
            receiveShadow
            geometry={(nodes as any).obj_pcb_bottom006.geometry}
            material={materials['mat_pcb_rear.001']}
            scale={[65.67, 19.925, 32.436]}
          />
          <mesh
            name='obj_pcb_bottom_capacitors006'
            castShadow
            receiveShadow
            geometry={(nodes as any).obj_pcb_bottom_capacitors006.geometry}
            material={materials['mat_pcb_rear.001']}
            scale={[65.67, 19.925, 32.436]}
          />
          <mesh
            name='obj_power_switch006'
            castShadow
            receiveShadow
            geometry={(nodes as any).obj_power_switch006.geometry}
            material={materials['mat_buttons_default.001']}
            scale={[65.67, 19.925, 32.436]}
          />
          <mesh
            name='obj_volume_wheel006'
            castShadow
            receiveShadow
            geometry={(nodes as any).obj_volume_wheel006.geometry}
            material={materials['mat_pcb_rear.001']}
            scale={[65.67, 19.925, 32.436]}
          />
          <group name='obj_window011' scale={[65.67, 19.925, 32.436]}>
            <mesh
              name='geo_window003'
              castShadow
              receiveShadow
              geometry={(nodes as any).geo_window003.geometry}
              material={materials['mat_screen_default.001']}
            />
            <mesh
              name='geo_window003_1'
              castShadow
              receiveShadow
              geometry={(nodes as any).geo_window003_1.geometry}
              material={materials['mat_grey.001']}
            />
          </group>
          <group name='obj_window012' scale={[65.67, 19.925, 32.436]}>
            <mesh
              name='geo_window004'
              castShadow
              receiveShadow
              geometry={(nodes as any).geo_window004.geometry}
              material={materials['mat_screen_default_dark.001']}
            />
            <mesh
              name='geo_window004_1'
              castShadow
              receiveShadow
              geometry={(nodes as any).geo_window004_1.geometry}
              material={materials['mat_grey.001']}
            />
          </group>
          <mesh
            name='uploads_files_243078_screw22030'
            castShadow
            receiveShadow
            geometry={(nodes as any).uploads_files_243078_screw22030.geometry}
            material={materials['mat_silver.001']}
            position={[0.276, -0.586, 0.556]}
            rotation={[2.249, 1.531, -0.653]}
            scale={[0.018, 0.029, 0.059]}
          />
          <mesh
            name='uploads_files_243078_screw22031'
            castShadow
            receiveShadow
            geometry={(nodes as any).uploads_files_243078_screw22031.geometry}
            material={materials['mat_silver.001']}
            position={[0.274, -0.456, -0.545]}
            rotation={[2.249, 1.531, -0.653]}
            scale={[0.018, 0.029, 0.059]}
          />
        </group>
      </group>
    </group>
  );
}

export { Gameboy };
