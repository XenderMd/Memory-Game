import React from 'react';

import {Link} from 'react-router-dom';


const Button = ({children, to, className})=>{

    return(
        <Link className = {className} to={to?to:"/"}>{children}</Link>
    )

}

export default Button;