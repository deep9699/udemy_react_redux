import JsonPlaceholder from "../apis/JsonPlaceholder";

export const fetchPost=()=>{
    return async (dispatch)=>{

        const res=await JsonPlaceholder.get("/posts");

        dispatch({type:'FETCH_POST',payload:res});
    }
}


