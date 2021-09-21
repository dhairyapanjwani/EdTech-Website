import React from 'react';

import Navbar from '../../components/navbar/Navbar';
import './home.css';
// import video from './live_background.mp4'
import home_illustrations from './a1.svg'
import { Button } from 'react-bootstrap';

const Home = () => {
    return (
        <div className="bg-gray-50 dark:bg-gray-800" >
            {/* <video src={video} width="750" height="500" controls/> */}
            <Navbar />
            
            <div class="grid grid-cols-6 gap-4">
                <div class="col-start-3 col-end-7 ">
                    <img src={home_illustrations} alt="" class='object-scale-down h-96 w-3/5 -mx-8' />
                </div>
                <div class="col-start-1 col-end-7 ">
                <div class="container mx-auto">
                <div class="flex flex-col text-center w-full">
                <h1 class="sm:text-3xl text-2xl font-medium title-font text-black font-bold dark:text-white">The world's largest selection of courses</h1>
                </div>
                </div>
                    <Button href="/courses" className="button-styles flex lg:w-70 mx-auto mt-6 mb-6 text-gray-800 py-2 px-12 border-gray-500 border-2 focus:outline-none hover:bg-gray-300 text-lg dark:text-gray-300 dark:hover:bg-gray-600">Browse Courses</Button>
                    {/* <button className="button-styles flex lg:w-70 mx-auto mt-6 mb-6 text-gray-800 py-2 px-12 border-gray-500 border-2 focus:outline-none hover:bg-gray-300 text-lg dark:text-gray-300 dark:hover:bg-gray-600">Browse Courses</button> */}
                </div>
            </div>

            <section class="text-gray-600 body-font">
                <div class="container px-5 mx-auto flex items-center lg:w-3/5 mx-auto border-b-2 pb-10 border-gray-300 sm:flex-row flex-col"></div>
            </section>

            <section class="text-gray-600 body-font">
                <div class="container px-5 py-10 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                    <h2 class="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">Expert courses</h2>
                    <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 dark:text-gray-100">Explore a variety of courses and gain new skills</h1>
                    </div>
                    <div class="flex flex-wrap -m-4">
                    
                        <div class="p-4 md:w-1/3">
                            <div class="h-full bg-gray-100 rounded-lg overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="" alt="blog" />
                                <div class="p-6">
                                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 uppercase">category{}</h2>
                                    <h1 class="title-font text-lg font-medium text-gray-900 dark:text-gray-200 mb-3">title{}</h1>
                                    <p class="leading-relaxed mb-3 dark:text-gray-500">description{}</p>
                                    <div class="flex items-center flex-wrap ">
                                        <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                        </a>
                                        <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>1.2K
                                        </span>
                                        <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>{}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3">
                            <div class="h-full bg-gray-100 rounded-lg overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="" alt="blog" />
                                <div class="p-6">
                                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 uppercase">category{}</h2>
                                    <h1 class="title-font text-lg font-medium text-gray-900 dark:text-gray-200 mb-3">title{}</h1>
                                    <p class="leading-relaxed mb-3 dark:text-gray-500">description{}</p>
                                    <div class="flex items-center flex-wrap ">
                                        <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                        </a>
                                        <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>1.2K
                                        </span>
                                        <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>{}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="p-4 md:w-1/3">
                            <div class="h-full bg-gray-100 rounded-lg overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="" alt="blog" />
                                <div class="p-6">
                                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 uppercase">category{}</h2>
                                    <h1 class="title-font text-lg font-medium text-gray-900 dark:text-gray-200 mb-3">title{}</h1>
                                    <p class="leading-relaxed mb-3 dark:text-gray-500">description{}</p>
                                    <div class="flex items-center flex-wrap ">
                                        <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                        </a>
                                        <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>1.2K
                                        </span>
                                        <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>{}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    
                    {/* <button class=" button-styles flex lg:w-70 mx-auto mt-6 mb-16 text-gray-800 py-2 px-12 border-gray-500 border-2 focus:outline-none text-lg hover:bg-gray-300 text-lg dark:text-gray-300 dark:hover:bg-gray-600">View more courses</button> */}
                    <Button href="/courses" className="button-styles1 flex lg:w-70 mx-auto mt-6 mb-6 text-gray-800 py-2 px-12 border-gray-500 border-2 focus:outline-none hover:bg-gray-300 text-lg dark:text-gray-300 dark:hover:bg-gray-600">View more courses</Button>
                    </div>
                    
                    
                </div>
            </section>
            <div class="testimonals-bg dark:bg-gray-600">

            <h1 class="text-3xl font-medium title-font text-gray-900 mb-5 text-center px-5 py-10 mx-auto dark:text-gray-100">Testimonials</h1>

                <div class="flex flex-wrap -m-4">
                
                    <div class="p-4 md:w-1/3">
                        <div class="flex rounded-lg h-full bg-white p-8 flex-col">
                            <div class="h-full text-center">
                                <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/302x302" />
                                <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                                <p class="text-gray-500">Senior Product Designer</p>
                            </div>
                        
                        </div>
                    </div>

                    <div class="p-4 md:w-1/3">
                        <div class="flex rounded-lg h-full bg-white p-8 flex-col">
                            <div class="h-full text-center">
                                <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/302x302" />
                                <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                                <p class="text-gray-500">Senior Product Designer</p>
                            </div>
                        
                        </div>
                    </div>
                    <div class="p-4 md:w-1/3">
                        <div class="flex rounded-lg h-full bg-white p-8 flex-col">
                            <div class="h-full text-center">
                                <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/302x302" />
                                <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                                <p class="text-gray-500">Senior Product Designer</p>
                            </div>
                        
                        </div>
                    </div>
                    
                </div>               
                
            </div>
        </div>
    );
};

export default Home;