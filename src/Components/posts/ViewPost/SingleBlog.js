import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const SingleBlog = ({ blogs }) => {
   // const { blog } = blogs;
   console.log(blogs);
   return (


      <Link to={`${blogs._id}`}>
         <Col>
      <Card>
        <Card.Body>
          <Card.Title>{blogs.heading}</Card.Title>
          <Card.Text>
            <small>Blog By : {blogs.username}</small>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
      </Link>

   );
};

export default SingleBlog;