import React , {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class TaskForm extends Component {
    state = {
        title: '',
        description: ''
    }
    
    onSubmit = (e) => {
        this.props.addTask(this.state.title, this.state.description);
        e.preventDefault();
    }
    
    onChange = e => {
         this.setState({[e.target.name]: e.target.value});
        console.log(e.target.name, e.target.value);
    }
    
    render(){
          return (
                <form className="form-control" onSubmit={this.onSubmit}>
                    <input className="form-control" name="title" type="text" placeholder="write a Task" onChange={this.onChange} value={this.state.title} />
                    <br />
                    <textarea className= "textarea" name="description" id="" cols="50" rows="6" placeholder="write a description" onChange={this.onChange} value={this.state.description}></textarea>
                    <input className="btn " type="submit"  />
                </form>
  )
    }
}

export default TaskForm