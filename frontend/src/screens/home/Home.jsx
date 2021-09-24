import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import './Home.css';
import course_illustrations1 from './a1.jpg';
import course_illustrations2 from './a2.jpg';
import course_illustrations3 from './a3.jpg';
import { Link } from 'react-router-dom';
import home_illus from '../../assets/svgs/home.svg';
import testimonial from '../../assets/svgs/testimonial.svg';
import testimonial_1 from '../../assets/images/testimonial_1.jpeg';
import testimonial_2 from '../../assets/images/testimonial_2.jpeg';
import testimonial_3 from '../../assets/images/testimonial_3.jpg';
import testimonial_4 from '../../assets/images/testimonial_4.jpg';

const Home = () => {
    return (
        <div className="bg-gray-50 dark:bg-gray-800" >
            <Navbar />
            
            <div className="flex flex-row justify-center align-center m-8">
                <div className="w-2/5 my-2 mx-10">
                    <img src={home_illus} alt="" className='object-scale-down w-full' />
                </div>
                <div className="my-auto my-2 mx-10">
                    <div className="container mx-auto mt-14">
                    <div className="flex flex-col text-center w-full">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-black font-bold dark:text-white mt-6">The world's largest selection of courses</h1>
                    </div>
                </div>
                    <Link to={'courses'}  className="button-styles flex lg:w-70 mx-auto mt-6 mb-6 text-gray-800 py-2 px-12 border-gray-500 border-2 focus:outline-none hover:bg-gray-200 text-lg dark:text-gray-300 dark:hover:bg-gray-600">Browse Courses</Link>
                </div>
            </div>

            <section className="text-gray-600 body-font">
                <div className="container px-5 mx-auto flex items-center lg:w-3/5 mx-auto border-b-2 pb-10 border-gray-200 dark:border-gray-700 sm:flex-row flex-col"></div>
            </section>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-col text-center w-full mb-10">
                    <h2 className="text-base text-blue-500 tracking-widest font-medium title-font mb-1 font-black uppercase">Expert courses</h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 dark:text-gray-100">Explore a variety of courses and gain new skills</h1>
                    </div>
                    <div className="flex flex-wrap -m-4">
                    
                        <div className="p-4 md:w-1/3">
                            <div className="h-full bg-gray-100 rounded-lg overflow-hidden dark:bg-gray-800 border-2 dark:border-gray-600">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={course_illustrations1} alt="blog" />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 uppercase">REACTJS</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 dark:text-gray-200 mb-3">Advanced ReactJS</h1>
                                    <p className="leading-relaxed mb-3 dark:text-gray-500">This Course is for advanced level</p>
                                    <div className="flex items-center flex-wrap ">
                                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                        </a>
                                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>1.2K
                                        </span>
                                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>3
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="h-full bg-gray-100 rounded-lg overflow-hidden dark:bg-gray-800 border-2 dark:border-gray-600">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={course_illustrations2} alt="blog" />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 uppercase">DJANGO</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 dark:text-gray-200 mb-3">Advanced Django</h1>
                                    <p className="leading-relaxed mb-3 dark:text-gray-500">This Course is for advanced level</p>
                                    <div className="flex items-center flex-wrap ">
                                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                        </a>
                                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>1.2K
                                        </span>
                                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>3
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/3">
                            <div className="h-full bg-gray-100 rounded-lg overflow-hidden dark:bg-gray-800 border-2 dark:border-gray-600">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={course_illustrations3} alt="blog" />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 uppercase">NODEJS</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 dark:text-gray-200 mb-3">Advanced NodeJS</h1>
                                    <p className="leading-relaxed mb-3 dark:text-gray-500">This Course is for advanced level</p>
                                    <div className="flex items-center flex-wrap ">
                                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                        </a>
                                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>1.2K
                                        </span>
                                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>3
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to={'courses'} className="button-styles1 flex lg:w-70 mx-auto mt-6 mb-6 text-gray-800 py-2 px-12 border-gray-500 border-2 focus:outline-none hover:bg-gray-300 text-lg dark:text-gray-300 dark:hover:bg-gray-600">View more courses</Link>
                    </div>
                    
                    
                </div>
            </section>
            <div className="bg-gray-100 dark:bg-gray-700 pb-8">
                <div className="flex flex-row justify-evenly align-center py-10 w-3/4 place-self-center mx-auto">
                    <div className="w-2/5 align-self-center my-auto">
                        <h1 className="text-lg text-left uppercase font-medium title-font text-gray-900 mx-auto py-4 mx-auto text-blue-500 font-black">Testimonials</h1>
                        <p className="mb-20 text-gray-700 dark:text-gray-400 text-5xl">What the people have to say about us.</p>
                    </div>
                    <div className="w-2/5">
                        <img src={testimonial} className='object-scale-down w-full invert'/>
                    </div>
                </div>
                <div className="flex flex-wrap w-4/5 justify-self-center align-self-center mx-auto">
                
                    <div className="p-2 md:w-1/4">
                        <div className="flex rounded-lg bg-white p-6 dark:bg-gray-800 flex-col align-center">
                            <div className="h-full text-center mx-auto">
                                <div className="flex flex-row justify-evenly align-center mb-8">
                                    <img alt="testimonial" className="w-20 h-20 object-cover object-center rounded-full inline-block border-4 border-gray-200 dark:border-gray-700 p-1 float-left" src={testimonial_1} />
                                    <div className="text-left flex flex-col justify-center float-right">
                                        <h2 className="dark:text-gray-200 text-gray-800 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                                        <p className="text-gray-500 text-sm font-black">Senior Designer</p>
                                    </div>
                                </div>
                                <p className="leading-relaxed text-left dark:text-gray-100">One of the best educational website I have ever visited the course contents are very unique & informative.</p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                            </div>
                        
                        </div>
                    </div>

                    <div className="p-2 md:w-1/4">
                        <div className="flex rounded-lg bg-white p-6 dark:bg-gray-800 flex-col align-center">
                            <div className="h-full text-center mx-auto">
                                <div className="flex flex-row justify-evenly align-center mb-8">
                                    <img alt="testimonial" className="w-20 h-20 object-cover object-center rounded-full inline-block border-4 border-gray-200 dark:border-gray-700 p-1 float-left" src={testimonial_2} />
                                    <div className="text-left flex flex-col justify-center float-right">
                                        <h2 className="dark:text-gray-200 text-gray-800 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                                        <p className="text-gray-500 text-sm font-black">Senior Designer</p>
                                    </div>
                                </div>
                                <p className="leading-relaxed text-left dark:text-gray-100">One of the best educational website I have ever visited the course contents are very unique & informative.</p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                            </div>
                        
                        </div>
                    </div>

                    <div className="p-2 md:w-1/4">
                        <div className="flex rounded-lg bg-white p-6 dark:bg-gray-800 flex-col align-center">
                            <div className="h-full text-center mx-auto">
                                <div className="flex flex-row justify-evenly align-center mb-8">
                                    <img alt="testimonial" className="w-20 h-20 object-cover object-center rounded-full inline-block border-4 border-gray-200 dark:border-gray-700 p-1 float-left" src={testimonial_3} />
                                    <div className="text-left flex flex-col justify-center float-right">
                                        <h2 className="dark:text-gray-200 text-gray-800 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                                        <p className="text-gray-500 text-sm font-black">Senior Designer</p>
                                    </div>
                                </div>
                                <p className="leading-relaxed text-left dark:text-gray-100">One of the best educational website I have ever visited the course contents are very unique & informative.</p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                            </div>
                        </div>
                    </div>

                    <div className="p-2 md:w-1/4">
                        <div className="flex rounded-lg bg-white p-6 dark:bg-gray-800 flex-col align-center">
                            <div className="h-full text-center mx-auto">
                                <div className="flex flex-row justify-evenly align-center mb-8">
                                    <img alt="testimonial" className="w-20 h-20 object-cover object-center rounded-full inline-block border-4 border-gray-200 dark:border-gray-700 p-1 float-left" src={testimonial_4} />
                                    <div className="text-left flex flex-col justify-center float-right">
                                        <h2 className="dark:text-gray-200 text-gray-800 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                                        <p className="text-gray-500 text-sm font-black">Senior Designer</p>
                                    </div>
                                </div>
                                <p className="leading-relaxed text-left dark:text-gray-100">One of the best educational website I have ever visited the course contents are very unique & informative.</p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                            </div>
                        </div>
                    </div>
                </div>               
            </div>
        </div>
    );
};

export default Home;