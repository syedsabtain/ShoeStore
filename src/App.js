import React, {useReducer} from 'react';
import './App.css';
import './images/bootstrap.min.css'
import {gdata} from './Component/Databasee'
import Routecomp from './Component/Routecomp'
import Datareducer from './Component/Datareducer';

function App() {
    const initialdata = [
        {
            
        }
    ]

    const [state,
        dispatch] = useReducer(Datareducer, initialdata);

    const handleadd = (obj) => {
        dispatch({
            type: 'ADD_ITEM',
            payload: {
                name: obj.name,
                price: obj.price,
                id: obj.id
            }
        })
    }

    const handledelete = (obj) => {
        dispatch({type: 'DELETE_ITEM', payload: obj})
    }
    return (
        <gdata.Provider
            value={{
            mdata: state,
            additem: handleadd,
            deleteitem: handledelete
        }}>
            <Routecomp></Routecomp>
        </gdata.Provider>
    );
}

export default App