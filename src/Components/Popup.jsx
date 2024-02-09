import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../Assets/JSON/Data.json';
import logo from '../Assets/Images/utslogo.png';
import Contact from './Contact';
import Resume from '../Assets/Documents/MansonFangResume.pdf';
import LinkedInLogo from '../Assets/Images/LinkedInLogo.png';
import GithubLogo from '../Assets/Images/GithubLogo.png';
import Portraitimg from '../Assets/Images/home.jpeg';
import Drag from '../Assets/Images/draginstructions.png';
import Workimg from '../Assets/Images/experience.jpg';
import Project1 from '../Assets/Images/ProjectImage1.png';
import Project2 from '../Assets/Images/ProjectImage2.jpg';
import Project3 from '../Assets/Images/ProjectImage3.png';
import Project4 from '../Assets/Images/ProjectImage4.png';


const Popup = ({Angle}) => 
{
    const [showAboutMeContent, setShowAboutMeContent] = useState(false);
    const [showProjectsContent, setShowProjectsContent] = useState(false);
    const [showWorkContent, setShowWorkContent] = useState(false);
    const [showContactContent, setShowContactContent] = useState(false);

    const getAngle = () => {
        const normalAngle = ((Angle[1] % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
        return normalAngle;
    }

    let currentAngle = getAngle();

    const getStage = () => {
        let stage;
        if (currentAngle >= 0 && currentAngle < 0.2 * Math.PI || currentAngle >= 1.8 * Math.PI && currentAngle < 2 * Math.PI) {
            stage = 1;
        } else if (currentAngle >= 0.2 * Math.PI && currentAngle < 0.6 * Math.PI) {
            stage = 5;
        } else if (currentAngle >= 0.6 * Math.PI && currentAngle < 1.0 * Math.PI) {
            stage = 4;
        } else if (currentAngle >= 1.0 * Math.PI && currentAngle < 1.4 * Math.PI) {
            stage = 3;
        } else if (currentAngle >= 1.4 * Math.PI && currentAngle < 1.8 * Math.PI) {
            stage = 2;
        } else {
            stage = null;
        }
        return stage;
    }

    let currentStage = getStage();

    useEffect(() => {
        setShowAboutMeContent(false);
        setShowProjectsContent(false);
        setShowWorkContent(false);
        setShowContactContent(false);
    }, [currentStage]);

    const getTitle = () => {
        if (currentStage === 1){
            return (
                'Home'
            )
        } else if (currentStage === 2){
            return (
                'About Me'
            )
        } else if (currentStage === 3){
            return (
                'Projects'
            )
        } else if (currentStage === 4){
            return (
                'Work Experience'
            )
        } else {
            return (
                'Contact Me'
            )
        }
    }

    
    const getContent = () => {
        if (currentStage === 1){
            return (
                data.home[0].content
            )
        } else if (currentStage === 2){
            return (
                data.aboutme[0].content
            )
        } else if (currentStage === 3){
            return (
                    data.projects[0].content
            )
        } else if (currentStage === 4){
            return (
                <div className='WorkLandingContent flex flex-col items-center'>
                    <img src={Workimg} alt='Drag' className='w-48 h-42 p-2'/>
                    {data.work[0].content}
                </div>   
            )
        } else {
            return (
                data.contact[0].content
            )
        }
    }

    const resumeDownload = () => {
        const download = Resume;

        const link = document.createElement('a')
        link.href = download;
        link.target = '_blank';
        link.download = 'MansonResume.pdf';

        link.click();
    }

    const linkedin = () => {
        const link = document.createElement('a')
        link.href = 'https://au.linkedin.com/in/manson-fang-6687a1293'
        link.target = '_blank';
        link.click();
    }

    const gitHub = () => {
        const link = document.createElement('a')
        link.href = 'https://github.com/12609398MansonFang/3DPortfolio'
        link.target = '_blank';
        link.click();
    }

    const Instruction = () => {
        return (
            <img src={Drag} alt='Drag' className='w-5 h-5'/>
        )
    }

    const projectGitLink1 = () => {
        const link = document.createElement('a')
        link.href = 'https://github.com/12609398MansonFang/3DSlots'
        link.target = '_blank';
        link.click();
    }

    const projectGitLink2 = () => {
        const link = document.createElement('a')
        link.href = 'https://github.com/12609398MansonFang/ProtectTheCheese'
        link.target = '_blank';
        link.click();
    }

    const getButton = (currentStage) => {
        if (currentStage === 1){
            return (
                <div>
                    <div className='flex items-center justify-center'>
                        <img src={Portraitimg} className='w-36 h-36'/>
                    </div>
                    <div className='flex space-x-6 p-2 justify-center'>
                        <button
                            className={`w-8 h-8 p-1 text-sm items-center justify-center flex font-bold text-white bg-black hover:rounded-lg hover:border-slate-300 hover:border-2`}
                            onClick={resumeDownload}
                        >
                            CV
                        </button>
                        <button
                            className={`items-center justify-center flex`}
                            onClick={linkedin}
                        >
                            <img src={LinkedInLogo} alt='LinkedIn' className='w-8 h-8 hover:rounded-lg hover:border-slate-300 hover:border-2'/>
                        </button>
                        <button
                            className={`items-center justify-center flex`}
                            onClick={gitHub}
                        >
                            <img src={GithubLogo} alt='Github' className='w-8 h-8 hover:rounded-lg hover:border-slate-600 hover:border-2'/>
                        </button>    
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='text-sm'>Click on the Island Below and Drag Below</p>
                        <Instruction/>   
                    </div>                                  
                </div>
            )
        }else if (currentStage === 2){
            return (
                <button
                    className={`w-24 h-10 p-1 text-sm rounded-lg items-center justify-center flex border bg-slate-300 hover:bg-slate-400 ${showAboutMeContent ? 'bg-slate-400' : ''}`}
                    onClick={() => setShowAboutMeContent(!showAboutMeContent)}
                >
                    {showAboutMeContent ? 'About Me' : 'About Me'}
                    
                </button>
            )
        } else if (currentStage === 3){
            return (
                <button
                    className={`w-24 h-10 p-1 text-sm rounded-lg items-center justify-center flex border bg-slate-300 hover:bg-slate-400 ${showProjectsContent ? 'bg-slate-400' : ''}`}
                    onClick={() => setShowProjectsContent(!showProjectsContent)}
                >
                    {showProjectsContent ? 'Projects' : 'Projects'}
                </button>
            )
        } else if (currentStage === 4){
            return (
                <button
                    className={`w-auto h-10 p-1 text-sm rounded-lg items-center justify-center flex border bg-slate-300 hover:bg-slate-400 ${showWorkContent ? 'bg-slate-400' : ''}`}
                    onClick={() => setShowWorkContent(!showWorkContent)}
                >
                    {showWorkContent ? 'Work Experience' : 'Work Experience'}
                </button>
            )
        } else if (currentStage === 5){
            return (
                <button
                    className={`w-24 h-10 p-1 text-sm rounded-lg items-center justify-center flex border bg-slate-300 hover:bg-slate-400 ${showContactContent ? 'bg-slate-400' : ''}`}
                    onClick={() => setShowContactContent(!showContactContent)}
                >
                    {showContactContent ? 'Contact Me' : 'Contact Me'}
                </button>
            );
        } else {
            return (null)
                
        };
    }

    const aboutMeButton = () => {
        if(showAboutMeContent){
            return (
                <div className='aboutMeContainer grid grid-cols-3 p-2'>
                    <div className='Icon col-span-1'>
                        <img src={logo} alt='Logo' className='w-30 h-30'></img>
                    </div>
                    <div className='Contents col-span-2'>
                        <h2 className='Institution font-bold'>University of Technology, Sydney</h2>
                        <p className='Course'>Bachelor of Engineering Majoring Mechanical and Mechatronic Engineering with Diploma in Professional Practice</p>
                        <p className='Duration font-bold'>03/2016 - 09/2022</p>
                    </div>
                </div>

            )
        } else {
            return null;
        }
    }

    const projectsButton = () => {
        if(showProjectsContent){
            return (
                <div className='projectsContainer flex p-2 space-x-2'>

                    <div className='Project1 bg-slate-100 opacity-80 p-2 max-w-52 rounded-md'>
                        <div className='Project1Content flex flex-col'>
                            <h2 className='ProjectName font-bold row-span-1 text-sm'>{data.projects[0].project4[0].projectname}</h2>
                            <p className='ProjectDescription row-span-2 text-xs'>{data.projects[0].project4[0].description}</p>
                        </div>
                        <div className='Project1Visuals col-span-1 flex flex-col items-center py-2'>
                            <img src={Project4} alt='Logo' className='row-span-2 w-52 rounded-md'></img>
                            <div className='space-x-2'>
                                <button 
                                    className='row-span-1 bg-slate-300 mt-2 p-2 rounded-md text-sm hover:bg-slate-400'   
                                >
                                    <Link to='/slots'>Play Game</Link>                      
                                </button>
                                <button 
                                    className='row-span-1 bg-slate-300 mt-2 p-2 rounded-md text-sm hover:bg-slate-400'
                                    onClick={projectGitLink1}
                                >
                                    GitHub                         
                                </button>
                            </div>
                        </div>      
                    </div>

                    <div className='Project2 bg-slate-100 opacity-80 p-2 max-w-52 rounded-md'>
                        <div className='Project2Content flex flex-col'>
                            <h2 className='ProjectName font-bold row-span-1 text-sm'>{data.projects[0].project2[0].projectname}</h2>
                            <p className='ProjectDescription row-span-2 text-xs'>{data.projects[0].project2[0].description}</p>
                        </div>
                        <div className='Project2Visuals col-span-1 flex flex-col items-center py-2'>
                            <img src={Project2} alt='Logo' className='row-span-2 w-52 rounded-md'></img>
                            <div className='space-x-2'>
                                <button 
                                    className='row-span-1 bg-slate-300 mt-2 p-2 rounded-md text-sm hover:bg-slate-400'   
                                >
                                    <Link to='/protectthecheese'>Play Game</Link>                      
                                </button>
                                <button 
                                    className='row-span-1 bg-slate-300 mt-2 p-2 rounded-md text-sm hover:bg-slate-400'
                                    onClick={projectGitLink2}
                                >
                                    GitHub                         
                                </button>
                            </div>
                        </div>      
                    </div>

                    <div className='Project3 bg-slate-100 opacity-80 p-2 max-w-52 rounded-md'>
                        <div className='Project3Content flex flex-col'>
                            <h2 className='ProjectName font-bold row-span-1 text-sm'>{data.projects[0].project3[0].projectname}</h2>
                            <p className='ProjectDescription row-span-2 text-xs'>{data.projects[0].project3[0].description}</p>
                        </div>
                        <div className='Project3Visuals col-span-1 flex flex-col items-center py-2'>
                            <img src={Project3} alt='Logo' className='row-span-2 w-52 rounded-md'></img>
                            <div className='space-x-2'>
                                <button 
                                    className='row-span-1 bg-slate-300 mt-2 p-2 rounded-md text-sm hover:bg-slate-400'   
                                >
                                    <Link to='/hittheskies'>Play Game</Link>                      
                                </button>
                                <button 
                                    className='row-span-1 bg-slate-300 mt-2 p-2 rounded-md text-sm hover:bg-slate-400'
                                    onClick={projectGitLink1}
                                >
                                    GitHub                         
                                </button>
                            </div>
                        </div>      
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }

    const workButton = () => {
        if(showWorkContent){
            return (
                <div className='workContainer flex flex-col space-y-2 p-2'>
                    <div 
                        className='Work1 p-2'
                    >
                        <h2 className='WorkPlace font-bold text-sm'>{data.work[0].experience[0].name}</h2>
                        <h3 className='WorkTitle text-sm'>{data.work[0].experience[0].position}</h3>
                        <p className='Description text-xs'>{data.work[0].experience[0].description}</p>
                        <h4 className='Duration font-bold text-sm'>{data.work[0].experience[0].duration}</h4>
                    </div>
                    <div 
                        className='Work2 p-2'
                    >
                        <h2 className='WorkPlace font-bold text-sm'>{data.work[0].experience[1].name}</h2>
                        <h3 className='WorkTitle text-sm'>{data.work[0].experience[1].position}</h3>
                        <p className='Description text-xs'>{data.work[0].experience[1].description}</p>
                        <h4 className='Duration font-bold text-sm'>{data.work[0].experience[1].duration}</h4>
                    </div>
                    <div 
                        className='Work3 p-2'
                    >
                        <h2 className='WorkPlace font-bold text-sm'>{data.work[0].experience[2].name}</h2>
                        <h3 className='WorkTitle text-sm'>{data.work[0].experience[2].position}</h3>
                        <p className='Description text-xs'>{data.work[0].experience[2].description}</p>
                        <h4 className='Duration font-bold text-sm'>{data.work[0].experience[2].duration}</h4>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }

    const contactButton = () => {
        if(showContactContent){
            return (
                <div className='contactContainer p-4'>
                    <Contact/>
                </div>
            )
        } else {
            return null;
        }
    }

    const [isOpen, setIsOpen] = useState(true);

    const closePopup = () => {
        setIsOpen(false);
    };

    const openPopup = () => {
        setIsOpen(true);
    };

    return (
        <div className='PopUpContainer min-w-80 bg-transparent flex flex-col'>
            <div className={`PopUpTab grid grid-cols-3 p-1 rounded-t-md ${isOpen ? 'bg-slate-300 opacity-80' : 'bg-slate-200 opacity-40 hover:bg-slate-300 hover:opacity-80 hover:cursor-pointer'}`}>        
                {isOpen && (<h1 className='PopUpMessage col-span-2'></h1>)}
                {!isOpen && (<h1 className='PopUpMessage col-span-2 pl-14 font-bold'>Enjoy The Scenery</h1>)}

                {isOpen && (<button className='PupUpTabButton text-xs col-start-3 justify-self-end hover:text-white' onClick={closePopup}>CLOSE</button>)}
                {!isOpen && (<button className='PupUpTabButton text-xs col-start-3 justify-self-end hover:text-white' onClick={openPopup}>OPEN</button>)}
            </div>
            {isOpen &&(
                <div className='flex flex-col items-center'>
                    <div className='PopUpMain w-full max-w-screen-md bg-slate-200 bg-opacity-80 p-2'>
                        <div className='flex flex-col items-center justify-center'>
                            
                            <h3 className='PopUpTitle text-md font-bold mx-auto'>{getTitle()}</h3>
                            <p className='PopUpContent text-sm text-center pb-3' >{getContent()}</p>
                            <div>{getButton(currentStage)}</div>
                        </div>
                    </div>
                    <div className='PopUpSecond w-full max-w-screen-md bg-slate-200 bg-opacity-80 rounded-b-md'>
                        <div className='flex flex-col items-center justify-center'> 
                            <div>{aboutMeButton()}</div>
                            <div>{projectsButton()}</div>
                            <div>{workButton()}</div>
                            <div>{contactButton()}</div>
                        </div>
                    </div>
                </div>
                )}
        </div>
    )
}

export default Popup