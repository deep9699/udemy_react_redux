import React,{useState} from 'react'
import Dropdown from './Dropdown'



const options = [
    {
        label:"Arabic",
        value:"ar"
    },
    {
        label:"Afrikaans",
        value:"af"
    },
    {
        label:"Hindi",
        value:"hi"
    }
]

function Translate() {

    const [selected,setSelected] = useState(options[0]);
    const [text,setText] = useState("");

    return (
        <div>

            <input value={text} onChange={()=>{}} />

          <Dropdown item="Language" selected={selected} onSelectChange={setSelected} options={options}></Dropdown>
        </div>
    )
}

export default Translate
