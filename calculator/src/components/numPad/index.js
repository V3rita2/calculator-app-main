import React from 'react';
import NumButton from './NumberButt';

const NumPad = (props) => {
    const final = [];
    for (let i = 0; i < 10; i++) {
        final.push(<NumButton key={i} num={i} />)
    };

    return (
        <div>
            {final}
        </div>
    );
};

export default NumPad;