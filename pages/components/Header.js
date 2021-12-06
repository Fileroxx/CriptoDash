import { Apps, CropLandscape, Dashboard, ExitToApp } from "@material-ui/icons";

export default function Header() {
    return(

        <div className="flex shadow-sm justify-between p-3 " style={{ background: '#080624'}}>

            <div className="flex space-x-3 p-2 pt-3 py-3">
                <p className="text-gray-200 text-lg">Adress </p>
                <p className="text-gray-400">0xc14D1bdD7A28b12fa3e88FE2bE9e193Bdfdlk8bb940A6</p>
                <CropLandscape className="text-gray-300" />
                <Dashboard className="text-gray-300" />

            </div>

            <div className="flex space-x-2 pt-3 text-gray-400">
                <ExitToApp />
                <Apps />
                
            </div>

        </div>

    )
}