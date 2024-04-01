import React from 'react';

const Watch = ({watch}) => {
    const {brand, price} = watch;
    return (
        <div>
            <h1>Watch:{watch.brand}</h1>
        <p>Watch Price:{watch.price}</p>
        </div>
    );
};

export default Watch;