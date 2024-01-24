import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Box } from '@react-three/drei';


import Sky from '../Models/Sky';
import PlaneGame from '../Components/PlaneGame';
import CustomCamera from '../Components/CustomCamera';

const HitTheSkies = () => {
    const [planeCoordinates, setPlaneCoordinates] = useState({ x: 0, y: 0, z: 0 });
    const [planeRotation, setPlaneRotation] = useState({ x: 0, y: 0, z: 0 });
    const [cameraCoordinates, setCameraCoordinates] = useState({ x: 0, y: 0, z: 0 });
    const [cameraRotation, setCameraRotation] = useState({ x: 0, y: 0, z: 0 });

    const updatePlaneCoordinates = (coordinates) => {
        setPlaneCoordinates(coordinates);
    };

    const updatePlaneRotation = (rotation) => {
        setPlaneRotation(rotation);
    };

    const updateCameraCoordinates = (coordinates) => {
        setCameraCoordinates(coordinates);
    };

    const updateCameraRotation = (rotation) => {
        setCameraRotation(rotation);
    };



    return (
        <div className='w-full h-96 w relative '>
            <Canvas className='w-full h-auto bg-transparent z-0'>
            <CustomCamera
                    centerPoint={planeCoordinates}
                    rotation={planeRotation}
                    onUpdateCoordinates={updateCameraCoordinates}
                    onUpdateRotation={updateCameraRotation}
                />
                <Sky />
                <ambientLight />
                <directionalLight />
                <pointLight />
                <spotLight />
                <hemisphereLight />
                <Box position={[0, 0, 0]} args={[1, 1, 1]} material-color="green" />
                <PlaneGame onUpdateCoordinates={updatePlaneCoordinates} onUpdateRotation={updatePlaneRotation} />
            </Canvas>
            <div>
                <p>Plane Coordinates: {`X: ${planeCoordinates.x}, Y: ${planeCoordinates.y}, Z: ${planeCoordinates.z}`}</p>
                <p>Camera Coordinates: {`X: ${cameraCoordinates.x}, Y: ${cameraCoordinates.y}, Z: ${cameraCoordinates.z}`}</p>
                <p>------------------------------------------------------------------------</p>
                <p>Plane Rotation: {`X: ${planeRotation.x}, Y: ${planeRotation.y}, Z: ${planeRotation.z}`}</p>
                <p>Camera Rotation: {`X: ${cameraRotation.x}, Y: ${cameraRotation.y}, Z: ${cameraRotation.z}`}</p>
            </div>
        </div>
    );
};

export default HitTheSkies;
