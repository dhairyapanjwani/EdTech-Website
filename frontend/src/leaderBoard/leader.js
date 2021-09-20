import React, { Component, createContext } from 'react';
import Index from "./topper.jsx";
import "./lead.css";

const leader=[{
    rank:1,
    Name:"Rohit",
    Username:"Imro45",
    Points:"900",
    HighestPoints:"2000"
},
{
    rank:1,
    Name:"Rohit",
    Username:"Imro45",
    Points:"900",
    HighestPoints:"2000"
},
{
    rank:1,
    Name:"Rohit",
    Username:"Imro45",
    Points:"900",
    HighestPoints:"2000"
},
{
    rank:1,
    Name:"Rohit",
    Username:"Imro45",
    Points:"900",
    HighestPoints:"2000"
},

];
export default function Example() {
    return (
        <div className="bg-white-800">
            <Index />
            <div class="flex items-center justify-center min-h-screen bg-white-800" >
                <div class="col-span-12">
                    <div class="overflow-auto lg:overflow-visible">
                        <div class="flex lg:justify-between border-b-2 border-fuchsia-900 pb-1">
                            <h2 class="text-2xl text-gray-500 font-bold bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 sm rounded-full">Leader Board</h2>
                            

                            <div>
                                <a href="#">
                                    <button
                                        class="bg-blue-500 hover:bg-blue-700  text-white  py-1  px-3 sm  rounded-full"
                                    >
                                        All
                                    </button>
                                </a>
                                <a href="#">
                                    <button
                                        class=" bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 sm rounded-full"
                                    >
                                        Admin
                                    </button>
                                </a>
                                <a href="#">
                                    <button
                                        class=" bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 sm rounded-full"
                                    >
                                        User
                                    </button></a
                                >
                            </div>
                        </div>
                        <table class="table text-gray-400 border-separate space-y-6 text-sm">
                            <thead class="bg-blue-500 text-white">
                                <tr>
                                    <th class="p-3">#Rank</th>
                                    <th class="p-3 text-left">Name</th>
                                    <th class="p-3 text-left">UserName</th>
                                    <th class="p-3 text-left">Points</th>

                                    <th class="p-3 text-left">Highest Score</th>
                                    {/* <th class="p-3 text-left">Action</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {leader.map((value,key)=>{
                                    return(
                                        <tr class="bg-blue-200 lg:text-black">
                                        <td class="p-3 font-medium capitalize">{value.rank}</td>
                                        <td class="p-3">{value.Name}</td>
                                        <td class="p-3">{value.Username}</td>
                                        <td class="p-3 uppercase">{value.Points}</td>
    
                                        <td class="p-3">
                                            <span class="bg-green-400 text-gray-50 rounded-md px-2"
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
    )
}




