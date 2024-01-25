import React from 'react';
import { useGLTF } from '@react-three/drei';

import soldierScene from '../Assets/GLB/Soldiers.glb';
import { useRef } from 'react';

const Soldier = () => {
    const soldierRef = useRef();
    const soldier = useGLTF(soldierScene)
    return (
        <mesh ref={soldierRef} position={[-0.25,0,-1.1]} rotation={[0,0,0]} scale={5.5}>
            <primitive object = {soldier.scene}/>
        </mesh>
    )
}

export default Soldier