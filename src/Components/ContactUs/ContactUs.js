import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ContactUs.module.css';

const ContactUs = () => {
    return (
        <div>
            <div style={{marginTop:'30px'}}>
                <Link to='/home'> <img className={styles.header} style={{height:'40%', width:'30%'}} src={require('../../resources/images/logos/logo.png')} alt="Logo" /></Link>
                <br></br><br></br>
                <form style={{marginLeft:'500px'}}>
                <TextField
                    id="Name"
                    label="Name"
                    variant="outlined"
                    color="secondary"
                    value=''
                /><br></br><br></br>
                    <TextField
                    id="Email"
                    label="Email"
                    variant="outlined"
                    color="secondary"
                    value=''
                /><br></br><br></br>
                <TextField
                    id="Message"
                    label="Message"
                    variant="outlined"
                    color="secondary"
                    value=''
                /><br></br><br></br>
                <Button variant="contained" color="secondary">
                    Send Message
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;