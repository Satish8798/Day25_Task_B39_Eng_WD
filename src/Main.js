import { Navigation } from './Navigation';
import { useContext } from 'react';
import { dashBoardContext } from './Context'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ProjectsProgress from './ProjectsProgress';

export function Main() {

  const {dbData}=useContext(dashBoardContext);
  let colors=["blue","green","skyBlue","gold"];

  let projects=['Server Migration','Sales Tracking', 'Customer Database', 'Payout Details', 'Account Setup'];
  let projColors=['red','gold','blue','skyBlue','green'];
  let percent=[20,40,60,80,100];

  return (
    <div className="main">
      <Navigation />
      <div className="dashboard-haeding">
        <h2 style={{color:"grey",padding:"20px"}}>DashBoard</h2>
      </div>
      <div className="dashboard-cards">
      {
        dbData.map((data,index)=>(
          <Card sx={{ width: 250, padding: ".3rem" }} style={{borderLeft: `3px solid ${colors[index]} `}}>
            <CardContent>
              <Typography gutterBottom variant="p" component="div" style={{color: colors[index]}}>
                {data.type}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.num}
              </Typography>
            </CardContent>
          </Card>
        ))
      }
      </div>
      <div className="progress-bars">
        <p>PROJECTS</p>  
        <div className="projects-list">
          {
            projects.map((d,i)=>(
               <ProjectsProgress project= {d} projColor={projColors[i]} percent={percent[i]}/>
            ))
          }
        </div>
      </div>     
    </div>
  );
}
