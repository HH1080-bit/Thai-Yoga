import React from 'react';
import styles from './Pricing.module.css'

const Pricing = () => {

    const plans = [
        {
            id:1,
            planName: "60 Min",
            price: "85"
        },
        {
            id:2,
            planName:"90 Min",
            price:"120"
        },
        {
            id:3,
            planName:"Couples Plan (60 Min)",
            price: "200" 
        },
        {
            id:4,
            planName:"Parental (45 Min)",
            price: "90"
        }

    ]
    return (
        <div className={styles.pricing}>
            <div className="container">
                <h2 className='text-center'>Pricing List</h2>
                <span className='d-inline-block text-center'>HST Not Included</span>
                <div className='row gap-3 justify-content-center my-5'>
                {plans.map(plan => {
                    return <div className={`${plan.id} col-lg-6 ${styles.card} text-center rounded`}>
                            <h3>{plan.planName}</h3>
                            <span>${plan.price}</span>
                    </div>
                })}
                </div>
                <div className={`${styles.notes} rounded my-3`}>
                <h3 className='text-center'>Important Notes</h3>
                <ul>
                    <li>Package : Purchase 3 massages and receive 8% off</li>
                    <li>In your home: Add $10 per visit</li>
                    <li>Gift Certificates available</li>
                </ul>
                <p className='mx-3'>Most extended health insurance will not cover Thai Yoga Massage (please check with your insurance provider), however, referral through your physio therapist could be eligible for coverage</p>
                    
                </div>
                
            </div> 
        </div>
    );
}

export default Pricing;
