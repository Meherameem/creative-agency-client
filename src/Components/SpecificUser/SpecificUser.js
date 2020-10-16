import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import styles from './SpecificUser.module.css'; 
import { Button, TextField } from '@material-ui/core';
import { UserContext } from '../../App';
import { useContext } from 'react';
import UserServiceList from '../UserServiceList/UserServiceList';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: 224,
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
  }));
  
  

const SpecificUser = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [loggedInUser, setLoggedInUser ] = useContext(UserContext);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [userServices,setUserServices] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/userServices')
    .then(res => res.json())
    .then(data =>{
      setUserServices(data);
    })

  },[]);
    return (
        <div>
            <div style={{display:"flex",flexDirection:"row"}}>
                <Link to='/home'> <img className={styles.header} style={{height:'40%', width:'30%'}} src={require('../../resources/images/logos/logo.png')} alt="Logo" /></Link>
                <h4 className={styles.header} style={{marginLeft:'500px'}}>{loggedInUser.name}</h4>
                <br/>
            </div>
            <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab label="Order" {...a11yProps(0)} />
                <Tab label="Service List" {...a11yProps(1)} />
                <Tab label="Review" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
            <form  action="http://localhost:5000/userServices" method="post" noValidate autoComplete="off">
                <TextField
                    id="Your Name/Company"
                    label="Your Name/Company"
                    variant="outlined"
                    color="secondary"
                    name='name'
                /><br></br><br></br>
                    <TextField
                    id="Email Address"
                    label="Email Address"
                    variant="outlined"
                    color="secondary"
                    name='email'
                /><br></br><br></br>
                    <TextField
                    id="Service"
                    label="Service"
                    variant="outlined"
                    color="secondary"
                    name="service"
                /><br></br><br></br>
                <TextField
                    id="Description"
                    label="Description"
                    variant="outlined"
                    color="secondary"
                    name="description"
                /><br></br><br></br>
                <TextField
                    id="Price"
                    label="Price"
                    variant="outlined"
                    color="secondary"
                    name="price"
                /><br></br><br></br>
                <input type="file" id="img" name="img" accept="image/*"></input><br></br><br></br>
                <Button type="submit" variant="contained" color="secondary">
                    Submit
                  </Button>
                </form>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div>
                  {
                    userServices.map(userService => <UserServiceList userService={userService}></UserServiceList>)
                  }
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
            <form  action="http://localhost:5000/reviews" method="post" noValidate autoComplete="off">
                <TextField
                    id="Your Name"
                    name="name"
                    label="Your Name"
                    variant="outlined"
                    color="secondary"
                /><br></br><br></br>
                    <TextField
                    id="Company/ Organization"
                    name="occupation"
                    label="Company/ Organization"
                    variant="outlined"
                    color="secondary"
                /><br></br><br></br>
                    <TextField
                    id="Description"
                    name="description"
                    label="Description"
                    variant="outlined"
                    color="secondary"
                /><br></br><br></br>
                <Button type="submit" variant="contained" color="secondary">
                    Submit
                    </Button>
                </form>
            </TabPanel>
            </div>
        </div>
    );
};

export default SpecificUser;