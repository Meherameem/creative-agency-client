import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import styles from './Admin.module.css'; 
import { Button, TextField } from '@material-ui/core';
import { UserContext } from '../../App';
import { useContext } from 'react';
import AddServiceList from '../AddServiceList/AddServiceList';

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
  
  

const Admin = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [loggedInUser, setLoggedInUser ] = useContext(UserContext);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [addService,setAddService] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/addService')
        .then(res => res.json())
        .then(data =>{
          setAddService(data);
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
                <Tab label="Add Service" {...a11yProps(0)} />
                <Tab label="Service List" {...a11yProps(1)} />
                <Tab label="Add Admin" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
            <form action="http://localhost:5000/addService" method="post" noValidate autoComplete="off">
                <TextField
                    id="name"
                    label="name"
                    variant="outlined"
                    color="secondary"
                    name='name'
                /><br></br><br></br>
                    <TextField
                    id="description"
                    label="description"
                    variant="outlined"
                    color="secondary"
                    name='description'
                /><br></br><br></br>
                <input type="file" id="image" name="image" accept="image/*"></input><br></br><br></br>
                <Button type="submit" variant="contained" color="secondary">
                    Submit
                  </Button>
                </form>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div>
                  {
                    addService.map(service => <AddServiceList service={service}></AddServiceList>)
                  }
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
            <form>
                <TextField
                    id="name"
                    name="name"
                    label="name"
                    variant="outlined"
                    color="secondary"
                /><br></br><br></br>
                    <TextField
                    id="email"
                    name="email"
                    label="email"
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

export default Admin;