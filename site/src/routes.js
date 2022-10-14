import { Route, Routes, BrowserRouter} from 'react-router-dom'

import Home from './pages/home'
import Açaí from './pages/açaí'
import Gramas from './pages/gramas'
import Libras from './pages/libras'
import Febre from './pages/febre'
import Paradas from './pages/paradas'
import Salário from './pages/salario'
import Orçamento from './pages/orçamento'
import Ingresso from './pages/ingresso'

export default function SiteRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/acai' element={<Açaí />} />
                <Route path='/gramas' element={<Gramas />} />
                <Route path='/libra' element={<Libras />} />
                <Route path='/febre' element={<Febre />} />
                <Route path='/paradas' element={<Paradas />} />
                <Route path='/salario' element={<Salário />} />
                <Route path='/orcamento' element={<Orçamento />} />
                <Route path='/ingresso' element={<Ingresso />} />
            </Routes>
        </BrowserRouter>
    )
}