import React from "react";
import propTypes from "prop-types";
import Button from "./Button";

const TodoItem = ({todo, open, openDel}) => {
    return(
        <div style={todoItem}>
            <p>{todo.title}</p>
            <div>
                <Button text=" edit " variant="success" action={() => open(todo.id, todo.title)} />
                <Button text=" delete " variant="warning" action={() => openDel(todo.id)}/>
            </div>
        </div>
    )
}

TodoItem.propTypes = {
    todo: propTypes.object.isRequired,
    openDel: propTypes.func.isRequired
}

export default TodoItem;

const todoItem = {
    background: "#2da4f8",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    height: "3rem",
    padding: "0 1rem",
    justifyContent: "space-between",
    margin: "0.5rem 0"
}

