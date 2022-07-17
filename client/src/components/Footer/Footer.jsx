import React, { Component } from 'react';
import styles from './Footer.module.css';

class Footer extends Component {

    render() { 
        return (
            <div className={styles.footer}>
                <span className={styles.copyright}>
                    Copyright © 2022 | Cristhian Fernández - Perú
                    <a href="https://www.linkedin.com/in/cristhian-fernandez-cumbia/" target='_blank' rel='noreferrer'>
                    <span className={styles.linkedin}><i class="fa-brands fa-linkedin"></i></span>
                    </a>
                </span>
            </div>
        );
    }
}
 
export default Footer;