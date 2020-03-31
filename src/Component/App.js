import React,{Component} from 'react';
import Project from './project';
import SOCIAL_PROFILE from './socialProfile';
import profile from "../assets/profile.jpg";
import Title from "./student";
import './project.css'


class App  extends Component {
  // state={displayBio:false,intro:true};
  constructor(){
    super();
    this.state={displayBio:false,intro:true};
    console.log("thisis the work",this);
 
    this.readMode=this.readMode.bind(this)
  }
  readMode=()=>{
    this.setState({displayBio:!this.state.displayBio});
    }
  render(){

    return(
          <div>
            <h1>Hellow</h1>
            <img src={profile}  className="avatar"></img>
             {this.state.intro ?
              <div>
              <h2>Hi, my name is Subhransu. I'm a software Engineer.</h2>
              <Title></Title>
              <h3>I worked on 2 project NGCGI(Cisco) and Pulse </h3>
              </div>
              :null
            }
          { this.state.displayBio ?  
            <div>
            <p>I am living in Banglore</p>
            <p>Beside coading , i also love playing games.</p>
            
            <button onClick={this.readMode}>
                show less
              </button> 
              </div>:
            (<div>
              <button onClick={this.readMode}>Read Mode</button>
            </div>)
            }     
            <hr></hr>
            <Project></Project>
            <hr></hr>
            <SOCIAL_PROFILE></SOCIAL_PROFILE>
        
          </div>
          
    )

  }
}

export default App;


