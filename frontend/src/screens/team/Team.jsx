import React from 'react';
import './Team.css';
import Navbar from '../../components/navbar/Navbar';
import ShubhNisar from "../../../src/assets/images/ShubhNisar.jpg";
import HershVitekar from "../../../src/assets/images/HershVitekar.jpg";
import KhushbuParmar from "../../../src/assets/images/KhushbuParmar.jpg";
import BhagavatirajYadav from "../../../src/assets/images/BhagavatirajYadav.jpg";
import RishabhPatil from "../../../src/assets/images/RishabhPatil.jpg";

const Team = () => {
    return (
        <div className="bg-gray-50 dark:bg-gray-800">
            <Navbar />
            <h1>
            <section className="text-gray-600 body-font">
                <div className="container pl-20 py-5 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-5xl font-medium title-font mb-4 text-gray-900 tracking-widest dark:text-gray-100 font-extrabold">OUR TEAM</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base dark:text-gray-200">Talent wins games, but teamwork and intelligence win championships. Teamwork is the ability to work together toward a common vision.</p>
                    </div>
                    <div className="flex flex-wrap">
                    <div className="p-4 lg:w-1/2">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={BhagavatirajYadav}/>
                        <div className="flex-grow sm:pl-8">
                            <h2 className="title-font font-medium text-lg text-gray-900 dark:text-gray-100">Bhagavatiraj Yadav</h2>
                            <h3 className="text-gray-500 mb-3 dark:text-gray-200">FullStack Developer</h3>
                            <p className="mb-4 dark:text-gray-300">Caption about the person</p>
                            
                            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">        
                                <a href="mailto:bhagavatiraj15@gmail.com" target="_blank" className="ml-3 text-gray-500 dark:text-gray-300">
                                    <i className="fa fa-envelope fontawesom-icon"></i>                                    
                                </a>                                
                                <a href="https://github.com/Bhagavatiraj" target="_blank" className="ml-3 text-gray-500 dark:text-gray-300">                                    
                                    <i className="fa fa-github fontawesom-icon"></i>                                    
                                </a>
                                <a href="https://www.linkedin.com/in/bhagavatiraj-yadav-a95774216" target="_blank" className="ml-3 text-gray-500 dark:text-gray-300"> 
                                    <i className="fab fa-linkedin-in fontawesom-icon"></i>                       
                                </a>                                
                                <a href="https://drive.google.com/file/d/11EPz9DZhNu-O14Qm5rzgt5wKa8KGWWX9/view?usp=sharing" target="_blank" className="ml-3 text-gray-500 dark:text-gray-300"> 
                                    <i className="fas fa-globe-asia fontawesom-icon"></i>                       
                                </a>
                            </span>
                        </div>
                        </div>
                    </div>
                                        
               <div className="p-4 lg:w-1/2">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={HershVitekar}/>
                        <div className="flex-grow sm:pl-8">
                            <h2 className="title-font font-medium text-lg text-gray-900 dark:text-gray-100">Hersh Vitekar</h2>
                            <h3 className="text-gray-500 mb-3 dark:text-gray-200">Fullstack Developer</h3>
                            <p className="mb-4 dark:text-gray-300">Caption about the person</p>
                            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">        
                                <a href="mailto:hershvitekar@gmail.com" target="_blank" className="ml-3 text-gray-500 dark:text-gray-300">
                                    <i className="fa fa-envelope fontawesom-icon"></i>                                    
                                </a>                                
                                <a href="https://github.com/hershvitekar" target="_blank" className="ml-3 text-gray-500 dark:text-gray-300">                                    
                                    <i className="fa fa-github fontawesom-icon"></i>                                    
                                </a>
                                <a href="https://www.linkedin.com/in/hersh-vitekar-aa9479a3/" target="_blank" className="ml-3 text-gray-500 dark:text-gray-300"> 
                                    <i className="fab fa-linkedin-in fontawesom-icon"></i>                       
                                </a>                                
                                <a href="https://drive.google.com/file/d/1WFuGdKmx4tjvKGwwjZPsSubEa0iER9Fa/view?usp=sharing" target="_blank" className="ml-3 text-gray-500 dark:text-gray-300"> 
                                    <i className="fas fa-globe-asia fontawesom-icon"></i>                       
                                </a>
                            </span>
                        </div>
                        </div>
                    </div>
               <div className="p-4 lg:w-1/2">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={KhushbuParmar} />
                        <div className="flex-grow sm:pl-8">
                            <h2 className="title-font font-medium text-lg text-gray-900 dark:text-gray-100">Khushbu Pamar</h2>
                            <h3 className="text-gray-500 mb-3 dark:text-gray-200">Fullstack Developer</h3>
                            <p className="mb-4 dark:text-gray-300">Caption about the person</p>
                            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">        
                                <a href="mailto:khushbu25parmar@gmail.com" target="_blank" className="ml-3 text-gray-500 dark:text-gray-300">
                                    <i className="fa fa-envelope fontawesom-icon"></i>                                    
                                </a>                                
                                <a href="https://github.com/khushbuparmar25" target="_blank" className="ml-3 text-gray-500 dark:text-gray-300">                                    
                                    <i className="fa fa-github fontawesom-icon"></i>                                    
                                </a>
                                <a href="https://www.linkedin.com/in/khushbu-parmar-aa76281b3/" target="_blank" className="ml-3 text-gray-500 dark:text-gray-300"> 
                                    <i className="fab fa-linkedin-in fontawesom-icon"></i>                       
                                </a>                                
                                <a href="https://drive.google.com/drive/u/0/folders/1_ZszdGaxKPv_IV4COwc59TLevTJp_Cr5" target="_blank" className="ml-3 text-gray-500 dark:text-gray-300"> 
                                    <i className="fas fa-globe-asia fontawesom-icon"></i>                       
                                </a>
                            </span>
                        </div>
                        </div>
                    </div>
               <div className="p-4 lg:w-1/2">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={RishabhPatil} />
                        <div className="flex-grow sm:pl-8">
                            <h2 className="title-font font-medium text-lg text-gray-900 dark:text-gray-100">Rishabh Patil</h2>
                            <h3 className="text-gray-500 mb-3 dark:text-gray-200">Fullstack Developer</h3>
                            <p className="mb-4 dark:text-gray-300">Caption about the person</p>
                            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">        
                                <a href="mailto:rishabhpatil8108@gmail.com" target="_blank" className="ml-3 text-gray-500 dark:text-gray-300">
                                    <i className="fa fa-envelope fontawesom-icon"></i>                                    
                                </a>                                
                                <a href="https://github.com/RishabhPatil02" target="_blank" className="ml-3 text-gray-500 dark:text-gray-300">                                    
                                    <i className="fa fa-github fontawesom-icon"></i>                                    
                                </a>
                                <a href="www.linkedin.com/in/rishabhpatil--" target="_blank" className="ml-3 text-gray-500 dark:text-gray-300"> 
                                    <i className="fab fa-linkedin-in fontawesom-icon"></i>                       
                                </a>                                
                                <a href="https://nobrainer.co.in/" target="_blank" className="ml-3 text-gray-500 dark:text-gray-300"> 
                                    <i className="fas fa-globe-asia fontawesom-icon"></i>                       
                                </a>
                            </span>
                        </div>
                        </div>
                    </div>
               <div className="p-4 lg:w-1/2">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={ShubhNisar} />
                        <div className="flex-grow sm:pl-8">
                            <h2 className="title-font font-medium text-lg text-gray-900 dark:text-gray-100">Shubh Nisar</h2>
                            <h3 className="text-gray-500 mb-3 dark:text-gray-200">Fullstack Developer</h3>
                            <p className="mb-4 dark:text-gray-300">Caption about the person</p>
                            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">   
                                <a href="mailto:shubhnisar123@gmail.com" target="_blank" className="ml-3 text-gray-500 dark:text-gray-300">
                                    <i className="fa fa-envelope fontawesom-icon"></i>                                    
                                </a>                                
                                <a href="https://github.com/Shubh-Nisar" target="_blank" className="ml-3 text-gray-500 dark:text-gray-300">                                    
                                    <i className="fa fa-github fontawesom-icon"></i>                                    
                                </a>
                                <a href="https://www.linkedin.com/in/shubh-nisar-89a6a31aa/" target="_blank" className="ml-3 text-gray-500 dark:text-gray-300"> 
                                    <i className="fab fa-linkedin-in fontawesom-icon"></i>                       
                                </a>                                
                                <a href="https://shubh-nisar.github.io" target="_blank" className="ml-3 text-gray-500 dark:text-gray-300"> 
                                    <i className="fas fa-globe-asia fontawesom-icon"></i>                       
                                </a>
                            </span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            </h1>
        </div>
    );
};

export default Team;