import { Card } from '@material-ui/core';
import React from 'react';
import styles from './Feedbackcard.module.css';

const Feedbackcard = (props) => {
  const {name,occupation,description} = props.review;
    return (
        <div style={{width:'25%'}}>
          <Card className={styles.card}>
            <div style={{display:"flex",flexDirection:"row"}}>
              <img style={{height:'25%', width:'25%',marginTop:'5%'}} src={require('../../resources/images/customer-1.png')} alt="customer"></img>
              <div>
                <h3 style={{marginLeft:'20%'}}>
                  {name}
                </h3>
                <h5 style={{marginLeft:'20%', marginTop:'0%'}}>
                  {occupation}
                </h5>
                <h6 style={{marginLeft:'20%', marginTop:'0%'}}>
                  {description}
                </h6>
              </div>

            </div>
            </Card>
        </div>
    );
};

export default Feedbackcard;
