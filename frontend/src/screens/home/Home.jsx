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
                        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                        <div class="flex items-center mb-3">
                            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                            </div>
                            <h2 class="text-gray-900 text-lg title-font font-medium">Shooting Stars</h2>
                        </div>
                        <div class="flex-grow">
                            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                            <a class="mt-3 text-blue-500 inline-flex items-center">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                            </a>
                        </div>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/3">
                        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                        <div class="flex items-center mb-3">
                            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            </div>
                            <h2 class="text-gray-900 text-lg title-font font-medium">The Catalyzer</h2>
                        </div>
                        <div class="flex-grow">
                            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                            <a class="mt-3 text-blue-500 inline-flex items-center">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                            </a>
                        </div>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/3">
                        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                        <div class="flex items-center mb-3">
                            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <circle cx="6" cy="6" r="3"></circle>
                                <circle cx="6" cy="18" r="3"></circle>
                                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                            </svg>
                            </div>
                            <h2 class="text-gray-900 text-lg title-font font-medium">Neptune</h2>
                        </div>
                        <div class="flex-grow">
                            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                            <a class="mt-3 text-blue-500 inline-flex items-center">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                            </a>
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