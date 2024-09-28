import React from "react";
import './style.css'
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot,FaGithub } from "react-icons/fa6";
const Sidebar=()=>{
    return(
      <div className="footer">
          <h1>Contact Me</h1>
        <div className="sidebar">
        
             <div className="icons">
                <div className="icon1">
             <FaPhoneAlt className="icon"/>
             </div>
             <div>
                <p>Phone</p>
                <p>0718492299 </p>  
             </div>
             </div>
             <div className="icons">
             <div className="icon1">
             <MdOutlineEmail className="icon"/>
             </div>
             <div>
                <p>Email</p>
                <p>anyangojolieng@gmail.com</p>  
             </div>
             </div>
             <div className="icons">
             <div className="icon1">
             <FaLocationDot className="icon"/>
             </div>
             <div>
                <p>Location</p>
                <p>Nairobi</p>  
             </div>
             </div>
             <FaLinkedin className="m-icon"/>
             <FaGithub className="m-icon"/>
             
        </div>
        </div>
    )
    

}
export default Sidebar