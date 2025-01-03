import React from 'react'
import BlogCard from '../BlogCard'
import blog from '../../../../public/home-page-img/blog-01.png'
import Button from '../common/Button'

export default function OurBlogs() {
  return (
    <section className='pt-10 mb-20'>
        <div className='lg:container mx-auto bg-secondary_bg py-20 px-10'>
        <h2 className='text-white text-3xl lg:text-5xl font-medium text-center'>Our Blogs</h2>
        <p className='text-secondary_color text-center my-5'>Check out our latest blogs here</p>
        <div className='flex flex-wrap gap-6 mx-auto justify-center'>
        <div className="pt-5 pb-5"> {/* Wrapper for spacing */}
            <BlogCard
              image={blog}
              title='Investment Advisor Certificate'
              date='24/11/2024'
              relatedOne='Courses'
              relatedTwo='News'
            />
          </div>
          <div className="pt-5 pb-5">
            <BlogCard
              image={blog}
              title='Investment Advisor Certificate'
              date='24/11/2024'
              relatedOne='Courses'
              relatedTwo='News'
            />
          </div>
          <div className="pt-5 pb-5">
            <BlogCard
              image={blog}
              title='Investment Advisor Certificate'
              date='24/11/2024'
              relatedOne='Courses'
              relatedTwo='News'
            />
          </div>
          <div className="pt-5 pb-5">
            <BlogCard
              image={blog}
              title='Investment Advisor Certificate'
              date='24/11/2024'
              relatedOne='Courses'
              relatedTwo='News'
            />
          </div>
          <div className="pt-5 pb-5">
            <BlogCard
              image={blog}
              title='Investment Advisor Certificate'
              date='24/11/2024'
              relatedOne='Courses'
              relatedTwo='News'
            />
          </div>

        </div>

        <div className='text-center mt-10'>
            <Button title='View More'/>
        </div>
        </div>
      
    </section>
  )
}
