import React from 'react';
import { Canvas } from '@react-three/fiber';

import Sky from '../Models/Sky';
import PopupDisclaimer from '../Components/PopupDisclaimer';


const Disclaimer = () => {
    return (
        <section className='w-full h-screen relative'> 
            <div className='absolute top-16 left-0 right-0 flex justify-center z-10'>
                <PopupDisclaimer/>
            </div>
            <Canvas>
                <Sky/> 
            </Canvas>
        </section>
    )
}

export default Disclaimer