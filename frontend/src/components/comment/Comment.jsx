import React from 'react'
import { timeAgo } from './timeAgo'

function Comment({comment}) {
    return (
        <div className="mb-8">
            <div className="flex mx-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 dark:border-white border-gray-900">
                    <img src={`http://localhost:3001/api/uploads/profile/${comment.profile}`} alt="" className="w-full h-full object-cover"/>
                </div>
                <div>
                    <h1 className="title-font ml-2 text-base font-medium text-gray-900 dark:text-gray-100  ">{comment.name}</h1>
                    <p className="text-xs ml-2 dark:text-gray-400">{timeAgo(parseInt(comment.date))}</p>
                </div>    
            </div>

            <div className="flex mx-4">
                <div className="w-12"></div>
                <div>
                    <p className="text-base ml-2 mt-2 dark:text-gray-200">
                        {comment.text}
                    </p>
                    
                </div>
                
            </div>
            <div className="width-full bg-gray-300 h-px my-4 ml-16 mr-4 dark:bg-gray-700"></div>
        </div>
    )
}

export default Comment
