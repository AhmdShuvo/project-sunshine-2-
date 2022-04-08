import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link} from 'react-router-dom';

const Place = ({place}) => {
    
      const {name,Country,about,company,cost,picture,_id,setIsLoadng}=place;
      
      const url=`/places/${_id}`
  
  
     
    
      return (
          <div >
              <Col >
        <Card className="shadow-lg p-3 mb-5 rounded   card">
          <Card.Img className="p-2 img-fluid border border-info " variant="top" src={picture} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <h4 className="text-info p-2"> Country :{Country}</h4>
            <Card.Text>
             {about} 
            
            </Card.Text>
            <div className="border border-2 p-3 text-warning">
  
                <h5>A Tour By : {company}</h5>
                <h4>Cost :$ {cost}</h4>
               <Link to={url}> <button onClick={()=>setIsLoadng(false)}  className="btn-warning p-2 text-light border rounded-3 fs-4 "> Add to whiteList   </button></Link>
  
            </div>
         
          </Card.Body>
        </Card>
      </Col>
          </div>
      );
  };
  
  export default Place;