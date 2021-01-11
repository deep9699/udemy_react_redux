import React,{useState} from 'react'

function Accordion(props) {

    const [activeIndex,setActiveIndex] = useState(null);

    const onTitleClicked=(index)=>{
        console.log("Title Clicked"+index)
        setActiveIndex(index);
    }

    const  renderItem=props.items.map((item,index)=>{

        const active=index===activeIndex?'active':''

        return <React.Fragment key={item.title}>
            <div className={`title +${active}`} onClick={()=>{onTitleClicked(index)}}>
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content + ${active}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>
    })
    return (
        <div className="ui styled accordion">
            {renderItem}
          
        </div>
    )
}

export default Accordion
