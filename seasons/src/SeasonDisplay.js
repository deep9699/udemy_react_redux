import React from "react"
import './SeasonDisplay.css'

const seasonConfig={
    summer:{
        text:"let's hit the beach!",
        iconName:'sun'
    },
    winter:{
        text:'Burr! It is chilly',
        iconName:'snowflake'
    }
}

const getSeason=(lat,month)=>{
    if(month>2 && month<9)
    {
        return lat>0?'summer':'winter'
    }
    else
    {
        return lat>0?'winter':'summer'
    }
}

const SeasonDispaly=(props)=>{
    
    const Season=getSeason(props.lat,new Date().getMonth());
    const {text,iconName}=seasonConfig[Season]

    return (
    <div className={`season-display ${Season}`}> 
        <i className={`icon-left ${iconName} icon massive`}></i>
        <h1>{text}</h1>
        <i className={`icon-right ${iconName} icon massive`}></i>
        

    </div>
    );
}


export default SeasonDispaly