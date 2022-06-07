import React from 'react';

function clock () {
return (
    <p>

{new Date().toLocaleTimeString()}

    </p>
)
}

export default clock;