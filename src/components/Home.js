import React from 'react'

import Cards from './Cards';
import TestClassComp from './TestClassComp';
import feedbackform2 from './feedbackform2';

import './Cards.css';
import CardItem from './CardItem';

export default function Home() {
    return (        

        <div className='container'>

            <Cards/> 
            <div>
                
            <TestClassComp/>
            {/* above class component is i am making for feedback form diretly rendering from outside */}

            </div> 
        </div>

     
       

    )
}