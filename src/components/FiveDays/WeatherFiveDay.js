import React from 'react';

const WeatherFiveDay = (res) => {

    return (
        <div>
            <button onClick={()=> res.setDay('one')}>Back</button>
        </div>
    );
};

export default WeatherFiveDay;