import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei';

import planeScene from '../Assets/GLB/PlaneStill.glb'


const PlaneStill = () => {
    const planeRef = useRef();
    const { scene } = useGLTF(planeScene);

    return (
        <mesh ref={planeRef} position={[-0.3,-0.05,-1.2]} rotation={[0,0,0]}>
            <group scale={5}>
                <primitive object={scene}/>
            </group>
        </mesh>
    )
}

export default PlaneStill