import React from 'react'
import {Link} from 'react-router-dom'
import '../images/bootstrap.min.css'

const Homm = () => {
    return (

        <div className='container text-center  '>
            <div className='row'>
                <div className='col-md-12'>
                    <div className=' bg-home shadow-lg text-center'>
                        <h1>Welcome To Adidas</h1>
                        <Link
                            to='./shoes'
                            className='btn shadow-lg btn-lg btn-dark text-capitalize text-white mt-5'>Buy Shoes</Link>
                    </div>
                </div>
            </div>

        </div>

    )
}
export default Homm