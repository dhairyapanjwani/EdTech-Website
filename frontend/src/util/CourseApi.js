import axios from "axios";

const url = "http://localhost:3001/api/courses";

const CourseApi = {
  allCourses: async () => {
    const data = await axios.get(`${url}/all`);
    console.log(await data);
  },
};

export default CourseApi;
