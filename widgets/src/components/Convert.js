import React,{useState,useEffect} from 'react'
import axios from "axios";

const Convert=({language,text})=>{

    const [translated,setTreanslated] = useState("");
    const [debouncedText,setDebouncedText] = useState (text);


    useEffect(()=>{

        const TranslateApi=async()=>{
            const {data}= await  axios.post('https://translation.googleapis.com/language/translate/v2',{},{
                  params:{
                      q:debouncedText,
                      target:language.value,
                      key:'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                  }
              })
  
              console.log(data.data.translations[0].translatedText);
              setTreanslated(data.data.translations[0].translatedText);
          }
          
          TranslateApi();
          

    },[language,debouncedText])

    useEffect(()=>{

       const timerId= setTimeout(() => {
            setDebouncedText(text);
        }, 500);
        

        return (()=>{
            clearTimeout(timerId);
        })

    },[text]);



    return (
        <div className="ui header">
            <h1>{translated}</h1>
        </div>
    )
}

export default Convert
