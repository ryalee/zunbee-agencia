import React from 'react'
import { processSteps } from '../data/process'
import Image from 'next/image'

function Steps() {
  return (
    <section className='px-2.5'>
      <div>
        <h1 className='section-title'>Como tiramos suas ideias do papel</h1>
        <p className='section-subtitle'>Visão geral e técnica do nosso trabalho</p>
      </div>

      {
        processSteps.map((step, index) => (
          <div
            key={`step-${index}`} 
            className={`flex flex-col md:items-center md:justify-around mt-10 md:px-10 ${index % 2 !== 0 ? 'md:flex-row' : "md:flex-row-reverse" }`}
          >
            <Image 
              src={step.image} 
              alt={step.imageDescription}
              width={314} 
              height={314} 
              className='self-center md:w-75'
            />

            <div className='px-5 my-5 md:flex-col'>
              <div className='flex items-center px-2.5 gap-2.5'>
                <div className='flex bg-dark text-main font-bold text-[20pt] w-12.5 h-12.5 rounded-full justify-center items-center'>
                  {step.step}
                </div>

                <h2 className='font-semibold text-[18pt]'>{step.title}</h2>
              </div>

              <ul className='flex flex-col p-2.5] gap-1'>
                {
                  step.items.map((item, idx) => (
                    <li key={idx} className='list-disc text-[16pt]'>{item}</li>
                  ))
                }
              </ul>
            </div>
          </div>
        ))
      }
    </section>
  )
}

export default Steps
