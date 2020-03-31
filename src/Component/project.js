import React, { Component } from 'react';
import PROJECTS from '../data/project';
import './project.css';


class Projects extends Component{
    render(){
        return(
           <div>
           <h2>Highlighted Projects</h2>

            {PROJECTS.map((item)=>{
                return (
                    <div style={{ display: 'inline-block', width: 400, margin: 10 }} >
                      <h3>{item.title}</h3>
                      <img src={item.image} alt='profile' className="pimage" />
                      <p>{item.description}</p>
                      <a href={item.link}>{item.link}</a>
                    </div>
                  )
            })}
            </div>
        )
    }
}


// const Project = props => {
//     const { title, image, description, link } = props.project;
  
    
//   }
  
//   const Projects = () => (
//     <div>
//       <div>
//         {
//           PROJECTS.map(PROJECT => (
//             <Project key={PROJECT.id} project={PROJECT} />
//           ))
//         }
//       </div>
//     </div>
//   )
  
  export default Projects;