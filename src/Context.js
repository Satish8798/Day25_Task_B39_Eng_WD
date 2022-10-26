import React,{ useState} from 'react';

const dashBoardContext = React.createContext();

const initialDbData =[
    {
        type: "Earnings(monthly)",
        num: "$40,000"
    },
    {
        type: "Earnings(Annual)",
        num: "$215,000"
    },
    {
        type: "Tasks",
        num: "50%"
    },
    {
        type: "Pending Requests",
        num: "18"
    }
]

function DashBoardProvider({children}){
    const [dbData,setDbData] = useState(initialDbData);
    return(
        <dashBoardContext.Provider value={{
            dbData,setDbData
        }}>
            {children}
        </dashBoardContext.Provider>
    );
}
export {dashBoardContext , DashBoardProvider};