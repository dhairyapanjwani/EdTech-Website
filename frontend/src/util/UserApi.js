import axios from "axios";

const url = "http://localhost:3001/api/uploads/profile";

const UserApi = {
  getProfileImg: async (profile) => {
    const data = await axios.get(`${url}/${profile}`);
    console.log(data.data);
    return data;
  },
};

export default UserApi;
