import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  console.log(blogsList)
  return (
    <div className="blog-list-container">
      <ul>
        {blogsList.map(eachBlog => (
          <BlogItem key={eachBlog.id} eachBlog={eachBlog} />
        ))}
      </ul>
    </div>
  )
}

export default BlogList
