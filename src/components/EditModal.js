import React from "react";
import Button from "./Button";
import propTypes from "prop-types";
import "../styles/EditModal.css"

class EditModal extends React.Component{
    render(){
        const{edit, close, data, change, update} = this.props;
        if(edit) {
            return(
                <div className="modal-container">
                    <div className="modal-box">
                        <h3>Edit Task</h3>
                        <div className="input">
                            <input type="text" value={data.title} onChange={change}/>
                        </div>
                        <div className="btn-group">
                            <Button text="edit" variant="primary" action={update}/>
                            <Button text="cancel" variant="warning" action={close}/>
                        </div>
                    </div>
                </div>
            )
        }else{
            return null; 
        }
    }
}

EditModal.propTypes = {
    edit: propTypes.bool.isRequired,
    close: propTypes.func
}

export default EditModal;