import "./ContentMain.css";
import Cards from "../Cards/Cards";
import Transactions from "../Transactions/Transactions";
import Report from "../Report/Report";
import AllRevenu from "../AllRevenu/AllRevenu";
import Subscriptions from "../Subscriptions/Subscriptions";
import Savings from "../Savings/Savings";
import Loans from "../Loans/Loans";
import Financial from "../Financial/Financial";
import AllSpots from "../AllSpots/AllSpots"
import AvailableSpots from "../AvailableSpots/AvailableSpots"
import AllUsers from "../AllUsers/AllUsers.jsx"
import UsersInSpot from "../AllUsers/UsersInSpot"
import CurrentReservations from "../AllUsers/CurrentReservations"
import EmptySpots from "../AllSpots/EmptySpots"
import TakenSpots from "../AllSpots/TakenSpots"

const ContentMain = () => {
  return (
    <div style={{marginRight:"2px"}} className="main-content-holder">
        <div className="content-grid-one">
        <AllSpots />
        <TakenSpots  />  
            <Report />
            
           
         
        </div>
        <div className="content-grid-one">
        <AllUsers/>
        <UsersInSpot />
        <CurrentReservations /> 
           
         
        </div>
        <div className="content-grid-one">
        <AllSpots />
        <TakenSpots  />  
        <EmptySpots  />
        </div>
        <div style={{ marginLeft: '230px',alignItems: 'center', justifyContent: 'center', width:'1500px',height:"600px"}}>
        
        <AllRevenu />
        
        </div>
        
        <div  className="content-grid-two">
      
            {/* <div className="grid-two-item">
              <div className="subgrid-two">
                <Subscriptions />
                <Savings />
              </div>
            </div> */}

            {/* <div className="grid-two-item">
              <div className="subgrid-two">
                <Loans />
                <Financial />
              </div>
            </div> */}
        </div>
       
    </div>
  )
}

export default ContentMain