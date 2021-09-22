import axios from "axios";

const url = "http://localhost:3001/api/quiz";

const CourseApi = {
  getResult: async () => {
    const data = await axios.get(`${url}/getresult`, {
      userId: "614adf467e4020a62c1b157d",
      courseId: "6148ba6ed7911999af5774f4",
    });
    return data;
  },
};

export default CourseApi;
