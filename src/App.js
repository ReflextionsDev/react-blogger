// Imports
import './App.css';
import React, { Component } from 'react'
import Blog from './component/Blog';

// API interactions
const blogURL = 'https://6239ddb128bcd99f02763cfe.mockapi.io'
const limit = 10
const page = 2

const fetchblogData = async () => {
  const response = await fetch(`${blogURL}/blogs/?limit=${limit}&page=${page}`)
  const responseJSON = await response.json()
  return responseJSON
}

export class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      blogs: [
        {
          // author: "Darren Abbott",
          // createdAt: "2022-03-22T10:36:37.176Z",
          // id: "1",
          // text: "Iusto et in et. Nulla accusantium fugit. Et qui dolorem inventore soluta et veritatis. Aut ut aut non laudantium eveniet suscipit odit. Sapiente sint nihil nihil sit et molestias. In nisi omnis quas et sed aut minus aperiam ea.\n \rLaudantium quo quisquam quae. Et et quas officia perspiciatis iusto sunt sunt eaque. Quidem sit voluptas deserunt sequi magni.\n \rEst est facere cumque ipsam omnis animi. Voluptatem magnam officiis architecto possimus. Quia similique aut eos qui. Quasi quae sed aliquam.",
          // title: "dicta",
        }
      ],
      selectedAuthor: "All"
    }
  }

  // Load blogs from API on mount
  componentDidMount = async () => {
    const data = await fetchblogData()
    // console.log(data)
    this.setState({ blogs: data })
  }

  // Filter blog posts by selected author
  handleCategorySelect = (e) => {
    this.setState({
      selectedAuthor: e.target.value,
    });
  };

  // Update blog text as filled
  editBlogPost = (e, id) => {
    const newData = { ...this.state }
    newData.blogs[id - 1].text = e.target.value
    this.setState(newData)
  }

  render() {
    return (
      <div className='app'>
        <h1>React Blogger</h1>

        <div>
          <select onChange={this.handleCategorySelect}>3
            <option value={"All"}>All</option>
            {this.state.blogs.map((blog) => {
              return (
                <option key={`option-${blog.id}`} value={blog.author}>{blog.author}</option>
              )
            })}
          </select>
        </div>

        <div className='blogs'>
          {this.state.blogs.map((post) => {
            if (post.author === this.state.selectedAuthor || this.state.selectedAuthor === "All") {
              return <Blog
                key={`blog-${post.id}`}
                id={post.id}
                author={post.author}
                createdAt={post.createdAt}
                text={post.text}
                title={post.title}
                edit={this.editBlogPost}
              />
            }
          })}
        </div>

        <Pages />

      </div>
    )
  }
}

function Pages(props) {
  return (
    <div>
      <button>{`<`}</button>
      <button>{`>`}</button>
    </div>
  )
}

export default App