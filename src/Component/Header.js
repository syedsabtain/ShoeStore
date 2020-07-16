import React from 'react'
import {Link} from 'react-router-dom'
import "../App.css"
const Header = () => {
    return (

        <div className='container '>
            <div className='row mt-5'>
                <div className='col-md-12'>
                    <nav className="navbar  rounded   ">
                        <div className='nav-logo'></div>

                        <ul className="nav  ">
                            <li className="nav-item   ">
                                <Link className="nav-link navv size-nav  shadow-sm" to='/'>Home

                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link navv size-nav shadow-sm" to='shoes'>Shoes</Link>
                            </li>

                            <li className="nav-item  ">
                                <Link className="nav-link navv  size-nav shadow-sm" to='cart'>Cart</Link>
                            </li>

                        </ul>

                    </nav>
                </div>

            </div>

        </div>

    )
}

export default Header