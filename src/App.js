// Blogger
//     Fetch all blogs from api
//     Display all blogs using map
//     Implement filtering by author
//         Author list for select/options should be dynamically generated
//     Implement edit blog text functionality
//     Stretch: 
//         Implement pagination (limit, page)
//         Implement search

// Switch to didmount

import './App.css';
import React, { Component } from 'react'

const blogURL = 'https://6239ddb128bcd99f02763cfe.mockapi.io/blogs'
// const blogData = await fetchblogData

const fetchblogData = async () => {
  const response = await fetch(blogURL,
    {
      method: "GET"
    })

  const responseJSON = await response.json()
  return responseJSON
}

export class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      blogs: [
        {
          author: "Darren Abbott",
          createdAt: "2022-03-22T10:36:37.176Z",
          id: "1",
          text: "Iusto et in et. Nulla accusantium fugit. Et qui dolorem inventore soluta et veritatis. Aut ut aut non laudantium eveniet suscipit odit. Sapiente sint nihil nihil sit et molestias. In nisi omnis quas et sed aut minus aperiam ea.\n \rLaudantium quo quisquam quae. Et et quas officia perspiciatis iusto sunt sunt eaque. Quidem sit voluptas deserunt sequi magni.\n \rEst est facere cumque ipsam omnis animi. Voluptatem magnam officiis architecto possimus. Quia similique aut eos qui. Quasi quae sed aliquam.",
          title: "dicta",
        }
      ]
    }
  }

  // componentDidMount

  getBlog = async () => {
    const data = await fetchblogData()
    console.log(data)
    this.setState({ blogs: data })
  }

  render() {
    return (
      <div className='app'>
        <h1>React Blogger</h1>
        <button
          name='fetchButton'
          onClick={this.getBlog}>
          Get Blogs
        </button>

        <div className='blogs'>
          {this.state.blogs.map((post, idx) => {
            return <Blog
              key={idx}
              author={post.author}
              createdAt={post.createdAt}
              id={post.id}
              text={post.text}
              title={post.title}
            />
          })}
        </div>
      </div>
    )
  }
}
export default App

// Blog Component
function Blog(props) {

  return <div className='blog'>
    <h2>{props.title}</h2>
    <h3>Posted By: {props.author}</h3>
    <h3>Posted On: {props.createdAt}</h3>
    <p>{props.text}</p>
  </div>
}