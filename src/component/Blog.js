function Blog(props) {

    return <div className='blog'>
      <h2>{props.title}</h2>
      <h3>Posted By: {props.author}</h3>
      <h3>Posted On: {props.createdAt}</h3>
      <textarea
        className='blog__body'
        onChange={(e) => { props.edit(e, props.id) }}
        value={props.text}
      />
    </div>
  }

  export default Blog