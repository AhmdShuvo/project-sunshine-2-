
import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.hotel-belle-juliette-paris.com/images/monuments/xhc-a-eu-france-paris-eiffel-tower.jpg.pagespeed.ic.BNs04QGFN9.webp"
          alt="First slide" height="500"
        />
        <Carousel.Caption className="text-light" >
          <h3>Eiffel-Tower</h3>
          <p>When the Eiffel Tower was inaugurated in March 1889, it was considered to be the tallest structure in the world. Standing roughly 300 meters tall, it would keep this title until the construction of the Chrysler Building in the 1930s.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://whc.unesco.org/uploads/thumbs/site_0252_0008-750-0-20151104113424.jpg"
          alt="Second slide"
          height="500" />

        <Carousel.Caption>
          <h3>Taj Mahal</h3>
          <p>An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife, the Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.sciencealert.com/images/2022-03/processed/MachuPicchuName_1024.jpg"
          alt="Third slide" height="500"
        />

        <Carousel.Caption>
          <h3>Machu Picchu </h3>
          <p>One of the most famous archaeological sites in the world may be named after a simple misunderstanding.

            The ancient Inca city we know as 'Machu Picchu' should probably be called 'Picchu' or 'Huayna Picchu', according to a new analysis of historical documents.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;