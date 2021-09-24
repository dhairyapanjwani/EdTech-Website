import React, { useEffect, useState, useContext } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './Reports.css';
import { useHistory } from 'react-router-dom';

import QuizApi from '../../util/QuizApi';
import Bar from '../../components/charts/Bar';
import MultiAxisLine from '../../components/charts/Line';
import { GlobalContext } from '../../GlobalContext';

const Reports = props => {
    const history = useHistory();
    const [results, setResults] = useState([]);
    const {userInfo} = useContext(GlobalContext);
    const [userData, setUserData] = userInfo;
    useEffect(() => {
        const fetcher = async () => {
            console.log('Starting');
            const data = await QuizApi.getResult(userData._id);
            console.log(data.data); 
            setResults(data.data.results);
        };

        fetcher();
    }, []);
    return (
        <div id='Reports-Main-Block' className='bg-gray-50 dark:bg-gray-800'>
            <Navbar />
            <div className="w-1/2 text-center mx-auto mt-8 mb-2">
                <MultiAxisLine />
            </div>
            <div className="dark:text-white text-black p-4 dark:bg-gray-700 bg-gray-200 rounded-lg uppercase font-black" id="Reports-Leaderboard" onClick={() => history.push('/leaderBoard')}>
                Leaderboard
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 flex flex-row flex-wrap justify-center align-center">
                {results.length !== 0 && results.map(elem => (<div className="w-1/4 h-1/4 m-8"><Bar courseName={elem.course_name} marks={[elem.score, elem.high, elem.low, elem.avg]} category={elem.category_name} date={elem.date}/></div>))}
            </div>
        </div>
    );
};

export default Reports;