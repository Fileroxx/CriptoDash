import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart, CategoryScale, Tooltip, Legend, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js'


// Chart.register(LineController, LineElement, PointElement, LinearScale, Title)

Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )

const data = {

    labels: ['Sep 19', 'Sep 19', 'Sep 20', 'Sep 21', 'Sep 22', 'Sep 23', 'Sep 24'],
    
    datasets: [

        {
            label: 'Elrond',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(67,56,202)',
            borderColor: 'rgba(67,56,202)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointBackgroundColor: 'rgba(67,56,202)',
            pointBorderWidth: 1,
            pointHoverRadius: 10,
            pointRadius: 4,
            pointHitRadius: 10,
            data: [12, 10, 6, 6, 7, 7, 8],

        }

    ]
};



export default function Middle() {
    return(
        
        <div className="bg-gray-500 bg-opacity-10 shadow-sm rounded-xl ml-5 shadow-xl w-2/3 h-100 p-5">
            
            <div className="border-b p-3 border-gray-800">
                <p className="font-semibold text-white">
                    Elgond Gold
                </p>
            </div>

            <div className="">
                <Line data={data} />
            </div>

        </div>

    )
}