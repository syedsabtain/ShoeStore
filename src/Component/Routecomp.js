import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Listshoe from './Listshoe'
import Cartitem from './Cartitem'
import Header from './Header'
import Checkout from './Checkout'
import Homm from './Home'

const Routecomp = () => {
    return (

        <Router>

            <div >
                <Header></Header>

                <Routes>
                    <Route path='/' element={<Homm></Homm>}></Route>
                    <Route path='shoes' element={< Listshoe > </Listshoe>}></Route>
                    <Route path='cart' element={< Cartitem > </Cartitem>}></Route>
                    <Route path='checkout' element={<Checkout></Checkout>}></Route>
                </Routes>

            </div>
            

        </Router>
    )
}


export default Routecomp