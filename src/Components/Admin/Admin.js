import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom'; 
import { Button, TextField } from '@material-ui/core';
import styles from './Admin.module.css';

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

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <div style={{display:"flex",flexDirection:"row"}}>
                <Link to='/home'> <img className={styles.header} style={{height:'40%', width:'30%'}} src={require('../../resources/images/logos/logo.png')} alt="Logo" /></Link>
                <h4 className={styles.header} style={{marginLeft:'500px'}}>Admin</h4>
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
                <Tab label="Service List" {...a11yProps(0)} />
                <Tab label="Add Service" {...a11yProps(1)} />
                <Tab label="Add Admin" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                Service List
            </TabPanel>
            <TabPanel value={value} index={1}>
                <form>
                    <TextField
                        id="Service Name"
                        label="Service Name"
                        variant="outlined"
                        color="secondary"
                        value=''
                    /><br></br><br></br>
                        <TextField
                        id="Description"
                        label="Description"
                        variant="outlined"
                        color="secondary"
                        value=''
                    /><br></br><br></br>
                    <input type="file" id="img" name="img" accept="image/*"></input><br></br><br></br>
                    <Button variant="contained" color="secondary">
                        Add
                        </Button>
                    </form>
            </TabPanel>
            <TabPanel value={value} index={2}>
            <form>
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
                <Button variant="contained" color="secondary">
                    Add
                    </Button>
                </form>
            </TabPanel>
            </div>
        </div>
    );
};

export default Admin;