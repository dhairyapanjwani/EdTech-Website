import React from "react";
import { useHistory } from 'react-router-dom';
import './Quiz.css';

import Navbar from "../../components/navbar/Navbar";
import QuestionCard from '../../components/quiz/QuestionCard';

const Quiz = () => {
    const history = useHistory();
    return (
        <div id="Quiz-Main-Block" className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200">
            <Navbar />
            <div className="text-indigo-500 text-md ml-12 mt-8" onClick={() => history.goBack()}>
                <i className="fas fa-arrow-left"></i> Back
            </div>
            <QuestionCard />
        </div>
    );
};

export default Quiz;