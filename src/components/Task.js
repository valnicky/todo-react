import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Task.css'
import PropTypes from 'prop-types'

class Task extends Component {
    StyledCompleted() {
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black',
            // textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }

    render() {
        return <div style={this.StyledCompleted()} className="task__li my-2  mx-auto py-2 w-sm-100 w-xl-50 d-flex bd-highlight justify-content-lg-around justify-content-sm-around justify-content-around justify-content-xl-evenly align-items-center " >
            {this.props.task.title} -
            {this.props.task.description} -
            {this.props.task.done}
            <input type="checkbox" className=" ml-3 form-check-input" />
            <button type="" className="task__btn-delete  btn-small text-bold cursor-pointer border-start-0 border-top-0 border-1 border-warning  rounded-circle px-lg-3 py-lg-2 px-sm-2 py-sm-1">X</button>
        </div>
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}

export default Task