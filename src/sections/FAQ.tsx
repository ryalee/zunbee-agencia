import React from 'react';
import {questions} from '../data/questions';
import BotaoContato from '../components/BotaoContato';

function FAQ() {
  return (
    <section className='px-2.5'>
      <div>
        <h1 className='section-title'>FAQ</h1>
        <p className='section-subtitle'>Dúvidas que recebemos frequentemente</p>
      </div>

      <div className='flex flex-col gap-7.5 mt-10 md:px-7.5'>
        {
          questions.map((question) => (
            <div 
              key={question.id}
              className='flex flex-col border-4 border-main p-3.75 gap-2 rounded-5'
            >
              <h1 className='text-[16pt] font-bold'>{question.question}</h1>
              <p className='text-[13pt]'>{question.answer}</p>
            </div>
          ))
        }
      </div>

      <div className='mt-5 md:px-10'>
        <p className='text-[16pt] md:text-[20pt]'>Tem alguma dúvida e não encontrou resposta aqui?</p>
        <BotaoContato label='Entre em Contato'/>      
      </div>
    </section>
  )
}

export default FAQ;