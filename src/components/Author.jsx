import React from 'react';

const Author = (Author) => {

    return <p className='author' style={{color:`${Author.colors}`}}>{Author.author}</p>

};

export default Author;