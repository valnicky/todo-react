import React , {Component} from 'react'
import Task from '.././components/Task.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types'

class Tasks extends Component {
    
    render(){
          return  this.props.tasks.map(task => 
                         <Task className="task__li my-2  mx-auto py-2 w-sm-100 w-xl-50 d-flex bd-highlight justify-content-lg-around justify-content-sm-around justify-content-around justify-content-xl-evenly align-items-center "
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