import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import defaultImg from '../images/room-1.jpeg';
import PropTypes from 'prop-types';
import Booking from './hotels/Booking';

export default function Room({ room }) {
    const { name, slug, images, price } = room;
    return (

        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaultImg} alt="single room" />


                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>

                </div>
                    <div className="bg-light book-hotel text-white mb-5">
                            <Card style={{marginTop:"10px"}}>
                                <CardBody style={{textAlign: "left"}}>
                                    <Booking />
                                </CardBody>
                            </Card>
                            
                        </div>
                <Link to={`/rooms/${slug}`} className="btn-primary room-link">Features</Link>


            </div>

            <p className="room-info">{name}</p>
        </article>
    )
}


Room.propTypes = {
    room:PropTypes.shape(({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired,
    }))
}