import React , {Component} from 'react'
import Task from '.././components/Task.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types'

class Tasks extends Component {
    
    render(){
          return  this.props.tasks.map(task => 
                         <Task 
                         key={task.id} 
                         task={task}
                         deleteTask={this.props.deleteTask}
                         checkDone={this.props.checkDone}
                         />
                  )     
    }
}

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired
}

export default Tasks