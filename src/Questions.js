import React, { useEffect, useRef } from 'react';

function Questions(props) {

    const prevClickedButton = useRef(null);

    useEffect(()=>{
        document.querySelectorAll('.questionsDiv button').forEach(button=>{
            button.addEventListener('click',()=>{props.setQuestion(button.id)});
        })
    }, [])

    return (
        <div className='questionsDiv' onClick={(e)=>{
            if(e.target.classList.contains('questionsDiv'))return;

            if(prevClickedButton.current != null)prevClickedButton.current.classList.remove('buttonFocus');
            e.target.classList.add('buttonFocus');
            prevClickedButton.current = e.target;
        
        }}>
            <button id="Q1">Date of the christianization of Lithuania.</button>
            <button id="Q2">Franklin D. Roosevelt birth date.</button>
            <button id="Q3">The start of the American civil war.</button>
            <button id="Q4">Christopher Columbus trips across the atlantic ocean dates.</button>
            <button id="Q5">Date of the invention of the printing press.</button>
            <button id="Q6">Napoleon Bonaparte death date.</button>
            <button id="Q7">Date of the invention of the wheel.</button>
            <button id="Q8">largest contiguous land empire in world history.</button>
            <button id="Q9">Name of the first person on the Moon.</button>
            <button id="Q10">The fastest time of a one mile run.</button>
        </div>
    );
}

export default Questions;