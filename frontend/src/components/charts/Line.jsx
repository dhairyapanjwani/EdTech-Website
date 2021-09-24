import React, { useEffect, useState, useContext } from 'react';
import { Line } from 'react-chartjs-2';
import QuizApi from '../../util/QuizApi';
import { GlobalContext } from '../../GlobalContext';

const MultiAxisLine = () => {
    const [labelArr, setLabelArr] = useState([]), [score, setScore] = useState([]), [avg, setAvg] = useState([]);
    const {userInfo} = useContext(GlobalContext);
    const [userData, setUserData] = userInfo;
    useEffect(() => {
        const labelArr_ = [], score_ = [], avg_ = [];
        const fetcher = async () => {
            console.log('Starting');
            const data = await QuizApi.getResult(userData._id);
            data.data.results.map(elem => {
                // setLabelArr(labelArr.push(elem.date));
                // setScore([score.push(elem.score)]);
                // setAvg([...avg, elem.avg]);
                labelArr_.push(elem.date);
                score_.push(elem.score);
                avg_.push(elem.avg);
            });
            setLabelArr(labelArr_);
            setScore(score_);
            setAvg(avg_);
        };
        console.log(labelArr);
        console.log(score);
        console.log(avg);
        fetcher();
    }, []);
    console.log(score);
    console.log(avg);
    const data = {
        labels: labelArr,
        datasets: [
          {
            label: 'Your Score',
            data: score,
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
            yAxisID: 'y-axis',
          },
          {
            label: 'Average Score',
            data: avg,
            fill: false,
            backgroundColor: 'rgb(54, 162, 235)',
            borderColor: 'rgba(54, 162, 235, 0.2)',
            yAxisID: 'y-axis',
          },
        ],
      };
      
    return (
  <div className='border-2 border-gray-200 dark:border-gray-600 border-opacity-60 rounded-lg w-full'>
    <div className='header'>
      <h1 className='title text-gray-900 dark:text-gray-200 my-2 mx-auto text-center'>Self Analysis Chamber</h1>
    </div>
    <Line data={data} />
  </div>
);}

export default MultiAxisLine;