import React, { Component } from 'react'
import { connect } from "react-redux";


 class BookDetails extends Component {
    render() {
        if(!this.props.activeBook)
        {
            return <div>Please Select Book to get started ... </div>
        }
        return (
            <div>
                <h3>Book Details :</h3>
                <div>Title : {this.props.activeBook.title}</div>
                <div>Pages : {this.props.activeBook.pages}</div>
            </div>
        )
    }
}

const mapStateToProp=(state)=>{
    console.log(state);
    return {activeBook:state.active_book}
}

export default connect(mapStateToProp)(BookDetails)
