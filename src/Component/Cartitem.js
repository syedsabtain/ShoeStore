import React, {useContext} from 'react'
import {gdata} from './Databasee'
import '../App.css'
import {Link} from 'react-router-dom'

const Cartitem = () => {

    const {mdata, deleteitem} = useContext(gdata)

    const totalamount = () => {
        let element = 0

        for (let i = 0; i < mdata.length; i++) {
            element += mdata[i].price;

        }

        return element
    }
    return (
        <div className='cartlist'>
            <div className='container text-center mt-5'>
                <div className='row'>
                    <div className='col-md-12 '>
                        <h1
                            className='shadow'
                            style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.644)'
                        }}>Cart</h1>
                        <br/>
                        <h1
                            style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.644)'
                        }}>Items</h1>
                        <ul className='list-group '>
                            {mdata.map((val, key) => {
                                return (
                                    <li
                                        className='list-group-item list-group-item-aciton  d-flex font-weight-bold justify-content-between align-items-center lh-condensed'
                                        style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.644)'
                                    }}
                                        key={key}>

                                        <button
                                            className='btn btn-sm btn-outline-danger ml-0 mr-5 '
                                            onClick={() => {
                                            deleteitem(val.id)
                                        }}>X</button>
                                        <span className='text trans mr-5'>{val
                                                .name
                                                .replace(/-/g, ' ')
                                                .toUpperCase()}</span>
                                        <span className='trans'>${val.price}</span>

                                    </li>
                                )
                            })}
                            <li
                                className='list-group-item list-group-item-aciton font-weight-bold d-flex justify-content-between align-items-center'
                                style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.644)'
                            }}>
                                <span>Total</span>
                                <span>${totalamount()}</span>
                            </li>

                        </ul>
                        <Link to='../checkout' className='btn mt-4 btn-dark text-white'>Checkout</Link>
                    </div>

                </div>
                <footer
                style={{
                backgroundColor: 'rgba(255, 255, 255, 0.644)',
                borderRadius: '10px'
            }}
        className="my-5 pt-5 mb-2 text-center text-small">
                <p className="mb-1 pb-4">&copy; 2020-2030 @created by Syed Sabtain</p>
            </footer>

            </div>
        </div>
    )
}

export default Cartitem