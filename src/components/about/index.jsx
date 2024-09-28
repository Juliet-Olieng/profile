import React from "react";
import './index.css'
// import Sidebar from "../footer";
import Navbar from "../navbar";
import { SiJirasoftware } from "react-icons/si";
import { SiAdobeindesign } from "react-icons/si";
import { MdManageHistory } from "react-icons/md";

const About=()=>{
    return(
            <div className="about">
                {/* <Navbar/> */}
                <div id="container2">
                <h1 id="h1">ABOUT ME</h1>
                <div className="about1">
                  <div className="about">
              <img src={process.env.PUBLIC_URL+"image/Juliet.png"} alt="" />
             </div>
             <div className="paragraph">
             <p className="p">I am <span className="name">Juliet Olieng</span> </p>
             <p>A <span className="name">Software Developer </span>proficient in various frameworks, databases, and agile methodologies.<br/>Dedicated to delivering high-quality software solutions that not only meet business objectives<br/>but also surpass user expectations.Proven expertise in cross-functional collaboration,<br/>and a passion for sharing knowledge to help people solve their development problems.</p>
             </div>
                </div>
                 
            </div>
            <div>
                <h1 id="h1">What I can do</h1>
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
            <hr />
        </div>
    )
}
export default About