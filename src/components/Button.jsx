import React from 'react';

const Button = (btn) => {
    return (
        <div className='btn-container'>
			<button style={{color:`${btn.colors}`}} className='button-card' onClick={btn.changeColor}>
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
			</button>
		</div>
    );
};

export default Button;