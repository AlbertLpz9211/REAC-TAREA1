import React from 'react';


const QuoteBox = (Quote) => {

   
    return (
    <div>
        <div className='quote' style={{color:`${Quote.colors}`}}>
                <h1 ><i class="fa-solid fa-quote-left"></i> {Quote.quote}</h1>
        </div>
    </div>
    
    );
};

export default QuoteBox;