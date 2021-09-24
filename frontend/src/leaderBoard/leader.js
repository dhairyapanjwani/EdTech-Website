import React, { Component, createContext, useState, useEffect } from "react";
import Index from "./topper.jsx";
import Navbar from "../../src/components/navbar/Navbar.jsx";
import "./lead.css";
import Footer from "../components/Footer/Footer.jsx";
import UserApi from "../util/UserApi.js";

const leader = [
  {
    rank: 1,
    Name: "Bhagavatiraj Yadav",
    Username: "bhags15",
    Points: "900",
    HighestPoints: "2000",
  },
  {
    rank: 1,
    Name: "Bhagavatiraj Yadav",
    Username: "bhags15",
    Points: "900",
    HighestPoints: "2000",
  },
  {
    rank: 1,
    Name: "Bhagavatiraj Yadav",
    Username: "bhags15",
    Points: "900",
    HighestPoints: "2000",
  },
  {
    rank: 1,
    Name: "Bhagavatiraj Yadav",
    Username: "bhags15",
    Points: "900",
    HighestPoints: "2000",
  },
  {
    rank: 1,
    Name: "Bhagavatiraj Yadav",
    Username: "bhags15",
    Points: "900",
    HighestPoints: "2000",
  },
  {
    rank: 2,
    Name: "Rohit Sharma",
    Username: "Imro45",
    Points: "900",
    HighestPoints: "2000",
  },
  {
    rank: 1,
    Name: "Virat Kohli",
    Username: "Imro45",
    Points: "900",
    HighestPoints: "2000",
  },
  {
    rank: 1,
    Name: "AB DeVilliers",
    Username: "Imro45",
    Points: "900",
    HighestPoints: "2000",
  },
  {
    rank: 1,
    Name: "AB DeVilliers",
    Username: "Imro45",
    Points: "900",
    HighestPoints: "2000",
  },
  {
    rank: 1,
    Name: "AB DeVilliers",
    Username: "Imro45",
    Points: "900",
    HighestPoints: "2000",
  },
  {
    rank: 1,
    Name: "AB DeVilliers",
    Username: "Imro45",
    Points: "900",
    HighestPoints: "2000",
  },
  {
    rank: 1,
    Name: "AB DeVilliers",
    Username: "Imro45",
    Points: "900",
    HighestPoints: "2000",
  },
];
// className="tab1"
export default function Example() {
  const [leadData, setLeadData] = useState([{}]);

  const highs = (id, user, highest) => {
    return {
      id: id,
      user: user,
      highest: highest,
    };
  };
  const [high, setHigh] = useState([]);
  let [largest, setLargest] = useState(18322);

  useEffect(() => {
    const fetchData = async () => {
      const data = await UserApi.getLeaderboard();
      console.log(data.data.users);
      setLeadData(data.data.users);
    };

    fetchData();
  }, []);

  const reduce = (val) => {
    return val - 1;
  };
  return (
    <div className="bg-gray-50 dark:bg-gray-800">
      <Navbar />
      <Index />
      <div className="flex items-center font-normal justify-center bg-white-800">
        <div className="w-2/3">
          <div className="overflow-auto lg:overflow-visible w-full">
            <div className="tab1">
              {/* <h2 className="text-2xl font-bold bg-indigo-500 hover:bg-blue-700 text-white py-1 px-3 sm rounded-full">Leader Board</h2>
                            

                            <div>
                                <a href="#">
                                    <button
                                        className="bg-indigo-500 hover:bg-blue-700  text-white  py-1  px-3 sm  rounded-full"
                                    >
                                        All
                                    </button>
                                </a>
                                <a href="#">
                                    <button
                                        className=" bg-indigo-500 hover:bg-blue-700 text-white py-1 px-3 sm rounded-full"
                                    >
                                        Admin
                                    </button>
                                </a>
                                <a href="#">
                                    <button
                                        className=" bg-indigo-500 hover:bg-blue-700 text-white py-1 px-3 sm rounded-full"
                                    >
                                        User
                                    </button></a
                                >
                            </div> */}
            </div>
            <div className="mb-28 w-full">
              <table className="table w-full text-gray-400 border-separate space-y-6 text-sm">
                <thead className="bg-indigo-500 text-white">
                  <tr>
                    <th className="p-3 text-left">#Rank</th>
                    <th className="p-3 text-left">Name</th>
                    <th className="p-3 text-left">UserName</th>
                    <th className="p-3 text-left">Points</th>

                    <th className="p-3 text-left">Highest Score</th>
                    {/* <th className="p-3 text-left">Action</th> */}
                  </tr>
                </thead>
                <tbody>
                  {leadData.length !== 0 &&
                    leadData.map((elem, index) => {
                      return (
                        <tr className="dark:bg-gray-700 bg-gray-200 dark:text-gray-200 text-gray-800 lg:text-black">
                          <td className="p-3 font-medium capitalize">
                            {index + 1}
                          </td>
                          <td className="p-3">
                            {elem.first_name} {elem.last_name}
                          </td>
                          <td className="p-3">{elem.email}</td>
                          <td className="p-3 uppercase">{reduce(largest)}</td>
                          <td className="p-3">
                            <span className="bg-green-400 text-gray-50 rounded-md px-2">
                              18322
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
