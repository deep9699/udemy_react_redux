import React,{useState,useEffect,useRef} from 'react'

function Dropdown({options,selected,onSelectChange,item}) {

    const [open, setOpen] = useState(false);
    const ref=useRef();

    useEffect(()=>{



        const onBodyClick=(event)=>{

            if(ref.current && ref.current.contains(event.target))
            {
                return;
            }

            setOpen(false);
        }

        document.body.addEventListener("click",onBodyClick,{capture:true});
        
        return (()=>{
            document.body.removeEventListener("click",onBodyClick);
        })
    },[])

    const renderOptions=options.map((option)=>{
        if(selected.value!=option.value){
        return (
            <div onClick={()=>onSelectChange(option)} key={option.value} className="item">
                {option.label}
            </div>
        );
        }
        else
        {
            return null;
        }
    })


    

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">Select a {item}</label>
                <div 
                className={`ui selection dropdown ${open?'visible active':''}`} 
                onClick={()=>{setOpen(!open)}}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open?'visible transition':''}`}>
                        {renderOptions}
                    </div>
                </div>
            </div>
  
        </div>
        
    )
}

export default Dropdown
