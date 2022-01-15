import { Routes,Route} from 'react-router-dom'
import { LayOut } from '../layout'
export function MyRoutes(){
    return (
            <Routes>
                <Route path="/" element={<LayOut/>}>
                    <Route path="/home" element={<div>woshi home</div>}></Route>
                    <Route path="/about" element={<div>woshi about</div>}></Route>
                </Route>
            </Routes>
    )
}