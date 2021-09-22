import React,{useState,useEffect,useRef} from 'react'
import Navbar from '../../components/navbar/Navbar'
import VideoStepCard from '../../components/card/VideoStepCard';
import './CourseOverview.css'

function CourseOverview() {
    const [rating,setRating]=useState([0,0,0,0,0]);
    // useEffect(()=>{
    //     setRating(rating.fill(1,0,3));
    // },[rating])
    const scrollRef = useRef(null)
    const executeScroll = () => scrollRef.current.scrollIntoView()
    return (
        <div className="bg-gray-50 dark:bg-gray-800 ">
            <Navbar/>
            <div  class=" set_height  bg-cover bg-no-repeat max-w-full  bg-local ..."  style={{ 
            backgroundImage: `url("https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80")`, 
            }}>
                <div class="set_opacity h-full w-full">
                <div class="set_margin"></div>
                <div class="ml-10">
                    <h1 class="title-font text-4xl font-bold mb-2 text-gray-100  ">ReactJS for beginners</h1>
                    <p class="leading-relaxed mb-4 text-gray-400">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    <div class="flex mb-4">
                    {rating.map((item, index) => (
                        <span className="indent" key={index}>
                            <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill={item==1?"currentColor":"none"} stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                            </span>
                        </span>
                    ))}
                    </div>
                    <div class="flex w-1/3 ">
                        <button 
                            type="button" 
                            class="px-4 py-3 bg-indigo-500 border-2 border-indigo-500 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform  flex justify-center w-1/3 h-1/3 mr-4"
                        >
                            <span class="">Enroll now</span>
                        </button>
                        <button 
                            onClick={executeScroll}
                            type="button" 
                            class="px-4 py-3 bg-transparent border-2 border-indigo-500 rounded-md text-white  focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform  flex justify-center w-1/3 h-1/3 "
                        >
                            <span ref={scrollRef} class="">More details</span>
                        </button>
                    </div>
                </div>
                </div>
            </div>
            {/* _________________________________________________ */}
            <div  class="w-full mt-16 flex flex-col items-center">
            <h1 class="title-font text-3xl  font-bold text-gray-900 dark:text-gray-100  ">ReactJs for beginners.</h1>
            <p class="leading-relaxed text-sm  pt-1  dark:text-gray-400">Get this course @ just Rs. 999/-</p>
            </div>
            <div class="container px-5 py-24 mx-auto flex flex-wrap">
                <VideoStepCard/>
                <VideoStepCard/>
                <VideoStepCard/>
                <VideoStepCard/>
                <VideoStepCard/>
            </div>
        </div>
    )
}

export default CourseOverview
