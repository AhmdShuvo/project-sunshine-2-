import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import Loader from '../Loader/Loader';
import Orders from './Orders';

const ManageDelete = () => {

    const {user}=useAuth()
    const [services,setservices]=useState([])

    useEffect(()=>{
        fetch(`http://localhost:9000/orders`).then(res=>res.json()).then(data=>{

       setservices(data)
        })
    },[])

    if(!services){
        return <Loader></Loader>
    }
    return (
        <Container>
            <h1>Manage Orders</h1>
            <div>
                {
                    services.map(service=><Orders
                    key={service._id}
                    service={service}
                    ></Orders>)

 


                }


            </div>
                
        </Container>
    );
};

export default ManageDelete;