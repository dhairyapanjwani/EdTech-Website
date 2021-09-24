import axios from "axios";

const url = "http://localhost:3001/api/quiz";

const QuizApi = {
  getResult: async (userId) => {
    const data = await axios.get(`${url}/getresult/${userId}`);
    console.log(data.data);
    return data;
  },
};

export default QuizApi;
