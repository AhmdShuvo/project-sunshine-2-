import React from 'react';

const Orders = ({order}) => {
    const {name,Country,company,cost,picture,email,phone,status}=order.whitelist;
    const handleDelete=(id)=>{

       const agree=window.confirm("Are You Sure You Want to Delete this ?")
       if(agree){
        fetch(`http://localhost:9000/order/${id}`,{
            method:'DELETE',
            headers: { "content-type" :'application/json'}
        }).then( async res=>res.json()).then(async data=>{
            console.log(data);
            alert("order Deleted")
        });
       }
       window.location.href="/"
     
  }
    return (
        <div className=" container my-5 border border-info p-3 d-lg-flex align-items-center">
           
               <img className="border rounded-3 me-5 img-fluid" src={picture} alt="" />
           
           <div className="text-dark">
               <h1>Place Name: <span className="text-dark">{name}</span></h1>
               <h2>Country: <span className="text-dark">{Country}</span></h2>

               <div className="border border-info p-2 text-dark">

         <center> <h3>Total cost=  {cost}$ </h3>
          <h5>A Tour By : {company}</h5>
          <h5>Contact email : {email}</h5>
          <h5>Contact Phone: {phone}</h5>
          
          </center>
           {status&&<h5>status : {order.status}</h5>}

           <div>
               <button onClick={()=>handleDelete(order._id)} className="btn-danger text-light p-3 border rounded-3">Delete Purhase </button>
           </div>

       
      </div> 
           </div>
        </div>
    );
};

export default Orders;