import React from 'react'
import {feedbacks} from '../data/feedbacks';
import Image from 'next/image'

function Feedbacks() {
  return (
    <section className='px-2.5'>
      <h1 className='section-title'>Depoimentos de Clientes Satisfeitos</h1>

      <div className='flex flex-col gap-12.50 mt-10 px-5 md:flex-row md:gap-5'>
        {
          feedbacks.map((feedback) => (
            <div 
              key={feedback.id}
              className='flex flex-col gap-5 shadow-[0px_0px_10px_#4e4e4e40] px-3 py-5 rounded-lg md:w-[40%]'
            >
              <Image 
                src={feedback.open}
                width={40}
                height={40}
                alt=''
                loading="lazy"
              />

              <p className='px-2.5 font-medium text-[15pt] md:text-[12pt]'>
                {feedback.comment}
              </p>

              <div className='flex items-center justify-between'>
                <p className='px-3 text-[12pt]'>{feedback.client}</p>

                <Image 
                  src={feedback.close}
                  width={40}
                  height={40}
                  alt=''
                  loading="lazy"
                />
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Feedbacks
