import React,{useState,useEffect,useRef} from 'react'
import Navbar from '../../components/navbar/Navbar'
import VideoStepCard from '../../components/card/VideoStepCard';
import './CourseOverview.css'
import Axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';


function CourseOverview({match}) {
    const [course,setCourse]=useState({
        title:"",
        description:"",
        amount:0,
        rating:[0,0,0,0,0],
        cover_name:"",
        attachment_name:""
    });
    const [videoList,setVideoList]=useState([]);
    useEffect(()=>{
        Axios.get(`http://localhost:3001/api/course/single/${match.params.id}`)
        .then((response)=>{
            console.log(response.data)
            setCourse({
                title:response.data.course.title,
                description:response.data.course.description,
                amount:response.data.course.amount,
                rating:[0,0,0,0,0].fill(1, 0, response.data.course.rating),
                cover_name:response.data.course.cover_name,
                attachment_name:response.data.course.attachment_name,
            })
        })
        .catch((err)=>{
            console.log(err)
        })

        Axios.get(`http://localhost:3001/api/video/course/${match.params.id}`)
        .then((response)=>{
            console.log(response.data)
            setVideoList(response.data.videos)
        })
        .catch((err)=>{
            console.log(err)
        })

    },[])

    const scrollRef = useRef(null)
    const executeScroll = () => scrollRef.current.scrollIntoView()
    const history = useHistory();
    const param = useParams();
    return (
        <div className="bg-gray-50 dark:bg-gray-800 ">
            <Navbar/>
            <div  class=" set_height  bg-cover bg-no-repeat max-w-full  bg-local ..."  style={{ 
            backgroundImage: `url("http://localhost:3001/api/uploads/cover/${course.cover_name}")`, 
            }}>
                <div class="set_opacity h-full w-full">
                <div class="set_margin"></div>
                <div class="ml-10">
                    <h1 class="title-font text-4xl font-bold mb-2 text-gray-100  ">{course.title}</h1>
                    <p class="leading-relaxed mb-4 text-gray-400">{course.description}</p>
                    <div class="flex mb-4">
                    {course.rating.map((item, index) => (
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
            <h1 class="title-font text-3xl  font-bold text-gray-900 dark:text-gray-100  ">{course.title}</h1>
            <p class="leading-relaxed text-sm  pt-1  dark:text-gray-400">Get this course @ just Rs. {course.amount}/-</p>
            </div>
            <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-800 dark:bg-gray-600 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
                <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row"></div>
                    <div class="">
                    <div class="flex-shrink-0 w-24 h-24 bg-gray-700 text-indigo-400 rounded-full inline-flex items-center justify-center">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                    </div>
                    <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <a href={`http://localhost:3001/api/uploads/attachments/${course.attachment_name}`} target="_blank" class="text-indigo-500 inline-flex items-center mt-4 md:mb-2 lg:mb-0">Study Material
                      <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <p class="leading-relaxed text-sm  pt-1 pr-96  dark:text-gray-400">This study material will act your guide throughout this course</p>
                    </div>
                    </div>
    </div>
                    {videoList.map((video,index)=>(
                        

                            <VideoStepCard
                                _id={video._id}
                                title={video.title}
                                description={video.description}
                                views={video.views}
                                comments={video.comments}
                                thumbnail_name={video.thumbnail_name}
                                index={index}
                            /> 

                    
                        
                    ))}
                <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-800 dark:bg-gray-600 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">{videoList.length+2}</div>
                <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row"></div>
                    <div class="">
                    <div class="flex-shrink-0 w-24 h-24 bg-gray-700 text-indigo-400 rounded-full inline-flex items-center justify-center">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                    </div>
                    <div class="flex-grow sm:pl-6 mt-6 sm:mt-0" onClick={() => history.push(`${param.id}/quiz`)}>
                    <a class="text-indigo-500 inline-flex items-center mt-4 md:mb-2 lg:mb-0">Start Quiz
                      <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <p class="leading-relaxed text-sm  pt-1 pr-96  dark:text-gray-400">This quiz will help you test your skills and improve your weak topics </p>
                    </div>
                    </div>
    </div>
            </div>
        </div>
    )
}

export default CourseOverview
