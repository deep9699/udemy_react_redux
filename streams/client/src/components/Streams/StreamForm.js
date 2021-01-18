import React, { Component } from 'react'
import {Field,reduxForm} from "redux-form"


class StreamForm extends Component {


    renderError(meta){
        if(meta.error && meta.touched)
        {
            return (
                <div className="ui error message">
                    <div className="header">
                        {meta.error}
                    </div>
                </div>
            )
        }
    }

    renderInput=({input,label,meta})=>{
        
        
        //return <input onChange={formProps.input.onChange} value={formProps.input.value} />
        const className=`field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit=(formValues)=>
    {
        this.props.onSubmit(formValues);
    }

    render() {
     
        return (
         <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
             <Field name="title" component={this.renderInput} label="Enter Title" />
             <Field name="description" component={this.renderInput} label="Enter Description"/>
             <button className="ui button primary">Submit</button>
         </form>
        )
    }
}

const validate=(formValues)=>{
    const error={}
    if(!formValues.title)
    {
        error.title="You must enter Title"
    }
    if(!formValues.description)
    {
        error.description="You must enter Description"
    }

    return error;
}

export default reduxForm({
    form:'streamForm',
    validate:validate
})(StreamForm)


