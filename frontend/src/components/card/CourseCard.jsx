import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

import CourseApi from "../../util/CourseApi";

const CourseCard = props => {
  const history = useHistory();
  console.log(props.course);
  const { title, category, description, cover_name, rating, enrolled, _id } = props.course;
  const [img, setImg] = useState();
  useEffect(() => {
    const fetchImg = async () => {
      const cover_img = await CourseApi.courseImg(cover_name);
      setImg(cover_img.config.url);
    };
    fetchImg();
  }, []);
    return (
            <div class="p-4 md:w-1/3" onClick={() => history.push(`courses/${_id}`)}>
              <div class="h-full border-2 border-gray-200 dark:border-gray-600 border-opacity-60 rounded-lg overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={img} alt="blog" />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 uppercase">{category}</h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 dark:text-gray-200 mb-3">{title}</h1>
                  <p class="leading-relaxed mb-3 dark:text-gray-500">{description}</p>
                  <div class="flex items-center flex-wrap ">
                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                      <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>{enrolled && enrolled.length}
                    </span>
                    <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>{rating}
                    </span>
                  </div>
                </div>
              </div>
            </div>
    );
};

export default CourseCard;