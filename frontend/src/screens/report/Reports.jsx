import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './Reports.css';

import QuizApi from '../../util/QuizApi';
import Bar from '../../components/charts/Bar';
import MultiAxisLine from '../../components/charts/Line';

const Reports = props => {
    const [results, setResults] = useState([]);
    useEffect(() => {
        const fetcher = async () => {
            console.log('Starting');
            const data = await QuizApi.getResult('614adf467e4020a62c1b157d');
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
            <div className="bg-gray-50 dark:bg-gray-800 p-6 flex flex-row flex-wrap justify-center align-center">
                {results.length !== 0 && results.map(elem => (<div className="w-1/4 h-1/4 m-8"><Bar courseName={elem.course_name} marks={[elem.score, elem.high, elem.low, elem.avg]} category={elem.category_name} date={elem.date}/></div>))}
            </div>
        </div>
    );
};

export default Reports;