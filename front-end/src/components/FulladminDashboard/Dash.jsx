import './Dash.css';
import Sidebar from './layout/Sidebar/Sidebar';
import Content from './layout/Content/Content';

function Dash({userData}) {
  return (
    <>
      <div className='Dash'>
        <Sidebar  userData={userData}/>
        <Content userData={userData} />
       
      </div>
    </>
  )
}

export default Dash