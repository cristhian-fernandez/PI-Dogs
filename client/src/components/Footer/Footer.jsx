import React, { Component } from 'react';
import styles from './Footer.module.css';

class Footer extends Component {

    render() { 
        return (
            <div className={styles.footer}>
                <span>
                    Copyright © 2022 | Desarrollado por Cristhian Fernández Cumbia - Perú
                </span>
            </div>
        );
    }
}
 
export default Footer;