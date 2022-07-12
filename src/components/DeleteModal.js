import React from "react";
import Button from "./Button";
import propTypes from "prop-types";
import "../styles/DeleteModal.css"

class DeleteModal extends React.Component{
    render(){
        const {delItem, close, del } = this.props
        if(del){
        return(
            <div className="del-container">
                <div className="del-box">
                    <h3>Are you sure?</h3>
                    <div className="btn-group"><br/>
                        <Button text="yes" variant="warning" action={delItem}/>
                        <Button text="cancel" variant="primary" action={close}/>
                    </div>
                </div>
            </div>
        )
    }else{
        return null
        }
    }
}

DeleteModal.propTypes = {
    delItem: propTypes.func,
    del: propTypes.bool
}

export default DeleteModal;