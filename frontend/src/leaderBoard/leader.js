import React, { Component, createContext } from 'react';
import Index from "./topper.jsx";
import Navbar from '../../src/components/navbar/Navbar.jsx';
import "./lead.css";
import Footer from "../components/Footer/Footer.jsx";

const leader=[
    {
    rank:1,
    Name:"Bhagavatiraj Yadav",
    Username:"bhags15",
    Points:"900",
    HighestPoints:"2000"
},
    {
    rank:1,
    Name:"Bhagavatiraj Yadav",
    Username:"bhags15",
    Points:"900",
    HighestPoints:"2000"
},
    {
    rank:1,
    Name:"Bhagavatiraj Yadav",
    Username:"bhags15",
    Points:"900",
    HighestPoints:"2000"
},
    {
    rank:1,
    Name:"Bhagavatiraj Yadav",
    Username:"bhags15",
    Points:"900",
    HighestPoints:"2000"
},
    {
    rank:1,
    Name:"Bhagavatiraj Yadav",
    Username:"bhags15",
    Points:"900",
    HighestPoints:"2000"
},
{
    rank:2,
    Name:"Rohit Sharma",
    Username:"Imro45",
    Points:"900",
    HighestPoints:"2000"
},
{
    rank:1,
    Name:"Virat Kohli",
    Username:"Imro45",
    Points:"900",
    HighestPoints:"2000"
},
{
    rank:1,
    Name:"AB DeVilliers",
    Username:"Imro45",
    Points:"900",
    HighestPoints:"2000"
},
{
    rank:1,
    Name:"AB DeVilliers",
    Username:"Imro45",
    Points:"900",
    HighestPoints:"2000"
},
{
    rank:1,
    Name:"AB DeVilliers",
    Username:"Imro45",
    Points:"900",
    HighestPoints:"2000"
},
{
    rank:1,
    Name:"AB DeVilliers",
    Username:"Imro45",
    Points:"900",
    HighestPoints:"2000"
},
{
    rank:1,
    Name:"AB DeVilliers",
    Username:"Imro45",
    Points:"900",
    HighestPoints:"2000"
},

];
// className="tab1"
export default function Example() {
    return (
        <div className="bg-gray-50 dark:bg-gray-800">
            <Navbar/>
            <Index />
            <div className="flex items-center font-normal justify-center bg-white-800" >
                <div className="col-span-12">
                    <div className="overflow-auto lg:overflow-visible">
                        <div className="tab1" >
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
                        <div className="mb-28">
                        <table className="table text-gray-400 border-separate space-y-6 text-sm">
                            <thead className="bg-indigo-500 text-white">
                                <tr>
                                    <th className="p-3">#Rank</th>
                                    <th className="p-3 text-left">Name</th>
                                    <th className="p-3 text-left">UserName</th>
                                    <th className="p-3 text-left">Points</th>

                                    <th className="p-3 text-left">Highest Score</th>
                                    {/* <th className="p-3 text-left">Action</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {leader.map((value,key)=>{
                                    return(
                                        <tr className="bg-blue-200 lg:text-black">
                                        <td className="p-3 font-medium capitalize">{value.rank}</td>
                                        <td className="p-3">{value.Name}</td>
                                        <td className="p-3">{value.Username}</td>
                                        <td className="p-3 uppercase">{value.Points}</td>
    
                                        <td className="p-3">
                                            <span className="bg-green-400 text-gray-50 rounded-md px-2"
                                            >{value.HighestPoints}</span
                                            >
                                        </td>
                                    </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




