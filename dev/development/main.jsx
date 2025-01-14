import { createRoot } from 'react-dom/client'
import  Navbar  from "./Components/Navbar/Navbar.jsx"
import './index.css'



const root = createRoot(document.getElementById("root"))

root.render(
    <>
    <Navbar />
    <div className='sec1'>
    <h1 className="findyourframe" style={{color: "#595959"}}> FIND YOUR <span style={{color: "#DFD34F"}}>FRAME</span>.</h1>
    <p>Lorem ipsum dolor sit amet, consectetur
         adipiscing elit. Cras est erat, pretium ac
          consectetur et, commodo volutpat erat.
           Suspendisse sollicitudin, sapien qu</p>
    </div>
    </>
)