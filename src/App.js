import { Component } from 'react';
import './App.css';
import tasks from './tasks.json'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
//components
import TaskForm from './components/TaskForm'
import Tasks from './components/Tasks.js'
import Posts from './components/Posts.js'

class App extends Component {

       state = {
           tasks: tasks
    }
  
    addTask = (title, description) => {
        const newTask = {
          title: title,
          description: description,
          id: this.state.tasks.length
        }   
        this.setState({
          tasks: [...this.state.tasks, newTask]
        })
    }
 
    deleteTask = (id) => {
      const newTasks = this.state.tasks.filter(task => task.id !== id);
      this.setState({tasks: newTasks});
    }
    
    checkDone = id => {
     const newTasks =  this.state.tasks.map(task => {
        if(task.id === id){
          task.done = !task.done
        }
        return task;
      });
      this.state.setState({tasks: newTasks})
    }
    
  render(){
      return  <div className = "App  mt-5 p-md-3 p-sm-0 p-lg-5 form-control" >
                      <Router>
                              <Route path="/" render={() => {
                                    return (<div>
                                                    <TaskForm addTask={this.addTask}/>
                                                    <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} checkDone={this.checkDone}/>
                                                </div>)
                              }}>
                                
                              </Route>
                        </Router>
                            <Posts />
                 </div>
  }
}

export default App;