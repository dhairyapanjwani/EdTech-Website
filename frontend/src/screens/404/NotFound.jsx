import React from "react";
import { useHistory } from 'react-router-dom';
import './NotFound.css';

import not_found from '../../assets/svgs/404.svg';

const NotFound = props => {
    const history = useHistory();
    return (
        <div id="NF-Main-Block" className="bg-gray-50 dark:bg-gray-800">
            <div className="text-indigo-500 text-md pl-12 pt-8" onClick={() => history.goBack()} style={{ cursor: 'pointer' }}>
                <i className="fas fa-arrow-left"></i> Back
            </div>
            <img src={not_found} id="NF-img"/>
            <div className="text-gray-900 dark:text-gray-200 text-7xl text-center mx-auto mt-14 pt-14">You Seem Lost!</div>
        </div>
    );
};

export default NotFound;