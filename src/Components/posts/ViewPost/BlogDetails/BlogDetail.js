import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
    const { id } = useParams()


    const [blogs, setBlogs] = useState([])

    useEffect(() => {

        fetch(`https://tourist-spot-server.vercel.app/blog/${id}`).then(res => res.json()).then(data => setBlogs(data))
    }, [id])
  

    return (
        <div className='container'  style={{width:"800%" }}>
            <div >
                <h1>{blogs.heading}</h1> 
                {

                    <div  dangerouslySetInnerHTML={{ __html: blogs.blog }}></div>
                }
                    <small>Posted By {blogs.username}</small>
            </div>
        </div>
    );
};

export default BlogDetail;