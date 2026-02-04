import React from 'react'
import BotaoContato from '../components/BotaoContato';

function CallToAction() {
  return (
    <section className='p-0 w-full h-67.5 bg-secondary md:h-100 md:flex md:items-center'>
      <div className='p-2.5 mt-5 md:px-12.5 md:flex md:items-center md:justify-center'>
        <h1 className='text-[25pt] font-semibold text-left md:text-[50pt] md:w-[70%]'>Transforme suas ideias em realidade e seus problemas em inovação!</h1>

        <BotaoContato label='Ir para o próximo nível' className='w-75 py-5'/>
      </div>
    </section>
  )
}

export default CallToAction
