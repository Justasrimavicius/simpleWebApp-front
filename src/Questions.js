import React, { useEffect } from 'react';

function Questions(props) {

    return (
        <div className='questionsDiv'>
            <button onClick={()=>{props.setQuestion('Q1')}}>Date of the christianization of Lithuania.</button>
            <button onClick={()=>{props.setQuestion('Q2')}}>Franklin D. Roosevelts birth date.</button>
            <button onClick={()=>{props.setQuestion('Q3')}}>The start of the American civil war.</button>
            <button onClick={()=>{props.setQuestion('Q4')}}>Christopher Columbus trips across the atlantic ocean dates.</button>
            <button onClick={()=>{props.setQuestion('Q5')}}>Date of the invention of the printing press.</button>
            <button onClick={()=>{props.setQuestion('Q6')}}>Napoleon Bonaparte death date.</button>
            <button onClick={()=>{props.setQuestion('Q7')}}>Date of the invention of the wheel.</button>
            <button onClick={()=>{props.setQuestion('Q8')}}>largest contiguous land empire in world history.</button>
            <button onClick={()=>{props.setQuestion('Q9')}}>Name of the first person on the moon.</button>
            <button onClick={()=>{props.setQuestion('Q10')}}>One mile run fastest time.</button>
        </div>
    );
}

export default Questions;