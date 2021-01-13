export default (action)=>{
    if(action.type==="FETCH_POST")
    {
        return action.payload;   
    }
}