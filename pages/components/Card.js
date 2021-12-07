import React from 'react'

import { AllOut, Done, Eco, Lock } from '@material-ui/icons'

const choseIcon = (iconName) => {

    switch(iconName) {

        case `AllOut`:
            return

        break;

        default:

        break;
    }

}

const Style = "text-white text-xs"

const arrayIcon = [<AllOut fontSize="small" className={Style} />, <Done className={Style} />, <Eco className={Style} />, <Lock className={Style} /> ]




export default function Card(props) {
    
    var balance = props.balance
    balance = balance * 9.5;
    
    

    return(
        <div className=" transform hover:scale-105 cursor-pinter transition delay-100 w-3/12 p-5 py-5 shadow-xl  rounded-xl m-1 bg-gray-500 bg-opacity-10">

        <div className="flex justify-between">

            <div></div>

            <div className=" w-10 h-10 flex items-center justify-center  bg-gray-300 rounded-xl m-4 bg-opacity-10">
                {arrayIcon[props.icon]}
            </div>

        </div>

        <p className="text-gray-50 text-xs">
            {props.title}
        </p>


        <p className="text-gray-50 text-xl font-semibold">
            {props.balance} EGLD
        </p>

        <p className="text-gray-500 text-sm">
            ${balance}
        </p>

        </div>
    )
}