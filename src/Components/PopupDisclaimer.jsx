import React from 'react';
import data from '../Assets/JSON/Data.json';

const PopupDisclaimer = () => {

  return (

    <div className='PopUpContainer min-w-80 max-w-96 bg-transparent flex flex-col'>

      <div className='PopUpTab grid grid-cols-3 p-1 rounded-t-md bg-slate-300 opacity-80'>        
        <h1 className='PopUpMessage col-span-2 p-2'></h1>
      </div>

      
      <div className='PopUpMain w-full max-w-96 rounded-b-md bg-slate-200 bg-opacity-80 p-2' style={{ overflowY: 'auto', height: '80vh' }}>
        <div className='PopContainer flex flex-col items-start'>      
          <h1 className='PopUpDisclaimerTitle text-xl font-bold mx-auto'>Disclaimer</h1>

          <h3 className='PopUpStatementTitle text-l font-bold mx-auto'>Statement</h3>
          <p className='PopUpDisclaimerContent text-sm text-center pb-3' >{data.disclaimer[0].content}</p>

          <h3 className='PopUpCreditsTitle text-l font-bold mx-auto'>Credits</h3>
          {data.credits.map((credit, index) => (
            <div className='PopUpCreditContent pb-3' key={index}>

              <p className='PopUpItemRef text-sm'>
                <span className='font-bold'>Model:</span> {credit.ModelRef}
              </p>

              <p className='PopUpItemName text-sm'>
                <span className='font-bold'>Model Full Name:</span> {credit.ModelName}
              </p>

              <p className='PopUpItemSource text-sm'>
                <span className='font-bold'>Model Source:</span> {credit.ModelSource}
              </p>

              <p className='PopUpItemAuthor text-sm'>
                <span className='font-bold'>Model Author:</span> {credit.Author}
              </p>

              <p className='PopUpItemLink text-sm'>
                <span className='font-bold'>Author Link:</span> {credit.AuthorLink}
              </p>

            </div>
          ))}

          <h3 className='PopUpContact  text-l font-bold mx-auto'>Contact</h3>
          <p className='PopUpContactEmail text-sm justify-center pb-3' >
          <span className='font-bold'>Email:</span> manson88fang@gmail.com
          </p>

        </div>
      </div>
      
        
    </div>
  )
}

export default PopupDisclaimer