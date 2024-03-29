import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Loader from '../Loader/Loader';
import './Details.css'


const Details = () => {


  const { user } = useAuth()
  const { placeid } = useParams()

  const [places, setPlace] = useState({});

  const [adress, setadress] = useState('')

  const [number, setnumber] = useState('')

  useEffect(() => {

    fetch('https://tourist-spot-server.vercel.app/places').then(res => res.json()).then(data => {

      const match = data.find(plc => plc._id == placeid)
      setPlace(match);
    })

  }, [placeid])




  const getaddress = e => {

    setadress(e.target.value)
  }

  const getNumber = e => {

    setnumber(e.target.value);

  }



  const handleConfirm = e => {


    const confirm = window.confirm('are you sure')
    if (confirm) {

      let order = places


      let userdata = { Name: `${user.displayName}`, Email: `${user.email}`, Phone: `${number}`, Adress: `${adress}`, status: "pending" }

      userdata.whitelist = order

      fetch('https://tourist-spot-server.vercel.app/orders', {
        method: 'POST',
        headers: { "content-type": 'application/json' },
        body: JSON.stringify(userdata)

      })

      alert(" your Order Recieved")
    }


    e.preventDefault()
  }


  const { name, Country, about, company, cost, picture, email, phone } = places

  if (!places.name) {

    return <Loader></Loader>
  }

  return (
    <>

      <section className="body d-lg-flex ">
        <div className="containers">
          <div className="card">
            <div className="image">
              <img href="#" src={picture} />
            </div>
            <div className="content">
              <h1>{name}</h1>
              <h5>A Tour By : {company}</h5>
              <h6>email:{email}</h6>
              <h5>Phone:{phone}</h5>

            </div>
          </div>
        </div>
        <form onSubmit={handleConfirm} className="my-4 mx-5">
          <div>

            <h7 className="text-light">User Name </h7><br />
            <input className="form-control w-100 " type="text" disabled placeholder={user.displayName} required /> <br />
            <h7 className="text-light">User Email </h7><br />
            <input className="form-control w-100 " type="text" disabled placeholder={user.email} required /> <br />
            <input onChange={getaddress} className="form-control w-100 " type="text" placeholder="Type Your Address" required /> <br />
            <input onChange={getNumber} className="form-control" type="number" placeholder="Phone Number" required />
          </div>
          <center>
            <button type="submit" className="btn-warning text-light p-3 m-2 border rounded-3">Confirm WhiteList   </button>
          </center>
        </form>
      </section>



    </>
  );
};

export default Details;