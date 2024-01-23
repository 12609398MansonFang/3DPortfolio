import React from 'react'
import { Canvas } from '@react-three/fiber';

import Sky from '../Models/Sky';
import GuessingGame from '../Components/GuessGame';

const ProtectTheCheese = () => {
    return (
        <div className='w-full h-screen relative'>
            <div className='flex justify-center absolute top-16 z-10 left-0 right-0'>
                <GuessingGame/>
            </div>
            <Canvas className='w-full h-screen'>
                <Sky/>
            </Canvas>      
        </div>
    )
}

export default ProtectTheCheese