import { useEffect, useState } from "react";
import Questions from "./Questions.js";
import Answers from './Answers.js';

import './styles.css';

function App() {
  const [currQuestion, setCurrQuestion] = useState('');

  useEffect(()=>{
    if(currQuestion !== ''){
      console.log(currQuestion);
    }
  },[currQuestion])

  return (
    <div className="App">
      <h1 className="mainTitle">Q/A app - select a question from the list below, get the answer.</h1>
      <main>
        <Questions setQuestion={setCurrQuestion}/>
        <Answers />
      </main>
    </div>
  );
}

export default App;
