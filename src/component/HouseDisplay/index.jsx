import React from 'react';

const HouseDisplay = ({ houses }) => {
    return (
        <div>
            <h2>Houses on Display</h2>
            <ul style={{ listStyleType: 'none' }}>
                {houses.map((house, index) => (
                    <li key={index}>
                        <h3>{house.name}</h3>
                        <div>{house.address}</div>
                        <div>Price: ${house.price}</div>
                        {house.isSold ? <div>Sold</div> : <div>Available</div>}
                    </li>
                ))}
            </ul>
        </div>
  );
}

export default HouseDisplay;
