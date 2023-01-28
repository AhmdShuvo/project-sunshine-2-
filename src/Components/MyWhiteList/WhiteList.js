import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Orders from './Orders';


const WhiteList = () => {

    const { email } = useParams()
    const [myOrders, setorders] = useState([])


    useEffect(() => {
        fetch(`https://tourist-spot-server.vercel.app/orders/${email}`).then(res => res.json()).then(data => {

            setorders(data)
        })

    }, [email])

    return (
        <div className="container my-5">
            <h4>My Orders </h4>

            {

                myOrders.map(order => <Orders

                    key={order._id}
                    order={order}
                ></Orders>)
            }

        </div>
    );
};

export default WhiteList;