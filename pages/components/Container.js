import React from 'react'
import Card  from './Card'
import Middle from './Middle'
import RightBar from './RightBar'

export default function Container() {
    return(
        <div className="h-screen" style={{background: '#0c0a2b'}}>


            <div className="py-1 px-8">

                <h1 className="text-white text-3xl pt-3 py-3 ml-4">Hello, Igor!</h1>


                <div className="flex p-4 space-x-3">
                    <Card title="TOTAL" balance={409.0790} icon={0}  />
                    <Card title="AVAILABLE" balance={300.0790} icon={1}  />
                    <Card title="CLAIMBABLE REWARD" balance={100.0790} icon={2}  />
                    <Card title="DELAGATED" balance={339.0790} icon={3}  />
                </div>
 
                <div className="flex ml-2 mt-20 space-x-8">

                    <Middle />

                    <RightBar />

                </div>

            </div>




        </div>
    )
}