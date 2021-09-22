import React from 'react'
import { Link } from 'react-router-dom';

function VideoStepCard(props) {
    return (
        <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-800 dark:bg-gray-600 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">{props.index+2}</div>
                <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row"></div>
        <Link to={`/video/${props._id}`}>
        <div class='my-4'>
            <div class="flex">
                <img src={`http://localhost:3001/api/uploads/thumbnails/${props.thumbnail_name}`} width="100%" alt="" class="w-2/5"/>
                <div class="w-3/5 mx-4">
                    <h1 class="title-font text-3xl  font-bold text-gray-900 dark:text-gray-100  ">{props.title}</h1>
                    <p class="leading-relaxed text-xs  pt-1  dark:text-gray-400">{props.description}</p>
                    <span class="text-gray-800 dark:text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-600 dark:border-gray-400">
                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                    </svg>{props.views}
                    </span>

                    <span class="text-gray-800 dark:text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>{props.comments.length}
                    </span>
                </div>
            </div>
        </div>
        </Link>
    </div>
    
    )
}

export default VideoStepCard
