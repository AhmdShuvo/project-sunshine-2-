
import React from 'react';
import { Link } from 'react-router-dom';
import SingleBlog from './SingleBlog';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
// import useAuth from '../../hooks/useAuth';

const Blog = () => {

   // states //
   const [blogs, setBlogs] = useState([])

   // Load Blogs data from Database ///

   useEffect(() => {
      fetch("https://tourist-spot-server.vercel.app/blogs").then(res => res.json()).then(data => setBlogs(data.reverse()))
   }, [])


   return (
      <div>

         {/* <!-- ====== Blog Section Start --> */}
         <section className="pt-20 lg:pt-[40px] pb-10 lg:pb-20">
            <div className="container">
               <div className="flex flex-wrap justify-center -mx-4">
                  <div className="w-full px-4">
                     <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                        <span className="font-semibold text-lg  mb-2 block ">
                           Our Blogs
                        </span>
                        <h2 className=" font-bold text-3xl sm:text-4xl md:text-[40px] mb-4">
                           Our Recent Blogs
                        </h2>
                     </div>
                  </div>
               </div>
               <Row xs={1} md={2} className="g-4">

                  {/* For each blogs shows a single blog / */}


                  {
                     blogs.map(Blog => <SingleBlog
                        key={Blog._id}
                        blogs={Blog}
                     ></SingleBlog>)
                  }


               </Row>
            </div>
         </section>
         {/* <!-- ====== Blog Section End --> */}
         <div className="flex flex-wrap justify-center mx-4">

         </div>

      </div>
   );
};

export default Blog;