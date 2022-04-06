import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Orderss = ({service}) => {


if(!service.whitelist){
    return 
}
    const {name,picture,}=service.whitelist


    const handleUpdate=e=>{ 

        fetch(`http://localhost:9000/order/${service._id}`,{
            method:"PUT",
              headers: { "content-type" :'application/json'},

            body:JSON.stringify(service.whitelist)
        })
        alert("order Updated")

        window.location.reload()
      

    }

    const handleDelete=(id)=>{

     const agree=  window.confirm("Are You Sure want to delete this ? ")
       if(agree){
        fetch(`http://localhost:9000/order/${id}`,{
            method:'DELETE',
            headers: { "content-type" :'application/json'}
        }).then(res=>res.json()).then(data=>{
            console.log(data);
        });
        

  }
  window.location.reload()
    alert("deleted")
       }
    return (


       <Container>
            <Card>
             <h1>User Name  : {service.Name} </h1>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
           
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <button onClick={()=>handleDelete(service._id)} className="btn-danger p-3 text-light border rounded-3 m-3">Delete</button>
       <button onClick={handleUpdate} className="btn-warning p-3 text-light m-3 border rounded-3">Activate</button>
        </Card.Footer>
      </Card>
       </Container>


        // </div>
    );
};

export default Orderss;