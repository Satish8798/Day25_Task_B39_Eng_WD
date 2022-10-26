import * as React from 'react';

const ProjectsProgress = ({project,projColor,percent}) => {


    return ( 
        <div>
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <p>{project}</p>
                <p>{percent}%</p>
            </div>
            <div className="progress">
                <div className="progress-bar" role="progressbar" aria-label="Basic example" 
                style={{width: `${percent}%`,backgroundColor: projColor, height: '.8rem'}} aria-valuenow={percent} aria-valuemin="0" aria-valuemax="100">

                </div>
            </div>
        </div>
     );
}
 
export default ProjectsProgress;