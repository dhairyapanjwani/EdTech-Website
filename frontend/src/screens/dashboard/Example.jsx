import React from 'react';
import Navbar from '../../components/navbar/Navbar';

const Example = () => {
    return (
        <div className="bg-gray-50 dark:bg-gray-800" >
            <Navbar />
            <main class="bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen overflow-hidden relative">
                <div class="flex items-start justify-between">
                    <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
                        <div class="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                                <div class="flex flex-col flex-wrap sm:flex-row ">
                                    
                                    <div class="w-full sm:w-1/2 xl:w-1/3">
                                        <div class="mb-4 mx-0 sm:ml-4 xl:mr-4">
                                            <div class="shadow-lg rounded-2xl bg-white dark:bg-gray-700 w-full">
                                                <p class="font-bold text-md p-4 text-black dark:text-white">
                                                    My Tasks
                                                    <span class="text-sm text-gray-500 dark:text-gray-300 dark:text-white ml-2">
                                                        (05)
                                                    </span>
                                                </p>
                                                <ul>
                                                    <li class="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                                                        <div class="flex items-center justify-start text-sm">
                                                            <span class="mx-4">
                                                                01
                                                            </span>
                                                            <span>
                                                                Create wireframe
                                                            </span>
                                                        </div>
                                                        <svg width="20" height="20" fill="currentColor" class="mx-4 text-gray-400 dark:text-gray-300" viewBox="0 0 1024 1024">
                                                            <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" fill="currentColor">
                                                            </path>
                                                            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z" fill="currentColor">
                                                            </path>
                                                        </svg>
                                                    </li>
                                                    <li class="flex items-center text-gray-400 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                                                        <div class="flex items-center justify-start text-sm">
                                                            <span class="mx-4">
                                                                04
                                                            </span>
                                                            <span class="line-through">
                                                                Google logo design
                                                            </span>
                                                        </div>
                                                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 1024 1024" class="text-green-500 mx-4">
                                                            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" fill="currentColor">
                                                            </path>
                                                        </svg>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
    );
};

export default Example;