import { Route, Routes, BrowserRouter} from 'react-router-dom'

import Home from './pages/home'
import Açaí from './pages/açaí'
import Gramas from './pages/gramas'
import Libras from './pages/libras'

export default function SiteRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/acai' element={<Açaí />} />
                <Route path='/gramas' element={<Gramas />} />
                <Route path='/libra' element={<Libras />} />
            </Routes>
        </BrowserRouter>
    )
}