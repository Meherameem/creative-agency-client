import React from 'react';

const AddServiceList = (props) => {
    const {name,description} = props.service;
    return (
        <div>
            {name}
        </div>
    );
};

export default AddServiceList;