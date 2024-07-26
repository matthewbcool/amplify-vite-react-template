declare module 'Gameboy' {
  const Gameboy: any;

  export default Gameboy;
}
declare module 'three/examples/jsm/loaders/GLTFLoader' {
  import { Loader, LoadingManager, Group } from 'three';
  import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader';
  import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

  export class GLTFLoader extends Loader {
    constructor(manager?: LoadingManager);
    load(
      url: string,
      onLoad: (gltf: GLTF) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (event: ErrorEvent) => void
    ): void;
    setKTX2Loader(ktx2Loader: KTX2Loader): this;
    setDRACOLoader(dracoLoader: DRACOLoader): this;
  }

  export interface GLTF {
    scene: Group;
    scenes: Group[];
    animations: any[];
    asset: any;
  }
}

declare module 'three/examples/jsm/loaders/KTX2Loader' {
  import { Loader, LoadingManager } from 'three';

  export class KTX2Loader extends Loader {
    constructor(manager?: LoadingManager);
    setTranscoderPath(path: string): this;
    detectSupport(renderer: any): this;
  }
}

declare module 'three/examples/jsm/loaders/DRACOLoader' {
  import { Loader, LoadingManager } from 'three';

  export class DRACOLoader extends Loader {
    constructor(manager?: LoadingManager);
    setDecoderPath(path: string): this;
  }
}
