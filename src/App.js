import { Component } from 'react';
import './App.css';
import tasks from './tasks.json'

//components
import TaskForm from './components/TaskForm'
import Tasks from './components/Tasks.js'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

       state = {
           tasks: tasks
    }
  
    addTask = (title, description) => {
        const newTask = {
          title: title,
          description: description,
          id: 45
        }   
        this.setState({
          tasks: [...this.state.tasks, newTask]
        })
    }
 
  render(){
      return  <div className = "App  mt-5 p-md-3 p-sm-0 p-lg-5 form-control" >
                 <TaskForm addTask={this.addTask}/>
                  <Tasks tasks={this.state.tasks} />
        </div>
  }
  
}

export default App;