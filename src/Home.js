import { Main } from './Main';
import { SideBar } from './SideBar';
import {DashBoardProvider} from './Context'

export const Home = () => {

  return (
    <div className="wrapper">  
      <SideBar />
      <DashBoardProvider>
        <Main /> 
      </DashBoardProvider>
    </div>
  );
};

