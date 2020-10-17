import { Card } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomeServiceCard.module.css';

const HomeServiceCard = (props) => {
    const {name, description} = props.service;
    return (
        <div>
            <Link to='/logSign' style={{textDecoration: 'none'}}>
                <Card className={styles.card}>
                    <img style={{height:'10%', width:'10%'}} src={require('../../resources/images/icons/service1.png')} alt="Service"></img>
                    <div>
                        <h3>
                            {name}
                        </h3>
                        <p>
                            {description}
                        </p>
                    </div>
                </Card>
            </Link>
        </div>
    );
};

export default HomeServiceCard;