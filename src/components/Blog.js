import React from 'react';
import './Blog.css';

const blogs = [
  { title: 'Divamam adipis cing nisi', date: '28 May 2018', img: '/images/download (17).jpg' },
  { title: 'Phase flusen sequat dolor', date: '28 May 2018', img: '/images/download (18).jpg' },
  { title: 'Divamam metus ligua', date: '28 May 2018', img: '/images/download.jpg' },
  { title: 'Sed et lorem nunc', date: '28 May 2018', img: '/images/images (7).jpg' },
];

function Blog() {
  return (
    <section className="blog">
      <h3>LATEST BLOG</h3>
      <div className="blog-list">
        {blogs.map((blog, idx) => (
          <div key={idx} className="blog-item">
            <img src={blog.img} alt={blog.title} />
            <div>
              <h4>{blog.title}</h4>
              <span>{blog.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
