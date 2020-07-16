import React, {useContext, useState} from 'react'
import shoes from '../Shoes'
import {gdata} from './Databasee'
import '../App.css'
import {Link} from 'react-router-dom'

const Listshoe = () => {
    const {additem} = useContext(gdata)
    let [count,setCount] = useState(0)

    let [lab,setLab] = useState({})

    const updat = (obj) => {
        setLab({
            element: <span className='ml-3 '>added to cart</span>,
            id: obj
        })

    }
    const relement = (id) => {
        if (lab.id === id) {
            return (
                <span>
                    <Link to='../cart' className='btn btn-outline-dark ml-3'>View in cart</Link><br/>
                    <span className='mt-3 '>Added to cart</span>
                </span>
            )
        }
    }

    return (
        <div className='container mt-5 '>

            <div className='container'>
                <div className='row'>

                    {Object
                        .entries(shoes)
                        .map(([
                            slug, {
                                name,
                                img,
                                price
                            }
                        ], ind) => (
                            <div className='col-md-4' key={slug}>
                                <div className="card mb-4 shadow-sm">
                                    <img src={img} className="card-img-top" alt={name}/>
                                    <div className="card-body">
                                        <h5 className="card-title">{name
                                                .replace(/-/g, " ")
                                                .toUpperCase()}</h5>
                                        <p className="card-text">Price: ${price}</p>
                                        <button
                                            onClick={() => {
                                            setCount(++count);
                                            additem({name: name, price: price, id: count});
                                            updat(ind);
                                        }}
                                            className="btn btn-outline-dark">Add</button>
                                        {relement(ind)}

                                    </div>
                                </div>
                            </div>

                        ))}

                </div>

            </div>
            <footer
                style={{
                backgroundColor: 'rgba(255, 255, 255, 0.644)',
                borderRadius: '10px'
            }}
                className="my-5 pt-5  text-center text-small">
                <p className="mt-2 ">&copy; 2020-2030 @created by Syed Sabtain</p>
                <ul className="list-inline ">
                    <li className="list-inline-item">
                        <a >Privacy</a>
                    </li>
                    <li className="list-inline-item">
                        <a>Terms</a>
                    </li>
                    <li className="list-inline-item">
                        <a >Support</a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}

export default Listshoe