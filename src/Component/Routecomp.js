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
                    <Route path='*' element={<Wronglinkink></Wronglinkink>}></Route>
                </Routes>

            </div>
            

        </Router>
    )
}

const Wronglinkink=()=>{

    return(
        <div className='container text-center  '>
            <div className='row'>
                <div className='col-md-12'>
                    <div className=' bg-wrong shadow-lg text-center'>
                        <h1>404 PAGE NOT FOUND</h1>
                        <h2>CONTACT ADMINSTRATOR</h2>
                    </div>
                </div>
            </div>

        </div>
    )

}


export default Routecomp