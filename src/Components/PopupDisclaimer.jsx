import React from 'react';
import data from './data.json';

const PopupDisclaimer = () => {

  return (

    <div className='PopUpContainer min-w-80 max-w-96 bg-transparent flex flex-col'>

      <div className='PopUpTab grid grid-cols-3 p-1 rounded-t-md bg-slate-300 opacity-80'>        
        <h1 className='PopUpMessage col-span-2 p-2'></h1>
      </div>

      
      <div className='PopUpMain w-full max-w-96 rounded-b-md bg-slate-200 bg-opacity-80 p-2'>
        <div className='flex flex-col items-center justify-center'>      
          <h3 className='PopUpTitle text-md font-bold mx-auto'>{data.disclaimer[0].title}</h3>
          <p className='PopUpContent text-sm text-center pb-3' >{data.disclaimer[0].content}</p>
        </div>
      </div>
      
        
    </div>
  )
}

export default PopupDisclaimer