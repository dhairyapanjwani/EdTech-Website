import React, { useContext, useEffect } from 'react';
import { SearchIcon } from '@heroicons/react/outline';
import './Courses.css';

import { GlobalContext } from '../../GlobalContext';
import Navbar from '../../components/navbar/Navbar';
import CourseCard from '../../components/card/CourseCard';
import CoursesSelect from '../../components/select/CoursesSelect';

import CourseApi from '../../util/CourseApi';
import no_data from '../../assets/svgs/no_data.svg';

const Courses = props => {
    const { courseAll, searchCourse, searchCourseResult } = useContext(GlobalContext);
    const [allCourses, setAllCourses] = courseAll;
    const [courseSearch, setCourseSearch] = searchCourse;
    const [courseSearchResult, setCourseSearchResult] = searchCourseResult;
    useEffect(() => {
        const fetcher = async () => {
            const data = await CourseApi.allCourses();
            setAllCourses(data.data.courses);
            setCourseSearchResult(data.data.courses);
        };
        fetcher();
    }, []);
    
    return(
        <div className="bg-gray-50 dark:bg-gray-800 pb-8" id="Course-Main-Div">
            <Navbar />
            <div className="m-5 my-8 flex flex-row justify-center">
                <div className="relative flex flex-wrap items-stretch w-8/12 mr-4">
                    <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                        {/* <i className="fas fa-search text-pink bg-pink"></i> */}
                        <SearchIcon className="h-6 w-6" aria-hidden="true" style={{ color: 'rgb(151, 151, 151)' }}/>
                    </span>
                    <input type="text" placeholder="Search Courses..." onChange={e => setCourseSearch(e.target.value)} className="px-3 py-3 placeholder-blueGray-300 text-gray-600 relative bg-white bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 rounded text-md border border-blueGray-300 outline-none focus:outline-none focus:ring w-full pl-10"/>
                </div>
                <CoursesSelect />
            </div>
            <section className='text-gray-600 body-font'>
                <div className="container px-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {courseSearchResult.length === 0 ? (
                            <div className="text-4xl flex justify-center align-center text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 my-auto mx-auto p-4" id="Course-Sub-Div">
                                <div className="flex flex-row justify-center align-center space-x-12 flex-wrap">
                                    <img src={no_data} width={500} />
                                    <div className="justify-center my-auto">
                                        Oops! No Courses available at the moment.
                                    </div>
                                </div>
                            </div>
                        ) : (
                            courseSearchResult.map(elem => (
                                <CourseCard key={elem} course={elem}/>
                            ))
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Courses;