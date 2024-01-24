import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useAnimations, useGLTF, Html, Sphere } from '@react-three/drei';
import * as THREE from 'three';

import planeScene from '../Assets/GLB/PlaneGame.glb'

const PlaneGame = ({ onUpdateCoordinates, onUpdateRotation }) => {
    const planeRef = useRef();
    const { scene, animations } = useGLTF(planeScene);

    const [elevation, setElevation] = useState(false)
    const [depression, setDepression] = useState(false)
    const [forward, setForward] = useState(false)
    const [backward, setBackward] = useState(false)
    const [right, setRight] = useState(false)
    const [left, setLeft] = useState(false)
    const [anticlockwise, setAntiClockwise] = useState(false)
    const [clockwise, setClockwise] = useState(false)
    
    const verticalSpeed = 0.02;
    const forwardSpeed = 0.08;
    const backwardSpeed = 0.009;
    const sideSpeed = 0.007;
    const yawSpeed = 0.0125;

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowUp') setElevation(true);
        if (e.key === 'ArrowDown') setDepression(true);
        if (e.key === 'w') setForward(true);
        if (e.key === 's') setBackward(true);
        if (e.key === 'a') setLeft(true);
        if (e.key === 'd') setRight(true);
        if (e.key === 'ArrowLeft') setAntiClockwise(true);
        if (e.key === 'ArrowRight') setClockwise(true);
    }
    
    const handleKeyUp = (e) => {
        if (e.key === 'ArrowUp') setElevation(false);
        if (e.key === 'ArrowDown') setDepression(false);
        if (e.key === 'w') setForward(false);
        if (e.key === 's') setBackward(false);
        if (e.key === 'a') setLeft(false);
        if (e.key === 'd') setRight(false);
        if (e.key === 'ArrowLeft') setAntiClockwise(false);
        if (e.key === 'ArrowRight') setClockwise(false);
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);    
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, []);
    
    useFrame(() => {
        if (elevation) planeRef.current.position.y += verticalSpeed;
        if (depression) planeRef.current.position.y -= verticalSpeed;

        if (forward) {
            const forwardVector = new THREE.Vector3(0, 0, -1);
            forwardVector.applyQuaternion(planeRef.current.quaternion);
            planeRef.current.position.add(forwardVector.multiplyScalar(forwardSpeed));
        }
        if (backward) {
            const backwardVector = new THREE.Vector3(0, 0, 1);
            backwardVector.applyQuaternion(planeRef.current.quaternion);
            planeRef.current.position.add(backwardVector.multiplyScalar(backwardSpeed));
        }
        if (right) {
            const rightVector = new THREE.Vector3(1, 0, 0);
            rightVector.applyQuaternion(planeRef.current.quaternion);
            planeRef.current.position.add(rightVector.multiplyScalar(sideSpeed));
        }  
        if (left) {
            const leftVector = new THREE.Vector3(-1, 0, 0);
            leftVector.applyQuaternion(planeRef.current.quaternion);
            planeRef.current.position.add(leftVector.multiplyScalar(sideSpeed));
        }

        if (anticlockwise) planeRef.current.rotation.y += yawSpeed;
        if (clockwise) planeRef.current.rotation.y -= yawSpeed;

        const planePosition = planeRef.current.position;
        const planeCoordinates = { x: planePosition.x, y: planePosition.y, z: planePosition.z };
        
        onUpdateCoordinates(planeCoordinates);

        const planeRotation = planeRef.current.rotation;
        const planePitchRollYaw = { x: planeRotation.x, y: planeRotation.y, z: planeRotation.z };
        onUpdateRotation(planePitchRollYaw);

    });

    return (
        <group>
            <mesh ref={planeRef} position={[0, 0, 0]}>
                <group scale={1}>
                    <primitive object={useGLTF(planeScene).scene} />
                </group>
            </mesh>
        </group>
    );
}

export default PlaneGame