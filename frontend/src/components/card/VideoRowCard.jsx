import React from 'react'

function VideoRowCard(props) {
    return (
        <div class='my-4'>
            <div class="flex">
                <img src={`http://localhost:3001/api/uploads/thumbnails/${props.thumbnail_name}`} width="100%" alt="" class="w-2/5"/>
                <div class="w-3/5 mx-4">
                    <h1 class="title-font text-l  font-medium text-gray-900 dark:text-gray-100  ">{props.title}</h1>
                    <p class="leading-relaxed text-xs  pt-1  dark:text-gray-400">{props.description.substring(0,60)} ...</p>
                </div>
            </div>
        </div>
    )
}

export default VideoRowCard
