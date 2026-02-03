import React from 'react';
import {questions} from '../data/questions';
import BotaoContato from '../components/BotaoContato';

function FAQ() {
  return (
    <section className='px-[10px]'>
      <div>
        <h1 className='section-title'>FAQ</h1>
        <p className='section-subtitle'>Dúvidas que recebemos frequentemente</p>
      </div>

      <div className='flex flex-col gap-[30px] mt-[40px] md:px-[30px]'>
        {
          questions.map((question) => (
            <div 
              key={question.id}
              className='flex flex-col border-4 border-main p-[15px] gap-2 rounded-[20px]'
            >
              <h1 className='text-[16pt] font-bold'>{question.question}</h1>
              <p className='text-[13pt]'>{question.answer}</p>
            </div>
          ))
        }
      </div>

      <div className='mt-[20px] md:px-[40px]'>
        <p className='text-[16pt] md:text-[20pt]'>Tem alguma dúvida e não encontrou resposta aqui?</p>
        <BotaoContato label='Entre em Contato'/>      
      </div>
    </section>
  )
}

export default FAQ;