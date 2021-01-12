import React,{useState} from "react"
import Accordion from "./components/Accordion"
import Dropdown from "./components/Dropdown"
import Search from "./components/Search"
import Translate from "./components/Translate"
import Route from "./components/Route";
import Header from "./components/Header"

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
        <Header></Header>
      <Route path="/">
          <Accordion items={items}></Accordion>
      </Route>
      <Route path="/list">
        <Search></Search>
      </Route>
      <Route path="/dropdown">
        <Dropdown options={options} selected={selected} onSelectChange={setSelected} item="color"></Dropdown>
      </Route>
    <Route path="/translate">
        <Translate></Translate>
    </Route>
    </div>
    );
}

export default App;