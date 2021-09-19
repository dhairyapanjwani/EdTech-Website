import React from 'react';
import { SearchIcon } from '@heroicons/react/outline';

import Navbar from '../../components/navbar/Navbar';
import CourseCard from '../../components/card/CourseCard';

const Courses = props => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return(
        <div>
            <Navbar />
            <div className="m-5 my-8">
                <div className="relative flex flex-wrap items-stretch mx-auto w-8/12">
                    <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                        {/* <i className="fas fa-search text-pink bg-pink"></i> */}
                        <SearchIcon className="h-6 w-6" aria-hidden="true" style={{ color: 'rgb(151, 151, 151)' }}/>
                    </span>
                    <input type="text" placeholder="Search Courses..." className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-md border border-blueGray-300 outline-none focus:outline-none focus:ring w-full pl-10"/>
                </div>
            </div>
            <section className='text-gray-600 body-font'>
                <div className="container px-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {arr.map(elem => (
                            <CourseCard key={elem} className=""/>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Courses;