import React,{useState,useEffect} from 'react'
import ReactPlayer from 'react-player';
import Navbar from '../../components/navbar/Navbar';
import VideoRowCard from '../../components/card/VideoRowCard';
import Comment from '../../components/comment/Comment';

function VideoScreen() {
    const videoId=""
    return (
        <div className="bg-gray-50 dark:bg-gray-800">
            <Navbar />
            <div className="flex justify-center">
            <div className="flex w-11/12">
                <div class="flex-none w-2/3">
                    <div className="px-12 pt-8">
                        <ReactPlayer 
                        width="100%"
                        height="100%"
                        url='http://localhost:3001/api/uploads/videos/big_buck_bunny_720p_1mb.mp4'
                        playing
                        controls 
                        />
                    </div>
                    <div class="flex pt-2 px-12">
                        <h1 class="title-font text-2xl  font-medium text-gray-900 dark:text-gray-100  ">ReactJS from basic to advance.</h1>

                        <span class="text-gray-800 dark:text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-600 dark:border-gray-400">
                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>1.2K
                        </span>

                        <span class="text-gray-800 dark:text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>6
                        </span>
                        
                    </div>

                    <p class="leading-relaxed px-12 pt-2 mb-2 dark:text-gray-400">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>

                    <div class="width-full bg-gray-400 h-px my-4 mx-12 dark:bg-gray-600"></div>

                    <div class="mx-12 flex justify-between">
                        
                        <div class="flex w-full items-center">
                            <div class="w-12 h-12 rounded-full overflow-hidden border-2 dark:border-white border-gray-900">
                                <img src="https://images.unsplash.com/photo-1610397095767-84a5b4736cbd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" class="w-full h-full object-cover"/>
                            </div>
                            <div>
                            <h1 class="title-font ml-2 text-2xl font-medium text-gray-900 dark:text-gray-100  ">ReactJS for beginners</h1>
                            <div class="ml-2 mt-1">
                            <span class="text-gray-800 dark:text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-600 dark:border-gray-400">
                                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>1.2K
                            </span>
                            <span class="text-gray-800 dark:text-gray-400 inline-flex items-center leading-none text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>3
                            </span>
                            </div>
                            </div>
                        </div>
                        <button 
                                type="button" 
                                class="px-4 py-3 bg-indigo-500 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform  flex w-1/3 h-1/3"
                            >
                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                <span class="">Study material</span>
                        </button>
                    </div>

                    <div class="width-full bg-gray-400 h-px my-4 mx-12 dark:bg-gray-600"></div>

                    <div class="px-12">
                        <div className="relative flex flex-wrap items-stretch my-4 my-8 w-full mr-4 ">
                            <input type="text" placeholder="Add a public comment..." className="px-3 py-3 placeholder-gray-800 border-gray-800 text-gray-600 relative bg-white bg-white dark:bg-gray-700 dark:placeholder-gray-300 dark:border-gray-600 dark:text-gray-300 rounded text-md border border-blueGray-300 outline-none focus:outline-none focus:ring w-full pl-10"/>
                        </div>
                        <div>
                            <Comment/>
                            <Comment/>
                            <Comment/>
                            <Comment/>
                            <Comment/>
                        </div>

                    </div>
                </div>

                {/* video list */}
                <div className="flex-none w-1/3">
                    <div class="pt-8">
                        <div class="flex justify-between">
                            <h1 class="title-font text-2xl font-medium text-gray-900 dark:text-gray-100  w-7/12">ReactJS for beginners</h1>
                            <div>
                            <button 
                                type="button" 
                                class="px-4 py-3 bg-indigo-500 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform  flex"
                            >
                                <span class="">Go to Course</span>
                            </button>
                            </div>
                        </div>
                        <div class="width-full bg-gray-400 h-px my-4 dark:bg-gray-600"></div>
                        <VideoRowCard/>
                        <VideoRowCard/>
                        <VideoRowCard/>
                        <VideoRowCard/>
                        <VideoRowCard/>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default VideoScreen
