import React from 'react-dom';
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import earth from '../photo/After-Earth.jpg';
import Battel from '../photo/battel.jpg';
import War from '../photo/war.jpg';

import './poster.css';

export default function PosterReview() {
    return (
        <div className='poster'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={War}
                        alt="First slide"
                    />
                    <Carousel.Caption className='Color'>
                        <h3>War</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <Button variant="danger">Upcoming Movies...</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={earth}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='Color'>
                        <h3>After Earth</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Button variant="danger">Upcoming Movies...</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Battel}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='Color'>
                        <h3>Battle Angel</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <Button variant="danger">Upcoming Movies...</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}