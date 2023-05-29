// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {eachBlog} = props
  const {title, description, publishedDate} = eachBlog

  return (
    <li className="blog-item-container">
      <div className="title-and-date-container">
        <h1 className="blog-item-heading">{title}</h1>
        <p className="blog-item-publishedDate">{publishedDate}</p>
      </div>
      <p className="blog-item-description">{description}</p>
      <hr className="horizontal-rule" />
    </li>
  )
}

export default BlogItem
