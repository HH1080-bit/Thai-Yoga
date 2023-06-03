import React from 'react';
import styles from './Home.module.css'
import {AiOutlineArrowDown} from 'react-icons/ai'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from './Assets/Massage-Therapists-Explain-How-Thai-Massage-Helps-Reduce-Pain.jpg'
import ImageTwo from './Assets/EricSpivack_SoaringCrane-488-Edit.jpeg'




const texts = [
    'Relieves muscular Tension',
    'Reduces stress and pain',
    'Improves circulation',
    'Aids digestion',
    'Boosts the immune system',
    'Balances the body energetically',
    'Increases range of motion and flexibility',
    'Deeper relaxation and improved sleep',
    'Enhances athletic performance'];


const Home = () => {

    return (
        <>
        <section className={styles.landing}>
            <section className={`${styles.intro} wow fadeIn`} data-wow-duration="2s">
                <h1>Thai Yoga Massage</h1>
                <p>based on an ancient healing system which incorporates acupressure, massage, yoga, proper breath, and energy work</p>
                    <a href='#About'>
                    <button>
                   <span>Know More</span> 
                    <AiOutlineArrowDown size={20} className={styles.arrowDown}/>
                    </button>
                    </a>
            </section>
            
        </section>
        <section className={`${styles.about}`} id='About'>
            <div className="container">
                <h2>About Thai Yoga Massage</h2>
                <div className='row'>
                    <div className={`${styles.pic} col-lg-6 wow fadeInLeft`}>
                        <img src={Image} alt="About-Us" className='img-fluid rounded'/>
                    </div>
                    <div className='col-lg-6 wow fadeInRight'>
                   <p>Thai Yoga Massage is based on an ancient healing system which incorporates acupressure, massage, yoga, proper breath, and energy work.  The practitioner moves the client’s body gently in different positions while palming and thumbing along the meridians and stretching the body in a slow, rhythmic and mindful way.  It combines compressions, joint mobilizations, rocking, stretching, twisting, wringing, and more in order to re-establish full range of motion and reprogram the nervous system.  Thai Yoga Massage helps to relieve muscular tension, increases circulation and flexibility.  The treatment is tailored to the client’s specific needs. </p> 
                        </div>
                </div>
                </div>
            </section>
            <section className={styles.benefits}>
                <h2>Thai Yoga Massage Benefits</h2>
                <div className='row row-gap-3'>
            {texts.map(text => {
                return <div className='col-lg-4 p-4   text-center' 
                style={{boxShadow:"7px 7px 5px 2px rgba(31,54,36,0.5)", 
                backgroundColor:"#A4D0A4"
                , border: "5px Solid rgb(31, 54, 36)"
                }}>
                        {text}
                </div>
            })} 
            </div>               
            </section>
            <section className={styles.expect}>
            <div className="container">
                <h2>What To Expect</h2>
                <div className='row'>

                    <div className='col-lg-6 wow fadeInRight'>
                           
                                <p>Thai Yoga Massage is done on the floor on a big mat with the recipient in loose, comfortable clothing.   This allows the client a more complete range of motion as you won’t just be lying on your back or stomach when you receive a Thai massage nor will your masseuse, who receives an even greater advantage by being on the floor rather than hunched over a table.</p>
                                <p>During a Thai massage, the masseuse moves all around and above the client to access a wider range of angles over each part of the body, even in cases when the client is much larger than the masseuse.</p>
                                  <p>Rather than just using hands, fists, forearms and elbows the standard tools of western massage Thai masseuse may use legs and feet during the massage. Oftentimes, they will use a combination of both to gain leverage as they initiate deep stretches of the client’s arms, legs, hips, and shoulders. Oil or lotions are rarely used. </p>

                    </div>
                    <div className={`${styles.pic} col-lg-6 wow fadeInLeft`}>
                            <img src={ImageTwo} alt="Expect" className='img-fluid rounded'/>
                    </div>
                </div>
                </div>
            </section>
            <section className={styles.prepare}>
                <h2>How To Prepare</h2>
                <ol>
                    <li>Come in feeling comfortable – ear lightly in the few hours prior to your appointment</li>
                    <li>Please wear loose clothing – preferably made out of cotton.  Long sleeves shirt and yoga type of pants is preferred.</li>
                    <li>Please discuss with your therapist any goals you have for the session (for example, greater flexibility, less tension, injury recovery, headache relief) and specify areas you would like to focus on.</li>

                </ol>
            </section>
        </>
    );
}

export default Home;
