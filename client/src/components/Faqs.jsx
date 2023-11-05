import React, { useState } from 'react'
// import './faqs.css'
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
// import f
import FAQ from './Faq'
import { faqs } from '../data';
import "../styles/faqs.css";

const FAQs = () => {

  return (
    <section className="faqs">
    <h2 className='newh2'>Frequently asked questions</h2>
    <div className="container faqs__container">
        {
            faqs.map(({id,question,answer})=>{
                return <FAQ key={id} question={question} answer={answer} />
            })
        }
    </div>
</section>
  );
};

export default FAQs;