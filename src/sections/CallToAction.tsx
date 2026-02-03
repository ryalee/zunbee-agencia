import React from 'react'
import BotaoContato from '../components/BotaoContato';

function CallToAction() {
  return (
    <section className='p-0 w-[100%] h-[270px] bg-secondary md:h-[400px] md:flex md:items-center'>
      <div className='p-[10px] mt-[20px] md:px-[50px] md:flex md:items-center md:justify-center'>
        <h1 className='text-[25pt] font-semibold text-left md:text-[50pt] md:w-[70%]'>Transforme suas ideias em realidade e seus problemas em inovação!</h1>

        <BotaoContato label='Ir para o próximo nível' className='w-[300px] py-[20px]'/>
      </div>
    </section>
  )
}

export default CallToAction
