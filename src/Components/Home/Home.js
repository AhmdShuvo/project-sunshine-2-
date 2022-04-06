import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Attraction from './Attraction/Attraction';
import Banner from './Banner/Banner';
import Place from './Place';

const Home = () => {
  const [places,setplaces]=useState([])

  useEffect(()=>{
fetch("http://localhost:9000/places").then(res=>res.json()).then(data=>{

setplaces(data.slice(0,6))

})
  },[])
    return (
        <>
          <Banner></Banner>
          <Attraction></Attraction>
          <section className="container my-5">

<h3 className="  my-4">Featured Places For You </h3>

<Row xs={1} md={2} className="g-4">
    {

        places.map(place=><Place
        key={place._id}
        place={place}
        ></Place>)
    }

</Row>
</section>
        </>
    );
};

export default Home;