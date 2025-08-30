import React from 'react';
import './Blog.css';
import { FaUser, FaComments } from 'react-icons/fa';

const brands = [
  '/images/images (1).png',
  '/images/images (2).png',
  '/images/download (20).jpg',
  '/images/images (2).png',
  '/images/images (1).png',
  '/images/images (16).jpg',
];

const blogs = [
  { 
    title: 'Divamam adipis cing nisi', 
    date: '28 May 2018', 
    author: 'Admin',
    comments: 2,
    img: '/images/download (17).jpg' 
  },
  { 
    title: 'Phase flusen sequat dolor', 
    date: '28 May 2018', 
    author: 'Robert',
    comments: 5,
    img: '/images/download (18).jpg' 
  },
  { 
    title: 'Divamam metus ligua', 
    date: '28 May 2018', 
    author: 'Steve',
    comments: 3,
    img: '/images/download.jpg' 
  },
  { 
    title: 'Sed et lorem nunc', 
    date: '28 May 2018', 
    author: 'Lorena',
    comments: 4,
    img: '/images/image.png' 
  },
   
  { 
    title: 'Sed et lorem nunc', 
    date: '28 May 2018', 
    author: 'Lorena',
    comments: 4,
    img: '/images/images (15).jpg' 
  },
];

function Blog() {
  return (
    <section className="blog-section">
      {/* Brand logos */}
      <div className="brand-strip">
        {brands.map((logo, idx) => (
          <img key={idx} src={logo} alt="brand" />
        ))}
      </div>

      {/* Blog section */}
      <div className="blog">
        <h3 className="blog-heading">LATEST BLOG</h3>
        <div className="blog-list">
          {blogs.map((blog, idx) => (
            <div key={idx} className="blog-card">
              <img src={blog.img} alt={blog.title} className="blog-img" />
              <div className="blog-info">
                <h4 className="blog-title">{blog.title}</h4>
                <div className="blog-meta">
                  <span><FaUser /> {blog.author}</span>
                  <span><FaComments /> {blog.comments} Comments</span>
                  <span>{blog.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
