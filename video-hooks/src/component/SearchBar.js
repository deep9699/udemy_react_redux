import React,{useState} from "react"



const SearchBar = (props)=>{
    const [term,setTerm]=useState("");

    const onFormSubmit=(event)=>{
        event.preventDefault();
        props.onSubmit(term);
    
    }

    const onInputChange=(event)=>{        
        setTerm(event.target.value);
    }


    return (
        <div className="search-bar ui segment">
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" onChange={onInputChange} value={term}></input>
                </div>
            </form>
        </div>
    );

}



export default SearchBar