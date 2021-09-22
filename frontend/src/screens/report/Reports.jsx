import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';

import QuizApi from '../../util/QuizApi';

const Reports = props => {
    const [results, setResults] = useState({});
    useEffect(() => {
        const fetcher = async () => {
            const data = await QuizApi.getResult();
            console.log(data);
        };

        fetcher();
    }, []);
    return (
        <div>
            <Navbar />
            <div>
                Reports.jsx
            </div>
        </div>
    );
};

export default Reports;