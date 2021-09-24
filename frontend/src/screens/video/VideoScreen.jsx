import React,{useState,useEffect} from 'react'
import ReactPlayer from 'react-player';
import Navbar from '../../components/navbar/Navbar';
import VideoRowCard from '../../components/card/VideoRowCard';
import Comment from '../../components/comment/Comment';
import './VideoScreen.css'
import Axios from 'axios'
import {Link,useHistory} from 'react-router-dom';
import { GlobalContext } from '../../GlobalContext';

function VideoScreen({match}) {
    
    const history=useHistory();
    const [video,setVideo]=useState({
        title:"",
        courseId:"",
        description:"",
        comments:[],
    })
    const [course,setCourse]=useState({
        title:"",
        description:"",
        amount:0,
        rating:[0,0,0,0,0],
        cover_name:"",
        attachment_name:"",
        likes:[],
    });
    const [videoList,setVideoList]=useState([])
    const [comment,setComment]=useState("");
    const [change,setChange]=useState(false);


    const  handleSubmission=(event)=>{
        event.preventDefault();
        if(comment!=""){
        console.log("submitted")
        Axios.put('http://localhost:3001/api/video/comment',
        {
            userId:JSON.parse(localStorage.getItem("edtech-user"))._id,
            profile:JSON.parse(localStorage.getItem("edtech-user")).profile,
            text:comment,
            videoId:match.params.id,
            name:JSON.parse(localStorage.getItem("edtech-user")).first_name,
        }
        ).then(()=>{
            setComment("");
            setChange(!change);
        })
    }
        
        
        
    }
    
    useEffect(()=>{
        console.log("changes")
        Axios.get(`http://localhost:3001/api/video/single/${match.params.id}`)
        .then((response)=>{
            setVideo(response.data.video)
            Axios.get(`http://localhost:3001/api/video/course/${response.data.video.courseId}`)
            .then((response)=>{
                setVideoList(response.data.videos);
            })

            Axios.get(`http://localhost:3001/api/course/single/${response.data.video.courseId}`)
            .then((response)=>{
            setCourse({
                title:response.data.course.title,
                description:response.data.course.description,
                amount:response.data.course.amount,
                rating:response.data.course.rating,
                cover_name:response.data.course.cover_name,
                attachment_name:response.data.course.attachment_name,
                likes:response.data.course.likes,
                })
            })
        })
    },[window.location.href,change])

    
    return (
        <div className="bg-gray-50 dark:bg-gray-800">
            <Navbar />
            <div className="flex justify-center">
            <div className="flex w-11/12">
                <div className="width_640 flex-none w-2/3">
                    <div className="px-12 pt-8">
                        <ReactPlayer 
                        width="100%"
                        height="100%"
                        url={`http://localhost:3001/api/uploads/videos/${video.video_name}`}
                        playing
                        controls 
                        />
                    </div>
                    <div className="flex pt-2 px-12">
                        <h1 className="title-font text-2xl  font-medium text-gray-900 dark:text-gray-100  ">{video.title}</h1>

                        <span className="text-gray-800 dark:text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-600 dark:border-gray-400">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>1.2K
                        </span>

                        <span className="text-gray-800 dark:text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>{video.comments.length}
                        </span>
                        
                    </div>

                    <p className="leading-relaxed px-12 pt-2 mb-2 dark:text-gray-400">{video.description}</p>

                    <div className="width-full bg-gray-400 h-px my-4 mx-12 dark:bg-gray-600"></div>

                    <div className="mx-12 flex justify-between">
                        
                        <div className="flex w-full items-center">
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 dark:border-white border-gray-900">
                                <img src="http://localhost:3001/api/uploads/cover/test.jpg" alt="" className="w-full h-full object-cover"/>
                            </div>
                            <div>
                            <h1 className="title-font ml-2 text-2xl font-medium text-gray-900 dark:text-gray-100  ">{course.title}</h1>
                            <div className="ml-2 mt-1">
                            <span className="text-gray-800 dark:text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-600 dark:border-gray-400">
                                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>{course.likes.length}
                            </span>
                            <span className="text-gray-800 dark:text-gray-400 inline-flex items-center leading-none text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>{course.rating}
                            </span>
                            </div>
                            </div>
                        </div>
                        <button 
                                type="button" 
                                className="px-4 py-3 bg-indigo-500 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform  flex justify-center w-1/3 h-1/3"
                                onClick={()=>{history.push('/editor')}}
                            >
                                {/* <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg> */}
                                <span className="">Open editor</span>
                        </button>
                    </div>

                    <div className="width-full bg-gray-400 h-px my-4 mx-12 dark:bg-gray-600"></div>

                    <div className="px-12">

                    <form  onSubmit={handleSubmission}>
                        <div className="relative flex flex-wrap items-stretch my-4 my-8 w-full mr-4 ">
                            <input type="text" placeholder="Add a public comment..." className="px-3 py-3 placeholder-gray-800 border-gray-800 text-gray-600 relative bg-white bg-white dark:bg-gray-700 dark:placeholder-gray-300 dark:border-gray-600 dark:text-gray-300 rounded text-md border border-blueGray-300 outline-none focus:outline-none focus:ring w-full pl-10" value={comment} onChange={(event)=>{setComment(event.target.value)}}/>
                        </div>
                        <input type="submit" style={{display:'none'}}/>
                        
                    </form>

                    <div>
                        {video.comments.slice(0).reverse().map((comment,index)=>(
                            <Comment
                                comment={comment}
                            />
                            
                        ))}
                        </div>
                        
                    </div>
                </div>

                {/* video list */}
                <div className="flex-none w-1/3">
                    <div className="pt-8">
                        <div className="flex justify-between">
                            <h1 className="title-font text-2xl font-medium text-gray-900 dark:text-gray-100  w-7/12">{course.title}</h1>
                            <div>
                            <button 
                                type="button" 
                                className="px-4 py-3 bg-indigo-500 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform  flex"
                                onClick={()=>{history.push(`/courses/${video.courseId}`)}}
                            >
                                <span className="">Go to Course</span>
                            </button>
                            </div>
                        </div>
                        <div className="width-full bg-gray-400 h-px my-4 dark:bg-gray-600"></div>
                        {videoList.map((video,index)=>(
                            
                        <Link to={`/video/${video._id}`}>
                        <VideoRowCard
                            _id={video._id}
                            title={video.title}
                            description={video.description}
                            views={video.views}
                            comments={video.comments}
                            thumbnail_name={video.thumbnail_name}
                            index={index}
                            // onClick={()=>{history.push(`/video/${video._id}`)}}
                        /> 
                        </Link>
                    
                        ))}
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default VideoScreen
