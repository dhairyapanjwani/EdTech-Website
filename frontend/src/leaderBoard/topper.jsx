import React from "react";

function Index() {
    return (
        <>
            <div className="container flex flex-wrap pt-4 pb-10 m-auto mt-6 md:mt-15 lg:px-12 xl:px-16">
                <div className="w-full px-0 lg:px-4">
                    {/* <h2 className="px-12 text-base font-bold text-center md:text-2xl text-blue-700">
                        Choose your plan
                    </h2>
                    <p className="py-1 text-sm text-center text-blue-700 mb-10">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p> */}
                    <div className="flex flex-wrap items-center justify-center py-4 pt-0">
                        <div className="w-full p-4 md:w-1/2 lg:w-1/4 plan-card">
                            <label className="flex flex-col rounded-lg shadow-lg group relative cursor-pointer hover:shadow-2xl">
                                <div className="w-full px-4 py-6 rounded-t-lg card-section-1 bg-indigo-500">
                                    <h3 className="mx-auto text-base font-semibold text-center underline text-white">
                                       Rahul
                                    </h3>
                                    <p className="text-5xl font-bold text-center text-white">
                                        2<span className="text-3xl"></span>
                                    </p>
                                    <p className="text-xs text-center uppercase text-white">
                                        Runner Up
                                    </p>
                                </div>
                                <div
                                    className="flex flex-col items-center justify-center w-full h-full py-6 rounded-b-lg bg-indigo-500"
                                >
                                    <p className="text-xl text-white">
                                       Highest: 1800
                                    </p>
                                    <button className="w-5/6 py-2 mt-2 font-semibold text-center uppercase bg-white border border-transparent rounded text-blue-500">
                                       Brownie points: 200
                                    </button>
                                </div>
                            </label>
                          
                        </div>

                        <div className="w-full p-4 md:w-1/2 lg:w-1/4 flex-wrap">
                            <label className="flex flex-col rounded-lg shadow-lg relative cursor-pointer hover:shadow-2xl">
                                <div className="w-full px-4 py-6 rounded-t-lg bg-indigo-500">
                                    <h3 className="mx-auto text-base font-semibold text-center underline text-white ">
                                       Rohit
                                    </h3>
                                    <p className="text-5xl font-bold text-center text-white">
                                        1<span className="text-3xl"></span>
                                    </p>
                                    <p className="text-xs text-center uppercase text-white">
                                        Winner
                                    </p>
                                </div>
                                <div
                                    className="flex flex-col items-center justify-center w-full h-full py-6 rounded-b-lg bg-indigo-500"
                                >
                                    <p className="text-xl text-white">
                                       Highest: 2000
                                    </p>
                                    <button className="w-5/6 py-2 mt-2 font-semibold text-center uppercase bg-white border border-transparent rounded text-blue-500">
                                       Brownie Points: 400
                                    </button>
                                </div>
                            </label>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            
                           
                        </div>
                        
                        <div className="w-full p-4 md:w-1/2 lg:w-1/4 plan-card flex-wrap">
                            <label className="flex flex-col rounded-lg shadow-lg group card-group relative hover:bg-jblue-secondary cursor-pointer hover:shadow-2xl">
                                <div className="w-full px-4 py-6 rounded-t-lg card-section-1 bg-indigo-500">
                                    <h3 className="mx-auto text-base font-semibold text-center underline text-white">
                                        Virat
                                    </h3>
                                    <p className="text-5xl font-bold text-center text-white ">
                                        3
                                    </p>
                                    <p className="text-xs text-center uppercase text-white ">
                                        2 Runner Up
                                    </p>
                                </div>
                                <div
                                    className="flex flex-col items-center justify-center w-full h-full py-6 rounded-b-lg bg-indigo-500"
                                >
                                    <p className="text-xl text-white">
                                        Highest: 900
                                    </p>
                                    <button className="w-5/6 py-2 mt-2 font-semibold text-center uppercase bg-white border border-transparent rounded text-blue-500">
                                        Brownie Points: 100
                                    </button>
                                </div>
                            </label>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}

export default Index;
