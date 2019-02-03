import React from 'react';

const FifthRow = props => {
    
    const clickHandler = e => {
        console.log(e.target.innerText)
        props.update(e.target.innerText)
    }

    return (
        <>    
            <div className='row'>
                <div className='col col-3 button' onClick={clickHandler}>1</div>
                <div className='col col-3 button' onClick={clickHandler}>2</div>
                <div className='col col-3 button' onClick={clickHandler}>3</div>
                <div className='col col-3 button orange'>+</div>
            </div>
        </>    
    );
}

export default FifthRow;