import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, handleGoogleSignIn} from './LogInSignUpManager';
import Button from '@material-ui/core/Button';
// import styles from './LogInSignUp.module.css';

const LogInSignUp = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: ''
    });

        initializeLoginFramework();

        const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
        const history = useHistory();
        const location = useLocation();
        let { from } = location.state || { from: { pathname: "/user" } };

        const googleSignIn = () => {
            handleGoogleSignIn()
            .then(res => {
            handleResponse(res, true);
            })
            
        }


        const handleResponse = (res, redirect) =>{
        setUser(res);
        setLoggedInUser(res);
        if(redirect){
            history.replace(from);
        }
        }
    return (
        <div>
            <div style={{marginTop:'50px'}}>
               <Link to='/home'> <img style={{height:'30%', width:'10%',paddingLeft:'550px'}} src={require('../../resources/images/logos/logo.png')} alt="Logo" /></Link>
               <div style={{border:'1px solid black',borderRadius:'10px',width:'500px',marginLeft:'350px',marginTop:'100px'}}>
                <div  style={{textAlign:'center'}}>
                    <h2>Log In with</h2>
                    <Button onClick={googleSignIn} style={{margin:'10px',borderRadius:'10px'}} variant="contained" color="primary">Continue with Google</Button>
                    <p>Don't have an account?<a href="#" onClick={googleSignIn} style={{color: 'blue'}}>Create An Account</a></p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default LogInSignUp;