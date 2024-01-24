import React from 'react'
import Obstacle from '../Models/Obstacle';

const ObstacleArray = ({ obstaclePositions }) => (
    <>
        <Obstacle position={obstaclePositions} />
    </>
);

export default ObstacleArray