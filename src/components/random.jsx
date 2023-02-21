import React from 'react';

function Random(props) {
    const { min, max } = props;
    const randomNum =  Math.floor(Math.random() * (max - min + 1) + min);

    return (
        <div>
            Random Lucky number between {min} and {max} is {randomNum};
        </div>
    )
}

export default Random;