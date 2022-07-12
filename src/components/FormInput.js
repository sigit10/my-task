import React from "react";
import Button from "./Button";
import propTypes from "prop-types";
import "../styles/FormInput.css"

class FormInput extends React.Component{
    state ={
        text:""
    }
    Change = e =>{
        this.setState({ text: e.target.value})
    }

    submit = e =>{
        e.preventDefault()
        if(this.state.text !== ""){
            this.props.add(this.state.text)
        }
        this.setState({
            text:""
        })
    }
    render(){
        return(
            <form style={inputForm} onSubmit={this.submit}>
                <input 
                    type="text"
                    onChange={this.Change} 
                    value={this.state.text}
                    style={input}
                    placeholder="add task"
                />
                <Button text="add" variant="primary" action={this.submit}/>
                
            </form>
        )
    }
}

FormInput.propTypes = {
    add: propTypes.func.isRequired,
}

export default FormInput

const inputForm = {
    background: "#fff",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    height: "3rem",
    padding: "0 1rem",
    justifyContent: "space-between",
    margin: "0.5rem 0"
}

const input={
    width: "70%",
    border: "none"  
}