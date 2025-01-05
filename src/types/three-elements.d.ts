import { Object3DNode } from '@react-three/fiber'

declare module '@react-three/fiber' {
  interface ThreeElements {
    ambientLight: Object3DNode<THREE.AmbientLight, typeof THREE.AmbientLight>
    pointLight: Object3DNode<THREE.PointLight, typeof THREE.PointLight>
    color: { args: [color: string] }
  }
} 