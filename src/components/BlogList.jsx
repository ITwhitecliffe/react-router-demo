import React from 'react'
import Blog from './Blog'
import blogs from '../data/content'

function BlogList() {
  return (
    <div>
        {blogs.map((blog) => (
            // <Blog {...blog} />
            <Blog id={blog.id} contents={blog.contents} image={blog.image} />
        ))}
    </div>
  )
}

export default BlogList