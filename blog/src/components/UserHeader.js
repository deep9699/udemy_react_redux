import React, { Component } from 'react'
import { connect } from "react-redux";

class UserHeader extends Component {

    render() {
        if(!this.props.user)
        {
            return <div>Loading ...</div>
        }
        else
        {
            return (
                <div>
                {this.props.user.name}
                </div>
            )
        }
    }
}

const mapStateToProps=(state,props)=>{
    
    return {user:state.users.find((user)=>user.id===props.id)};
}

export default connect(mapStateToProps)(UserHeader)
