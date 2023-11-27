import Navbar from "../navbar"
import About from "../about"
import Sidebar from "../sidebar"
import Education from "../education"
import Project from "../projects"
import './style.css'


const Body=()=>{
return(
    <main>
    <div className="body">
        <Sidebar/>
       <About/> 
    </div>
    <Education/>
   <Project/>

    </main>
)
}
export default Body