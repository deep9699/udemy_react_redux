import React, { Component } from 'react'
import { connect } from "react-redux";
import { SelectBook } from "../actions/index";

class BookList extends Component {

    
    selectBookHandler=(book)=>{
        this.props.SelectBook(book);
    }

    renderList=()=>{
        return this.props.books.map((book)=>{
            return (
                <li onClick={()=>this.selectBookHandler(book)} key={book.title} className="list-group-item">{book.title}</li>
            )
        });
    }

    render() {
        console.log(this.props.books)
        return (
            <div>
                <ul className="list-group col-sm-4">
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    console.log(state);
    return {books:state.books}
}

export default connect(mapStateToProps,{SelectBook})(BookList)
