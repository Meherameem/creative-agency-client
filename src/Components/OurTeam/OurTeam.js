import React from 'react';
import { Link } from 'react-router-dom';
import styles from './OurTeam.module.css';

const OurTeam = () => {
    return (
        <div>
            <div style={{marginTop:'30px'}}>
                <Link to='/home'> <img className={styles.header} style={{height:'40%', width:'30%'}} src={require('../../resources/images/logos/logo.png')} alt="Logo" /></Link>
                <br></br><br></br>
                <h2 style={{textAlign:'center'}}>Team Details is going to be added soon........</h2>
            </div>
        </div>
    );
};

export default OurTeam;