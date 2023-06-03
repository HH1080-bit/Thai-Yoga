import React from 'react';
import styles from './Footer.module.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container d-flex justify-content-between">

                <div>All &copy;opy Rights Are Reserved</div>
                <div className={`${styles.lists}`}>
                    <ul>
                        <li><Link to="/Contact" className={styles.customLink}>Contact Us</Link></li>
                        <li><Link to="/Policy"  className={styles.customLink}>Service Policy</Link></li>
                    </ul>
                </div>
            </div>
            
        </footer>
    );
}

export default Footer;
