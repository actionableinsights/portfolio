import React  from 'react';
import PROJECTS from '../data/projects';


//statelsess functional components 

const Project = (props) => {
    //accessing prips is different
    console.log('this props', props);
    const {title, image, description, link} = props.project;

    return (
        <div style={{display: 'inline-block', width: 300, margin:10}}> 
           <h3>{title}</h3>
           <img src={image} alt='profile' style={{width:200, height: 120}}/>
           <p> {description} </p>
           <a  href={link}> {link} </a>
        </div>
    )

}


// class Project extends Component {

//     render () {
//         // console.log('thie props', this.props);
//         const {title, image, description, link} = this.props.project;

//         return (
//             <div style={{display: 'inline-block', width: 300, margin:10}}> 
//                <h3>{title}</h3>
//                <img src={image} alt='profile' style={{width:200, height: 120}}/>
//                <p> {description} </p>
//                <a  href={link}> {link} </a>
//             </div>
//         )

//     }
// }

// another stateless class
// can also do it as an inline return 
const Projects = () => {
    return (
        <div>
            <h2> Highlighted Projects </h2>
            <div>
                {
                PROJECTS.map(PROJECT => (
                        <Project key={PROJECT.id} project={PROJECT} /> 
                
                ))
                }

            </div>
        </div>
    )


}

// class Projects extends Component {

//         render () {
//             return (
//                 <div>
//                     <h2> Highlighted Projects </h2>
//                     <div>
//                         {
//                         PROJECTS.map(PROJECT => {
//                             return (
//                                 <Project key={PROJECT.id} project={PROJECT} /> 
//                             )
//                         })
//                         }

//                     </div>
//                 </div>
//             )
//         }


// }

export default Projects;
