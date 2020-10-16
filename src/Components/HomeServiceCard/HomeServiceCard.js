import { Card } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomeServiceCard.module.css';

const HomeServiceCard = () => {
    return (
        <div>
            <Link to='/logSign' style={{textDecoration: 'none'}}>
                <Card className={styles.card}>
                    <img style={{height:'10%', width:'10%'}} src={require('../../resources/images/icons/service1.png')} alt="Service"></img>
                    <h3>
                        Web & Mobile Design
                    </h3>
                    <p>
                        We craft stunning and amazing web UI<br></br>
                        using well drafted UX to fit your products
                    </p>
                </Card>
            </Link>
        </div>
    );
};

export default HomeServiceCard;