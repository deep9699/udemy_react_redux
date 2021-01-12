import React,{useState} from 'react'
import Convert from './Convert';
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
            <div className="ui form">
                <div className="field">
                    <label>Enter English</label>
                    <input value={text} onChange={(e)=>{setText(e.target.value)}} />
                </div>
            </div>

          <Dropdown item="Language" selected={selected} onSelectChange={setSelected} options={options}></Dropdown>

            <h3 className="ui header">Output</h3>
          <Convert language={selected} text={text}></Convert>
        </div>
    )
}

export default Translate
