import React from 'react';
import { services } from '../data/services.js';
import BotaoContato from '../components/BotaoContato';
import Image from 'next/image.js';

function Services() {
  return (
    <section className='flex flex-col items-center px-2.5'>
      <div>
        <h1 className='section-title'>O que podemos fazer por você?</h1>
        <h2 className='section-subtitle'>Nossos serviços</h2>
      </div>

      <div className='flex flex-col gap-12.5 mt-10 md:flex-row'>
        {
          services.map((service) => (
            <div 
              key={service.id}
              className='service-card text-center'
            >
              <Image 
                src={service.image} alt={service.imageDesc}
                className='self-center'
                width={250}
                height={250}
              />

              <h3 className='font-semibold text-[25pt]'>{service.title}</h3>
              <p className='font-medium text-[15pt]'>{service.description}</p>

              <BotaoContato label='Criar o Meu' className='self-center mt-5'/>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Services