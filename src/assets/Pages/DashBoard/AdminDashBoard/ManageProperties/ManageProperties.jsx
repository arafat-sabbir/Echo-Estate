import React from 'react';
import useProperties from '../../../../../Hooks/GetProperties/useProperties';

const ManageProperties = () => {
    const {properties} = useProperties()
    console.log(properties);
    return (
        <div>
            <h3 className='text-3xl font-semibold text-center mt-10'>Total ProperTies {properties.length}</h3>
        </div>
    );
};

export default ManageProperties;