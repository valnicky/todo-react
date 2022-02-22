import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Posts extends Component {
    state = {
        posts: []
    }
  async componentDidMount(){
     const res =  await  fetch('https://jsonplaceholder.typicode.com/posts')
     const data = await res.json();
       //  console.log(data);
         this.setState({posts: data})
    }

  render() {
    return (
      <div><h1 className="text-black-50">Posts</h1>
        {
         this.state.posts.map(
             post => {
                 return <div id={post.id} className="mx-auto row container">
                  <div className="row  mt-5 ">
                             <h2 className="fw-bold align-middle  text-uppercase h6 text-black-50 col-md-4 col-sm-12 ">{post.title}</h2>
                            <p className=" fs-md-5 fs-lg-4 text-start text-black-50 px-3 col-md-8  col-sm-12 border-start ">{post.body}</p>
                  </div>
                </div>
             }
         )   
        }
      </div>
    )
  }
}
