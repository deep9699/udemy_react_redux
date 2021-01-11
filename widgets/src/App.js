import React,{useState} from "react"
import Accordion from "./components/Accordion"
import Dropdown from "./components/Dropdown"
import Search from "./components/Search"
import Translate from "./components/Translate"

const items=[
    {
        title:"what is React",
        content:"React is a front end javascript framework."
    },
    {
        title:"why use React ?",
        content:"React is a favorite JS library among engineers."

    },
    {
        title:"How do you use React ?",
        content:"You use React by creating components."
    }
]


const options = [
    {
        label:"The color of Red",
        value:"red"
    },
    {
        label:"The color of Green",
        value:"green"
    },
    {
        label:"The shade of Blue",
        value:"blue"
    }
]



const App=()=>{

    const [selected,setSelected] = useState(options[0]);
    const [showDropdown,setShowDropdown] = useState(true);


    return (
    <div>
        {/* <Accordion items={items}></Accordion> */}
        {/* <Search></Search> */}
        {/* <button onClick={()=>setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
        {
           showDropdown ? {
        <Dropdown item="color" selected={selected} onSelectChange={setSelected} options={options}></Dropdown>
          <span style={{color:`${selected.value}`}}>The text is {selected.value}!</span>
           }
        :
        null
        } */}

        <Translate></Translate>



    </div>
    );
}

export default App;