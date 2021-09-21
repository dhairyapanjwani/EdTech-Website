import React, { useState } from 'react';
import quiz from './Quiz.json';
import './Result.css';

import { CircularProgress } from '@material-ui/core'

// THE RESULT SCREEN //
const Result = props => {
    console.log(props.answers);
    var result = 0;
    // DISPLAY SINGLE QS INSIDE OF A li tag //
const data = props.answers.map((elem) => <li key={elem.questionNo}>
    <div className='Result-block bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 border-2 border-gray-200 dark:border-gray-600 border-opacity-60 rounded-lg p-2'>
        <div className='Result-block__elem--qs'>
            Q{elem.questionNo+1}. {quiz.questions[elem.questionNo].question}
        </div>
        <hr />
        <div className='Result-block__elem--ans'>
            <p 
            className={quiz.questions[elem.questionNo].correctIndex === 0 ? 'green' : ''}
            id={quiz.questions[elem.questionNo].correctIndex !== elem.choice && elem.choice === 0 ? 'red' : ''}
            >
                a. {quiz.questions[elem.questionNo].answers[0]}
            </p>
            <p 
            className={quiz.questions[elem.questionNo].correctIndex === 1 ? 'green' : ''}
            id={quiz.questions[elem.questionNo].correctIndex !== elem.choice && elem.choice === 1 ? 'red' : ''}
            >
                b. {quiz.questions[elem.questionNo].answers[1]}
            </p>
            <p 
            className={quiz.questions[elem.questionNo].correctIndex === 2 ? 'green' : ''}
            id={quiz.questions[elem.questionNo].correctIndex !== elem.choice && elem.choice === 2 ? 'red' : ''}
            >
                c. {quiz.questions[elem.questionNo].answers[2]}
            </p>
            <p 
            className={quiz.questions[elem.questionNo].correctIndex === 3 ? 'green' : ''}
            id={quiz.questions[elem.questionNo].correctIndex !== elem.choice && elem.choice === 3 ? 'red' : ''}
            >
                d. {quiz.questions[elem.questionNo].answers[3]}
            </p>
        </div>
    </div>
</li>);
    // CALCULATE THE USER RESULT //
    const resultCalculate = () => {
        const resultArr = props.answers.filter((elem) => elem.correct === true);
        result = resultArr.length
        console.log(result);
        localStorage.setItem('quiz1Result', result);
    };

    resultCalculate();

    return (
        <div style={{textAlign: 'center',margin: 'auto',width: '80%', marginTop: 12}}>
            <div className='Result-block--result'>
                <p>
                    Result Summary
                </p>
            </div>
            {data}
            <div className='Result-block--result'>
                <p>
                    Result: {result} / {props.answers.length}
                </p>
            </div>
            <div style={{textAlign: 'center',margin: 'auto'}} className="py-4">
                <h2 style={{textTransform: 'uppercase', letterSpacing: 6}} className="my-2">Pie Analysis</h2>
                    <p className="my-2">{result*100/props.answers.length}% success!</p>
                <CircularProgress
                    size={240}
                    value={result*12}
                    thickness={22}
                    variant="static"
                    style={{backgroundColor: '#f44336', borderRadius: '50%', color: "#4caf50", opacity: 0.8}}
                    />
            </div>
        </div>
    );
};

export default Result;