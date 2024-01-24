import React, { useEffect, useRef } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';

import planeScene from '../Assets/GLB/Plane.glb'

const Plane = () => {
    const planeRef = useRef();
    const { scene, animations } = useGLTF(planeScene);
    const { actions } = useAnimations(animations, planeRef);

    useEffect(()=>{
        actions['PlaneAction'].play();
        actions['Cube.009Action'].play();
        actions['Cube.003Action'].play();        
    }, []);   


    return (
        <mesh ref={planeRef} position={[-0.3,1.2,-0.2]} rotation={[1.5,0,0]}>
            <group scale={5}>
                <primitive object={scene}/>
            </group>
        </mesh>
        )
    }

export default Plane;