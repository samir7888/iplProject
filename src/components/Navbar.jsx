
import { Outlet } from 'react-router-dom'
import InPageNavigation from './InPageNavigation'

function Navbar() {
  return (
    <>
    <div className='w-[100%] h-28 bg-blue-800 flex justify-center items-end '>
        <InPageNavigation  teams={[
            {title:"MATCHES", path : "/"},
            {title:"NEWS", path : "/news"},
            {title:"STANDINGS", path : "/pointsTable"}]}>

              </InPageNavigation>
        {/* <Link to ="/"><h1>MATCHES</h1> 
         </Link>
        <Link to ="/pointsTable"><h1>STANDINGS</h1> 
         </Link>
        <Link to ="/news"><h1>NEWS</h1> 
         </Link> */}
    </div>
    <Outlet/>
   
    </>
  )
}

export default Navbar