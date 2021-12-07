import { ArrowDownward, ArrowUpward, ClearAll, DonutLarge, Eco, Layers, Lock, SyncAlt } from '@material-ui/icons'
import React from 'react'
import Head from 'next/head'

export default function Sidebar() {

    return(

        <div className="md:w-3/12 w-6/12 h-screen shadow-2xl" style={{background: '#080624'}}>



            <Head>

            <title>Dashboard - Crypto App</title>     

            </Head>

            <div className="   flex pt-6 pb-3 align-center justify-around">
                
                <p className="text-xl text-white font-semibold">Crypto App</p>
                <p className="text-gray-600">|</p>
                <p className="text-white text-lg" >Wallet</p>


            </div>

        <div className="p-4 space-y-4">

            <div className="space-y-4">
                <h1 className="text-gray-500 p-3">Menu</h1>


                <div>
                    <div className="flex p-3 transition duration-500 text-gray-400 space-x-4 rounded cursor-pointer hover:bg-gray-300 hover:bg-opacity-10 ">
                        <DonutLarge className=" text-gray-300   cursor-pointer"  />
                        <p className="text-gray-600 cursor-pointer">Dashboard</p>
                    </div>
                </div>

                <div>
                    <div className="flex p-3 transition duration-500 space-x-4 text-gray-400 rounded hover:bg-gray-300 hover:bg-opacity-10">
                        <ClearAll className="text-gray-300 cursor-pointer" />
                        <p className="text-gray-600 cursor-pointer">Transaction</p>
                    </div>
                </div>

                <div>    

                        <div className="flex p-3 transition duration-500 text-gray-400 rounded hover:bg-gray-300 hover:bg-opacity-10 space-x-4">
                        <ArrowUpward className="text-gray-300 cursor-pointer" />
                        <p className="text-gray-600 cursor-pointer">Send</p>
                        </div>

                </div>

                <div>
 
                    <div className="flex p-3 transition duration-500 text-gray-400 rounded hover:bg-gray-300 hover:bg-opacity-10 space-x-4">
                            <ArrowDownward className="text-gray-300 cursor-pointer" />
                            <p className="text-gray-600 cursor-pointer">Recieve</p>
                    </div>


                </div>

                <div>

                <div className="flex p-3 transition duration-500 text-gray-400 rounded hover:bg-gray-300 hover:bg-opacity-10 space-x-4">
                        <SyncAlt className="text-gray-300 cursor-pointer" />
                        <p className="text-gray-600 cursor-pointer">Buy</p>
                </div>

                </div>

            
                <div className="space-y-6">
                <h1 className="text-gray-500 p-3 pt-6">Delegation</h1>

                <div>
                    <div className="flex p-3 transition duration-500 space-x-4 text-gray-400 rounded hover:bg-gray-300 hover:bg-opacity-10">
                        <Lock className="text-gray-300 cursor-pointer" />
                        <p className="text-gray-600 cursor-pointer">Delegate</p>
                    </div>
                </div>


                <div>
                    <div className="flex p-3 transition duration-500 space-x-4 rounded text-gray-400 hover:bg-gray-300 hover:bg-opacity-10">
                        <Eco className="text-gray-300 cursor-pointer" />
                        <p className="text-gray-600 cursor-pointer">Claim Rewate</p>
                    </div>
                </div>

             </div>





             <div className="space-y-6">
                <h1 className="text-gray-500 p-3 pt-6">Taking</h1>

                <div>
                    <div className="flex p-3 transition duration-500 space-x-4 rounded text-gray-400 hover:bg-gray-300 hover:bg-opacity-10">
                        <Layers className="text-gray-300 cursor-pointer" />
                        <p className="text-gray-600 cursor-pointer">Validate</p>
                    </div>
                </div>


 

             </div>

            
            </div>
            

        </div>

        </div>

    )

}