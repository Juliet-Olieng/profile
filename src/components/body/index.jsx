import Navbar from "../navbar"
import About from "../about"
import Sidebar from "../footer"
import Education from "../education"
import Project from "../projects"
import './style.css'


const Body=()=>{
return(
    <main>
    <div className="body">
        <Navbar/>
       <About/> 
       <Education/>
   <Project/>
   <Sidebar/>
    </div>
  

    </main>
)
}
export default Body