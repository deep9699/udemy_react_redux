import  axios from "axios"
const KEY="AIzaSyC6DJyukDlAAweMV7Yt_qvruUUKk_ZnQq0";


export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
})
