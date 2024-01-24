import React, { useRef } from 'react';
import { PerspectiveCamera} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const CustomCamera = ({ centerPoint, rotation, onUpdateCoordinates, onUpdateRotation }) => {

    const cameraRef = useRef();

    useFrame(() => {
        const targetRotation = rotation.y;

        const distanceFromPlane = 10; 
        const x = centerPoint.x + distanceFromPlane * Math.sin(targetRotation);
        const y = centerPoint.y + 2; 
        const z = centerPoint.z + distanceFromPlane * Math.cos(targetRotation);
    
        cameraRef.current.position.set(x, y, z); 
    
        const lookAtX = centerPoint.x - distanceFromPlane * Math.sin(targetRotation);
        const lookAtY = centerPoint.y + 2;
        const lookAtZ = centerPoint.z - distanceFromPlane * Math.cos(targetRotation);
    
        cameraRef.current.lookAt(lookAtX, lookAtY, lookAtZ);

        const currentPosition = cameraRef.current.position;
        const cameraCoordinates = { x: currentPosition.x, y: currentPosition.y, z: currentPosition.z };
        onUpdateCoordinates(cameraCoordinates);

        const currentRotation = cameraRef.current.rotation;
        const cameraRotation = { x: currentRotation.x, y: currentRotation.y, z: currentRotation.z };
        onUpdateRotation(cameraRotation);
    });


    
    return <PerspectiveCamera ref={cameraRef} makeDefault />;
}

export default CustomCamera