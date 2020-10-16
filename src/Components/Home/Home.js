import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeCarousel from '../HomeCarousel/HomeCarousel';
import HomeServiceCard from '../HomeServiceCard/HomeServiceCard';
import styles from './Home.module.css';
import Feedbackcard from '../Feedbackcard/Feedbackcard';
import TextField from '@material-ui/core/TextField';



const Home = () => {
  const [reviews,setReviews] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/reviews')
    .then(res => res.json())
    .then(data =>{
      setReviews(data);
    })

  },[]);
    return (
      <div>
        <div className={styles.top}>
          <div style ={{display:"flex",flexDirection:"row"}}>
            <Link to='/home'><img style={{height:'50%',width:'25%',paddingTop:'15px',paddingLeft:'30px'}} src={require('../../resources/images/logos/logo.png')} alt='Creative'></img></Link>

            <div style ={{marginLeft:'150px',paddingTop:'50px',display:"flex",flexDirection:"row"}}>
              <Link to='/home' className={styles.link}>Home</Link>
              <Link to='/portfolio' className={styles.link}>Our Portfolio</Link>
              <Link to='/team' className={styles.link}>Our Team</Link>
              <Link to='/contact' className={styles.link}>Contact Us</Link>
              <Link to='/logSign' className={styles.link}>Log In</Link>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.text}>
              <h1> Lets grow your brand to the next level</h1>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at leo non ex porta egestas ut in leo. Praesent libero lacus, placerat sed blandit id, gravida id nisl. Integer vitae mattis elit. Aliquam erat volutpat. Donec ac elementum nunc.</p>
              <a href="#" className={styles.btnA}>Hire Us</a>

            </div>
            <div className={styles.mainimg}>
              <img style={{height:'90%', width:'80%'}} src={require('../../resources/images/logos/Frame.png')} alt='home image' />
            </div>
          </div>
        </div>

        <div style ={{display:"flex",flexDirection:"row",paddingTop:'100px',paddingLeft:'250px'}}>
          <img style={{height:'10%',width:'10%',paddingRight:'60px',paddingTop:'10px'}} src={require('../../resources/images/logos/airbnb.png')} alt='airbnb'></img>
          <img style={{height:'8%',width:'8%',paddingRight:'60px',paddingTop:'10px'}} src={require('../../resources/images/logos/google.png')} alt='google'></img>
          <img style={{height:'10%',width:'10%',paddingRight:'60px',paddingTop:'10px'}} src={require('../../resources/images/logos/slack.png')} alt='slack'></img>
          <img style={{height:'8%',width:'8%',paddingRight:'60px'}} src={require('../../resources/images/logos/netflix.png')} alt='netflix'></img>
          <img style={{height:'7%',width:'7%',paddingRight:'60px'}} src={require('../../resources/images/logos/uber.png')} alt='uber'></img>

        </div>

        <div className={styles.second}>
          <h3>Provide Awesome <span style={{color: 'green'}}>Services</span></h3>
          <div style={{marginLeft:'30px'}}>
            <div style={{display:"flex",flexDirection:"row"}}>
              <HomeServiceCard></HomeServiceCard>
            </div>
          </div>

        </div>

        <div className={styles.third}>
          <h3 style={{color:'white'}}>Here are some of our <span style={{color:'green'}}>works</span></h3>
          <div>
            <HomeCarousel></HomeCarousel>
          </div>
        </div>

        <div className={styles.fourth}>
          <h3>Clients <span style={{color: 'green'}}>Feedback</span></h3>
          <div style={{marginLeft:'30px'}}>
            <div style={{display:"flex",flexDirection:"row"}}>
              {reviews.map(review => <Feedbackcard review={review}></Feedbackcard>)}
            </div>
          </div>

        </div>

        <div className={styles.top}>

          <div className={styles.box}>
            <div className={styles.text}>
              <h1> Let us handle your project, professionally.</h1>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at leo non ex porta egestas ut in leo. Praesent libero lacus, placerat sed blandit id, gravida id nisl. Integer vitae mattis elit. Aliquam erat volutpat. Donec ac elementum nunc.</p>

            </div>
            <div className={styles.forms}>
              <form noValidate>
                <TextField

                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Your Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="name"
                  label="Your name/ company name"
                  id="name"
                  autoComplete="current-name"
                />

                <TextField
                  id="outlined-textarea"
                  margin="normal"
                  label="Your message"
                  placeholder="Placeholder"
                  multiline
                  required
                  fullWidth
                  variant="outlined"
                  rows={8}
                />


                <a className={styles.form_button} href="#" type="submit" >Hire Us</a>

              </form>

            </div>
          </div>
        </div>



      </div>

    );
};

export default Home;
