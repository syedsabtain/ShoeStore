const Datareducer = (state,action)=>
{
    switch(action.type)
    {
        case 'ADD_ITEM':
            return [...state,{name:action.payload.name,price:action.payload.price,id:action.payload.id}]
    
        case 'DELETE_ITEM':
            return (state.filter((val)=>val.id!==action.payload))
        
        default:
            break;
    }
}

export default  Datareducer