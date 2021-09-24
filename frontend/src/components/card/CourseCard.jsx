import React, { useState, useEffect, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { GlobalContext } from '../../GlobalContext';

import CourseApi from "../../util/CourseApi";

const CourseCard = props => {
  const { courseSelection } = useContext(GlobalContext);
  const [courseSelect, setCourseSelect] = courseSelection;
  const history = useHistory();
  console.log(props.course);
  const { title, category, description, cover_name, rating, enrolled, _id } = props.course;
  const [img, setImg] = useState();
  const [likes, setLikes] = useState([]);
  const [present, setPresent] = useState(false);
  useEffect(() => {
    const fetchImg = async () => {
      const cover_img = await CourseApi.courseImg(cover_name);
      setImg(cover_img.config.url);

      const like = await CourseApi.getLiked('614adf467e4020a62c1b157d');
      console.log('20', like.data.courses);
      setLikes(like.data.courses);
      
      like.data.courses.map(elem => elem.likes.includes('614adf467e4020a62c1b157d') && setPresent(true))
      console.log(like.data.courses.map(elem => elem.likes.includes('614adf467e4020a62c1b157d')));
    };
    fetchImg();
  }, [courseSelect, cover_name]);
  useEffect(() => {
    console.log('present', present)
    const toggler = async () => {
      const data = await CourseApi.likeIt('614adf467e4020a62c1b157d', _id);
      console.log('CCJSX30', data.data.course.likes);
      setLikes(data.data.course.likes);
    };

    toggler();
  }, [present]);
    return (
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 dark:border-gray-600 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={img} alt="blog" onClick={() => history.push(`/courses/${_id}`)} style={{ cursor: 'pointer' }}/>
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 uppercase" onClick={() => history.push(`/courses/${_id}`)} style={{ cursor: 'pointer' }}>{category}</h2>
                  {/* <div className="flex flex-row justify-between align-center">
                    <div className="text-indigo-500 text-base mt-1 underline">Add to Cart</div>
                  </div> */}
                  <h1 className="title-font text-lg font-medium text-gray-900 dark:text-gray-200 mb-3" onClick={() => history.push(`/courses/${_id}`)} style={{ cursor: 'pointer' }}>{title}</h1>
                  <p className="leading-relaxed mb-3 dark:text-gray-500 float-none" onClick={() => history.push(`/courses/${_id}`)} style={{ cursor: 'pointer' }}>{description}</p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200" onClick={() => {
                      setPresent(!present);
                    }}>
                      {present === true ? (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                      </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>)}
                      {likes.length}
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>{rating}
                    </span>
                  </div>
                </div>
              </div>
            </div>
    );
};

export default CourseCard;