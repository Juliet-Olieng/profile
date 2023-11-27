import React from "react";
import './index.css'
import Sidebar from "../sidebar";
import Navbar from "../navbar";
import { SiJirasoftware } from "react-icons/si";
import { SiAdobeindesign } from "react-icons/si";
import { MdManageHistory } from "react-icons/md";

const About=()=>{
    return(
            <div className="container2">
                <Navbar/>
                <div id="container2">
                <h1 id="h1">ABOUT ME</h1>
                <p>A Full Stack Developer proficient in various frameworks, databases, and agile methodologies.<br/>Dedicated to delivering high-quality software solutions that not only meet business objectives but also surpass user expectations.<br/>Proven expertise in cross-functional collaboration, and a passion for sharing knowledge to help people solve their development problems.</p> 
            </div>
            <div>
                <h1>What I can do</h1>
                <div className="me">
                    <div className="do">
                        <div>
                        <SiAdobeindesign className="icon2"/>
                        </div>
                        <div>
                        <h3>DESIGN</h3>
                      <p>Designing profesional and high <br/>quality websites and mobile.</p>
                      </div>
                    </div>
                    <div className="do">
                        <div>
                        <SiJirasoftware className="icon2"/>
                        </div>
                        <div>
                        <h3>SOFTWARE  DEVELOPMENT</h3>
                      <p>Expert-level proficiency in the high-quality<br/>development of contemporary software,<br/>encompassing both frontend and backend components.</p>
                      </div>
                    </div>`         `
                </div>
                {/*  */}
                <div className="me">
                    <div className="do">
                        <div>
                        <MdManageHistory  className="icon2"/>
                        </div>
                        <div>
                        <h3>PRODUCT MANAGEMENT</h3>
                      <p>ensure that the product aligns with<br/>the company's strategy<br/>and satisfies customer requirements.</p>
                      </div>
                    </div>
                    <div className="do">
                        <div>
                        <SiJirasoftware className="icon2"/>
                        </div>
                        <div>
                        <h3>SOFTWARE  DEVELOPMENT</h3>
                      <p>Expert-level proficiency in the high-quality<br/>development of contemporary software,<br/>encompassing both frontend and backend components.</p>
                      </div>
                    </div>`         `
                </div>
            </div>
        </div>
    )
}
export default About