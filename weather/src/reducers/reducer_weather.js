export const weatherReducer=(state=[],action)=>{
    switch(action.type)
    {
        case "FETCH_DATA":
            return [...state,action.payload]
        default:
            return state;
    }
}