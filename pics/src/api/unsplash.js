import axios from "axios"

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID IkOFLUtmY4O9CwyxYAwni69q875KasR9sFG1v92o5mE'
    }
})