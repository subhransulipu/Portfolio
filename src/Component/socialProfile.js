import React,{Component} from 'react';
import social_Profile from '../data/socialProfiles.js';
import './project.css';




class SOCIAL_PROFILE extends Component{
render(){
    return(
        <div>
            <h1>Social profile</h1>
            {social_Profile.map((item) =>{
                return(
                <span className="block">
                 <a className="link"  href={item.link}><img src={item.image} alt="item" className="smallicon"/></a>
                </span>
                )
                        })}
        </div>
    )
}
}

export default SOCIAL_PROFILE;
