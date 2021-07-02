import React, { useState } from 'react';
import { link } from 'react-router-dom';
// connects to  chat path

const Enter = () => {
    const{ name, setName } = useState('')


    return(
        <div>
            <h1>Enter</h1>
            <p> signup or login</p>
        </div>
        
    )
}

export default Enter;