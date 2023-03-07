import { useEffect, useState } from "react";
import Questions from "./Questions.js";
import Answers from './Answers.js';

import './styles.css';

import httpReqPath from "./httpReqPath.js";

function App() {
  const [currQuestion, setCurrQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  useEffect(()=>{
    if(currQuestion !== ''){
      fetch(httpReqPath+currQuestion)
        .then(response => response.json())
        .then((data) => setAnswer(data.answer));
    }
  },[currQuestion])

  return (
    <div className="App">
      <h1 className="mainTitle">Q/A app - select a question from the list below, get the answer.</h1>
      <main>
        <Questions setQuestion={setCurrQuestion}/>
        <Answers answer={answer}/>
      </main>
    </div>
  );
}

export default App;
