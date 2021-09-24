import React from 'react'

function VideoRowCard(props) {
    return (
        <div className='my-4'>
            <div className="flex">
                <img src={`http://localhost:3001/api/uploads/thumbnails/${props.thumbnail_name}`} width="100%" alt="" className="w-2/5"/>
                <div className="w-3/5 mx-4">
                    <h1 className="title-font text-l  font-medium text-gray-900 dark:text-gray-100  ">{props.title}</h1>
                    <p className="leading-relaxed text-xs  pt-1  dark:text-gray-400">{props.description.substring(0,60)} ...</p>
                </div>
            </div>
        </div>
    )
}

export default VideoRowCard
