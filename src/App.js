import React, { useState, useEffect } from 'react'
import Questionnaire from './Components/Questionnaire';
const API_URL = 
'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple';

function App() {
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [showAnswers, setShowAnswers] = useState(false)
  
  useEffect(() =>{
    fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      const questions = data.results.map((question) =>({
        ...question,
        answers: [question.correct_answer,
          ...question.incorrect_answers].sort(() =>Math.random()- 0.5)
      }))
        setQuestions(questions)
    })
  }, [])
const handleAnswer =(answer)=> {
  if (!showAnswers) {
  if(answer === questions[currentIndex].correct_answer){
    setScore(score + 5);
  }
}
setShowAnswers(true)
  
}

const handleNextQuestion = ()=>{
  setCurrentIndex(currentIndex + 1); 
  setShowAnswers(false)

  
}
  return questions.length > 0 ? (
      <div className="container">
        {currentIndex >= questions.length ? (
        <div className="text-3xl  text-white font-bold">
          End of the Exam your score was {score}</div>
        ):(
          <Questionnaire 
          data={questions[currentIndex ]} 
          showAnswers ={showAnswers}
          handleNextQuestion= {handleNextQuestion}
          handleAnswer={handleAnswer}
        /> 
        )} 
    </div>
  ):( 
    <h1 className ="text-2xl text-white font-bold" >loading...</h1>
  );
}

export default App;
