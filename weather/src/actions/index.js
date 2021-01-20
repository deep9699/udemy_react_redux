import { weatherAPI } from "../apis/weather";
const API_KEY="50f9957ea8362ad7e122c29583798607";


export const fetchData=(cityName)=>{
   
    return (dispatch,getState)=>{
        console.log(getState());
        weatherAPI.get('',{
            params:{
                q:cityName,
                APPID:API_KEY
            }
        })
        .then((response)=>{
            dispatch({type:"FETCH_DATA",payload:response.data})
        })
        .catch((err)=>{
            console.log(err);
        })

        

    }
}