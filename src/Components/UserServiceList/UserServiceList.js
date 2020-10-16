import React from 'react';

const UserServiceList = (props) => {
    const {name,email,service,description,price} = props.userService; 
    return (
        <div>
            <div style={{display:"flex",flexDirection:"row"}}>
                <p>{name}</p><p>-------</p><p>{email}</p><p>-------</p><p>{service}</p><p>-------</p><p>{description}</p><p>-------</p><p>{price}</p>
            </div>
        </div>
    );
};

export default UserServiceList;