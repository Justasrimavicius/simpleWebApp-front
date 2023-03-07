import React from 'react';

function Answers(props) {
    return (
        <div className='answersDiv'>
            <h5>Answer</h5>
            <div className='answersDiv-layer1'>
                <div className='answersDiv-layer2'>
                    <p className='answerField'>{props.answer}</p>
                </div>
            </div>

        </div>
    );
}

export default Answers;