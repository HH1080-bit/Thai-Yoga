import React from 'react';
import styles from './Events.module.css'
import Image from '../Events/Thai-Massage-2.jpg'
import { Link } from 'react-router-dom';

const Events = () => {
    return (
        <div className={styles.events}>
            <div className="container">
            <div className="row py-5">
                <div className="col-lg-6 wow fadeInRight d-flex justify-content-center flex-column">
                    <h2>Bringing Wellness to Your Workplace</h2>
                    <p>We are passionate about community connection and spread the word about the importance of overall physical and mental health.  We also visit workplaces and offer workshops on yoga (seated or on the mat), meditation and Thai Yoga Massage. You can books us for your next wellness day or  schedule weekly/monthly visits at your workplace.</p>
                    <span>
                        <Link to="/Contact" className='text-light'>Please contact us to discuss different options.</Link></span>
                </div>
                <div className="col-lg-6 wow fadeInLeft ">
                    <img src={Image} alt='events' className='img-fluid'/>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Events;
