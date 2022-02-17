import React, { Component } from 'react'


export default class Posts extends Component {
    state = {
        posts: []
    }
  async componentDidMount(){
     const res =  await  fetch('https://jsonplaceholder.typicode.com/posts')
     const data = await res.json();
         console.log(data);
         this.setState({posts: data})
    }

  render() {
    return (
      <div><h1>Posts</h1>
        {
         this.state.posts.map(
             post => {
                 return <div id={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
             }
         )   
        }
      </div>
    )
  }
}
