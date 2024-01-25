import { React, Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useProgress } from '@react-three/drei';

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

    const [Progress, setProgress] = useState(0);


    const handleProgress = (value) => {
            setProgress(value);
    };

    const loadingScreen = () => {
        return (
            <div className='flex justify-center absolute top-16 z-10 left-0 right-0'>

                <div className='LoadingContainer min-w-80 bg-transparent flex flex-col'>
                    <div className='LoadingTab grid grid-cols-3 p-1 rounded-t-md'></div>
                    <div className='flex flex-col items-center'>
                        <div className='LoadingMain w-full max-w-screen-md bg-slate-200 bg-opacity-80 p-2'>
                            <div className='flex flex-col items-center justify-center'>                            
                                <h3 className='LoadingTitle text-md font-bold mx-auto'>Loading</h3>
                                <p className='LoadingContent text-sm text-center pt-2'>Getting Assets: {Math.abs(Progress-1)}%</p>
                                <p className='LoadingContent text-sm text-center pt-2'>Estimated Time: 30 Seconds - 2 Minutes</p>                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='w-full h-screen relative'>
            
            <Suspense fallback={loadingScreen()}>
                    <div className='flex justify-center absolute top-16 z-10 left-0 right-0'>
                        <Popup Angle={rotation} Progress={Progress} />
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
                        <Sky/>
                        <Island
                            isRotating={isRotating}
                            setIsRotating={setIsRotating}
                            position={islandPosition}
                            rotation={rotation}
                            scale={islandScale}
                            onProgress={(value) => handleProgress(value)}
                        />
                    </Canvas>

            </Suspense>        
            
        </div>
    )
}

export default Home