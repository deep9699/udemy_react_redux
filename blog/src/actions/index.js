import JsonPlaceholder from "../apis/JsonPlaceholder";
import _ from "lodash"


export const fetchPostAnsUsers=()=> async (dispatch,getState)=>{
        await dispatch(fetchPost());
        
        // const user_ids=_.uniq(_.map(getState().posts,'userId'));
     
        // console.log(user_ids);

        // user_ids.forEach((id)=>dispatch(fetchUser(id)));


        _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach((id)=>dispatch(fetchUser(id)))
        .value();

    }


export const fetchPost=()=>{
    return async (dispatch)=>{

        const res=await JsonPlaceholder.get("/posts");

        dispatch({type:'FETCH_POST',payload:res.data});
    }
}


export const fetchUser=(id)=>{
    return async (dispatch)=>{
        const res = await JsonPlaceholder.get("/users/"+id);

        dispatch({type:'FETCH_USER',payload:res.data});
    }
}


//Memorize version.
// export  const fetchUser =(id) =>(dispatch)=>{_fetchUser(id,dispatch);}



// const _fetchUser = _.memoize( async (id,dispatch)=>{
//     const res = await JsonPlaceholder.get("/users/"+id);

//     dispatch({type:'FETCH_USER',payload:res.data});
// })

