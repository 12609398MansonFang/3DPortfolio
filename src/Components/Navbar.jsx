import React, { useRef , useEffect, useState} from 'react';
import { useRotation } from './RotationContext';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const { updateRotation } = useRotation();
    

    const handleNavLinkClick = (rotation) => {
        updateRotation(rotation);
    };

    const [isHome, setIsHome] = useState(true);

    const inDisclaimer = () => {
        setIsHome(false);
    };

    const inHomepage = () => {
        setIsHome(true);
    }


    return (
        <header className='header flex items-center justify-between'>
            <NavLink
                className='w-10 h-10 rounded-lg items-center justify-center flex shadow-xl font-bold bg-slate-300 hover:bg-slate-600 hover:text-white'
                onClick={inHomepage}
                to='/'                      
            >MF</NavLink>
            <div className='flex space-x-4'>
                <button 
                    className='font-bold text-black hover:text-slate-400 disabled:text-slate-400'
                    onClick={() => handleNavLinkClick([0,(0*Math.PI),0])}
                    disabled={!isHome}
                >
                    Home
                </button>
                <button 
                    className='font-bold text-black hover:text-slate-400 disabled:text-slate-400'
                    onClick={() => handleNavLinkClick([0,(1.6*Math.PI),0])}
                    disabled={!isHome}
                >
                    About Me
                </button>
                <button 
                    className='font-bold text-black hover:text-slate-400 disabled:text-slate-400'
                    onClick={() => handleNavLinkClick([0,(1.2*Math.PI),0])}
                    disabled={!isHome}
                >
                    Projects
                </button>
                <button 
                    className='font-bold text-black hover:text-slate-600 disabled:text-slate-400'
                    onClick={() => handleNavLinkClick([0,(0.8*Math.PI),0])}
                    disabled={!isHome}
                >
                    Work Experience
                </button>
                <button 
                    className='font-bold text-black hover:text-slate-600 disabled:text-slate-400'
                    onClick={() => handleNavLinkClick([0,(0.4*Math.PI),0])}
                    disabled={!isHome}
                >
                    Contact Me
                </button>
                
                <NavLink
                        className='font-bold text-black hover:text-slate-600'
                        onClick={inDisclaimer}
                        to='/disclaimer'
                    >
                        Disclaimer
                </NavLink>      
            </div>
        </header>
    )
}

export default Navbar;