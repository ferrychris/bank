import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { SideMenu } from '../components/Overview'
import { DashboardOverview } from '../components/Dashboardfams'
import { OverviewPlayfield } from '../components/Overview'
import { Analytics } from '../components/Analytics'



// import { Dashboardcomponents, SideMenu } from '../components/Overview'



const Dashboard = () => {
  return (

   <React.Fragment>
    <section>
      <div>
      <OverviewPlayfield />
      </div>
    </section>

      <section>
        <div className='grid grid-cols-12'>
          <div className='col-span-2'>
           <SideMenu/>
          </div>
          <div className='col-span-8 ml-8'> 
            <Routes>
            <Route path='/' element={<DashboardOverview/>}/>
            <Route path='/Analytics' element={<Analytics/>}/>
            </Routes>
              
          </div>

        </div>
      </section>
      
        
        </React.Fragment>

      )
}

      export default Dashboard 