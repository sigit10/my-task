import React from 'react';
import FormInput from './components/FormInput';
import TodoItem from './components/TodoItem';
import logo from './logo.svg';
import './App.css';
import EditModal from './components/EditModal';
import DeleteModal from './components/DeleteModal'

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Reading Book"
      },
      {
        id: 2,
        title: "Workout training"
      }
    ],
    isEdit: false,
    isDelete: false,
    editData: {
      id: "",
      title: ""
    },
    idDelete : ""
  }
  

update = () => {
  const {id, title} = this.state.editData
  const newData = {id, title} 
  const newTodos = this.state.todos
  newTodos.splice((id-1), 1, newData)
  this.setState({
    todos: newTodos,
    isEdit: false,
    isDelete: false,
    editData: {
      id: "",
      title: "",
      idDelete: ""
    }
  })
}

setTitle = e => 
  this.setState({
    editData: {
      ...this.state.editData,
      title: e.target.value 
    }
  })

openModal= (id, data) =>{
  this.setState({
    isEdit: true,
    editData: {
      id,
      title: data
    }
  })
}

closeModal= () =>{
  this.setState({
    isEdit: false,
    isDelete: false,
  })
}

openDelete= (id) =>{
//  console.log(id)
  this.setState({
    ...this.state,
    isDelete: true,
    idDelete : id
 })
}

// delete = () =>{
//   const id = this.state.deleteData
//   this.setState({
//     todos: this.state.todos.filter(item=>item.id !== id)
//   })
// }

deleteTask = () => {
 const id = this.state.idDelete
  this.setState({
    todos: this.state.todos.filter(item => item.id !== id)
  })
//console.log("ok delete")
}

addTask = data => {
  const id = this.state.todos.length
  const newData= {
    id: id + 1,
    title: data
  }
  this.setState({
    todos: [...this.state.todos, newData]
  })
}

  render(){
    const {todos} = this.state;
  return (
    <div className="app">
      <div className="logo" >
        <img src={logo} alt="logo"/>
        <h3>Task List</h3>
    </div>
    <div className="list" >
      {todos.map(item =>
          <TodoItem 
            key = {item.id} 
            todo={item} 
            openDel={this.openDelete}
            close={this.closeModal}
            open={this.openModal}/>
        )}
    </div>
    <div className="input-form" >
      <FormInput add={this.addTask}/>
    </div>
      <EditModal 
          edit={this.state.isEdit} 
          close={this.closeModal} 
          change={this.setTitle}
          data={this.state.editData}
          update={this.update}/>
      <DeleteModal
          del={this.state.isDelete} 
          close={this.closeModal}
          delItem={this.deleteTask}
          edit={this.state.isEdit} 
          update={this.update}/>
    </div>
  );
}
}
export default App;
