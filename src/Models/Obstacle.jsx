import React from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';


import obstacleScene from '../Assets/GLB/Payload.glb'

const Obstacle = () => {
    const payload = useGLTF(obstacleScene)
    return (
        <mesh>
            <primitive object = {payload.scene}/>
        </mesh>
    )
}

export default Obstacle