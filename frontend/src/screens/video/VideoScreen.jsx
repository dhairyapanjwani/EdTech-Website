import React,{useState,useEffect} from 'react'
import ReactPlayer from 'react-player'
import Navbar from '../../components/navbar/Navbar';
import VideoRowCard from '../../components/card/VideoRowCard';

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
                        // playing
                        // controls 
                        />
                    </div>
                    <div class="flex pt-2 px-12">
                        <h1 class="title-font text-2xl  font-medium text-gray-900 dark:text-gray-100  ">ReactJS from basic to advance.</h1>

                        <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>1.2K
                        </span>

                        <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>6
                        </span>
                        
                    </div>
                    <p class="leading-relaxed px-12 pt-2 mb-10 dark:text-gray-400">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>

                {/* video list */}
                <div className="flex-none w-1/3">
                    <div class="pt-8">
                        <div class="flex justify-between">
                            <h1 class="title-font text-2xl font-medium text-gray-900 dark:text-gray-100  w-7/12">Getting started with ReactJS</h1>
                            <div>
                            <button 
                                type="button" 
                                class="px-4 py-3 bg-indigo-500 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform  flex"
                            >
                                <span class="">Go to Course</span>
                            </button>
                            </div>
                        </div>
                        <div class="width-full bg-gray-200 h-px my-4"></div>
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
