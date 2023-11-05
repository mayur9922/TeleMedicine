import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import "../styles/faqs.css";
import { useState } from 'react';

const FAQ = ({question,answer}) => {
    const [sign, setSign]=useState(false);
    const showSign = () => {
        setSign((prev)=>!prev)
        if(sign){
            console.log("Hello")
        }
    }
  return (
    <article className="faq" onClick={showSign}>
    <div className="faq__icon" >
    {
        sign? <AiOutlineMinus/> :<AiOutlinePlus/>
    }
        </div>
        <div className={`"question__answer ${sign ? 'hide':'show'}"`}>
            <h4>{question}</h4>
          {sign && <p>  {answer} </p>}
        </div>
    
</article>
  )
}

export default FAQ