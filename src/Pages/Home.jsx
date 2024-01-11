import { React, Suspense, lazy, useState} from 'react';
import { Canvas } from '@react-three/fiber';

import Popup from '../Components/Popup.jsx';
import Island from '../Models/Island.jsx';
import Sky from '../Models/Sky.jsx';
import { useRotation } from '../Components/RotationContext.jsx';

const Home = () => {
    const screenSize = () => {
        let scale = null;
        let position = [0,-1,0];

        if (window.innerWidth < 768){
            scale = [0.9, 0.9, 0.9];
        } else {
            scale = [1, 1, 1];
        }

        return [scale, position];
    }

    const [islandScale, islandPosition] = screenSize();
    const [isRotating, setIsRotating] = useState(false);

    const { rotation } = useRotation();

    const loadingScreen = () => {
        return (
            <div className='flex justify-center absolute top-28 z-10 left-0 right-0'>Loading...</div>
        )
    }

    return (
        <div className='w-full h-screen relative'>
            <Suspense fallback={loadingScreen()}>
                    <div className='flex justify-center absolute top-28 z-10 left-0 right-0'>
                        <Popup Angle={rotation}/>
                    </div>

                    <Canvas
                        className={`w-full h-screen bg-transparent z-0 ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                        camera={{near:0.1, far:1000}}
                    >
                        <ambientLight/>
                        <directionalLight/>
                        <pointLight/>
                        <spotLight/>
                        <hemisphereLight/>
                        <Island
                            isRotating={isRotating}
                            setIsRotating={setIsRotating}
                            position={islandPosition}
                            rotation={rotation}
                            scale={islandScale}
                        />
                        <Sky/>
                    </Canvas>
            </Suspense>
        </div>
    )
}

export default Home