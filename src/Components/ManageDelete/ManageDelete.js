import React, { useEffect, useState } from 'react';
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
        <div>
            <h1>manage delete</h1>
            <div>
                {
                    services.map(service=><Orders
                    key={service._id}
                    service={service}
                    ></Orders>)

 


                }


            </div>
                
        </div>
    );
};

export default ManageDelete;