import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Header extends Component{

    
    render(){
        const style={
        display:'inLine-block',
        margin:10,
        marginBottom:30
        };
        return(
        <div>
            <h3 style={style}><Link to='/'>Home</Link></h3>
            <h3 style={style}><Link to='/Jokes'>Jokes</Link></h3>
        </div>
        )
    }
}
export default Header;