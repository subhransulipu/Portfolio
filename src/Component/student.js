import React from 'react'
import { Component } from "react";


const TITLE=[
    "I am a frontend Developer",
    "I am a painter",
    "I love bike Riding",
    "I love to play all types of indor and outdoor games."
]
class Title extends Component{
    
    state={titleIndex:0}

    componentDidMount(){
        this.animateTitels()
    }

    animateTitels= () =>{
    setInterval(()=>{
        const titleIndex=(this.state.titleIndex +1) % TITLE.length;
        this.setState({titleIndex});
    },4000
    )
    }

    render(){
        return(
        <div>{TITLE[this.state.titleIndex]}</div>
            
        )
    }
}

export default Title;