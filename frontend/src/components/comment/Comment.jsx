import React from 'react'

function Comment() {
    return (
        <div class="mb-8">
            <div class="flex mx-4">
                <div class="w-12 h-12 rounded-full overflow-hidden border-2 dark:border-white border-gray-900">
                    <img src="https://images.unsplash.com/photo-1610397095767-84a5b4736cbd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" class="w-full h-full object-cover"/>
                </div>
                <div>
                    <h1 class="title-font ml-2 text-base font-medium text-gray-900 dark:text-gray-100  ">Rishabh Patil</h1>
                    <p class="text-xs ml-2 dark:text-gray-400">5 min ago</p>
                </div>    
            </div>

            <div class="flex mx-4">
                <div class="w-12"></div>
                <div>
                    <p class="text-base ml-2 mt-2 dark:text-gray-400">
                        Liked this course, lorem ipsum lorem ipsum loremskjccc sfjkfbjbkjsb jsdkn sjbk sfjdhk ifsdhk djksf ipsum lorem ipsum.
                    </p>
                    <div class="width-full bg-gray-300 h-px my-4  dark:bg-gray-700"></div>
                </div>
            </div>
            
        </div>
    )
}

export default Comment
