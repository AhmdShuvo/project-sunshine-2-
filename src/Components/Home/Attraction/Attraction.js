import React from 'react';
import { Container } from 'react-bootstrap';

const Attraction = () => {
    return (
        <Container>
            <section className="container-fluid d-md-flex justify-content-md-between align-items-center mt-5">
            <div>
                <h1 style={{ color:'red'}}>Visite places Arround the Globe</h1>
                <p style={{fontFamily:'fantasy'}}>Tourism is a social, cultural and economic phenomenon which entails the movement of people to countries or places outside their usual environment for personal or business/professional purposes.</p>
            </div>
            <div>
                <img className="img-fluid" src="https://www.visualcapitalist.com/wp-content/uploads/2018/02/tourist-attraction-country-1200px.jpg" alt="" />
            </div>
        </section>
        </Container>
    );
};

export default Attraction;