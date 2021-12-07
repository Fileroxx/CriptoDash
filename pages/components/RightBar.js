import React from 'react'
import { Pie, Doughnut }  from 'react-chartjs-2'
import {Chart, ArcElement} from 'chart.js'


Chart.register(ArcElement);


const data = {

    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [

        {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
        }

    ]
};


export default function RightBar() {
    return(
        
        <div className="bg-gray-500 shadow-xs bg-opacity-10 w-1/3 rounded-xl ">

            <div className="border-b border-gray-800 p-3">
                <p className="font-semibold text-white ">Delegation</p>
            </div>

            <div className="flex flex-col items-center p-3">
                <p className="font-semibold text-lg text-gray-200" >21 h 47 m 51s</p>

                <p className="text-gray-500 text-sm text-center font-semibold">Until next rewards batch is distributed</p>

            </div>

            <div>
                <Doughnut
                className="p-4"
                data={data}
                />

            </div>

            <div className="flex flex-col items-center p-3">
             
                <p className="text-gray-500 text-sm text-center">These are reards available be claimed right now.</p>

            </div>



        </div>

    )
}