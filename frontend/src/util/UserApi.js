import axios from "axios";

const url = "http://localhost:3001/api/uploads/profile";

const UserApi = {
  getProfileImg: async (profile) => {
    const data = await axios.get(`${url}/${profile}`);
    console.log(data.data);
    return data;
  },
  getLeaderboard: async () => {
    const data = await axios.get(`http://localhost:3001/api/user/ranked`);
    console.log("leaderboard", data.data.users);
    return data;
  },
};

export default UserApi;
