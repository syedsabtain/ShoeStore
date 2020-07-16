import {createContext} from "react"

const initialdata = [
    {
        name: '',
        price: ''
    }
]

export const gdata = createContext(initialdata)