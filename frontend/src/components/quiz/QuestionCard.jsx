import React, { useState } from 'react';
import quiz from './Quiz.json';
import './QuestionCard.css';

import Rules from './Rules';
import Result from './Result';

// ARRAY USED FOR RESULT //
const green = [];

// MAIN FUNC //
const QuestionCard = (props) => {

    console.log(quiz);
    // QUIZ QS COUNTER //
    const [i, setI] = useState(0); 
    // SAVE INPUT ANSWER //
    const saveAnswerHandler = (questionIndex, answerIndex) => {
        //console.log(questionIndex);
        //console.log(answerIndex);
        const correctIndex = quiz.questions[questionIndex].correctIndex;
        // CORRECT ANSWER //
        if(quiz.questions[questionIndex].answers[correctIndex] === quiz.questions[questionIndex].answers[answerIndex]){
            console.log('Correct');
            green.push({questionNo: questionIndex,correct: true, choice: answerIndex});
            setI(i+1);
        } else {
            // INCORRECT ANSWER //
            console.log('Incorrect');
            green.push({questionNo: questionIndex, correct: false, choice: answerIndex});
            setI(i+1);
        }
    };
    // DISPLAY RESULT AT END OF QUIZ //
    if(i === quiz.questions.length){
        console.log('Break');
        return (
            <Result answers={green}/>
        );
    }
    return (
        <div style={{textAlign: 'center',margin: 'auto'}} className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200">
        <Rules title={props.title} />
        
        <div className='QuestionCard-block bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 border-2 border-gray-200 dark:border-gray-600 border-opacity-60 rounded-lg p-2'> 
            <form onSubmit={(e) => {
                e.preventDefault();
                setI(i+1);
                //console.log(i);
                }}>
                <div className='QuestionCard-block__elem--qs'>
                   Q{i+1}. {quiz.questions[i].question}
                </div>
                <hr />
                <div className='QuestionCard-block__elem--ans'>
                    <a className='QuestionCard-block__elem--ansIndividual hover:bg-gray-200 dark:hover:bg-gray-700'
                    onClick={saveAnswerHandler.bind(this, i, 0)}
                    >
                        a. {quiz.questions[i].answers[0]}
                   </a>

                    <a className='QuestionCard-block__elem--ansIndividual hover:bg-gray-200 dark:hover:bg-gray-700'
                    onClick={saveAnswerHandler.bind(this, i, 1)}
                    >b. {quiz.questions[i].answers[1]}</a>

                    <a className='QuestionCard-block__elem--ansIndividual hover:bg-gray-200 dark:hover:bg-gray-700'
                    onClick={saveAnswerHandler.bind(this, i, 2)}
                    >c. {quiz.questions[i].answers[2]}</a>

                    <a className='QuestionCard-block__elem--ansIndividual hover:bg-gray-200 dark:hover:bg-gray-700'
                    onClick={saveAnswerHandler.bind(this, i, 3)}
                    >d. {quiz.questions[i].answers[3]}</a>
                </div>
                
            </form>
        </div>
        </div>
    );
};

export default QuestionCard;