import React from 'react'

const Questionnaire = ({
    handleAnswer, 
    showAnswers,
    handleNextQuestion,
    data: {question, correct_answer, answers}
}) => {

       return (
        <div className='flex flex-col'>
           <div className ='bg-white text-purple-800 p-10 rounded-lg shadow-md'>
              <h2 className='text-2xl' dangerouslySetInnerHTML={{ __html: question }} />
            </div>
            <div className='grid grid-cols-2 gap-6 mt-6'>
                    {answers.map((answer, idx) => {
                        const textColor = showAnswers ? answer === correct_answer ? 'text-green-500' : 'text-red-500': 'text-purple-800';
                       return (
                        <button 
                            key={idx}
                            className={` ${textColor} bg-white p-4
                            font-semibold rounded shadow`} 
                            onClick={()=> handleAnswer(answer)}
                            dangerouslySetInnerHTML={{ __html: answer }}
                           /> 
                       );
                    })}
                   
            </div>
            {showAnswers && (
                    <button 
                        onClick={handleNextQuestion}
                        className={`ml-auto bg-purple-700 mt-6
                        text-white p-4 font-semibold rounded shadow`} >
                        Next Question
                    </button>
            )}
        </div>
    )
}

export default Questionnaire
 