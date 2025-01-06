import { ThreeElements } from '@react-three/fiber'
import { MeshDistortMaterialProps } from '@react-three/drei'

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements extends ThreeElements {
        meshDistortMaterial: MeshDistortMaterialProps;
      }
    }
  }
} 