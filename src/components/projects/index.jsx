import React from "react";
import './style.css'
const Project=()=>{
    return(
        <div className="proj">
            <h1>PROJECTS</h1>
            <div>
            <h2>Website development </h2>
            {/*  */}
            <div className="sample">
            <div className="sample1">
            <p>Vehicle hiring website</p>
                <video src={process.env.PUBLIC_URL+"image/Travel.webm"} autoPlay="true" />
                <p><span>Language: </span>JavaScript</p>
                <p><span>Framework: </span>React</p>

            </div>
            <div className="sample1">
            <p>Yummy Website</p>
                <video src={process.env.PUBLIC_URL+"image/food.webm"} autoPlay="true" />
                <p><span>Language: </span>JavaScript</p>
                <p><span>Framework: </span>React</p>
                </div>

            <div className="sample1">
            <p>Vehicle hiring website</p>
                <video src={process.env.PUBLIC_URL+"image/next.webm"} autoPlay="true" />
                <p><span>Language: </span>JavaScript</p>
                <p><span>Framework: </span>NextJs</p>
            </div>
            </div>
            {/*  */}
            </div>
            <div>
                <h2>Mobile Development</h2>
                <div className="sample">
                <div  className="sample1">
                <p>Gaugeguardian</p>
                <video src={process.env.PUBLIC_URL+"image/food.webm"} autoPlay="true" />
                <p><span>Language: </span>Kotlin</p>       
                </div>
                <div  className="sample1">
                <p>Contact Apk</p>
                <video src={process.env.PUBLIC_URL+"image/food.webm"} autoPlay="true" />
                <p><span>Language: </span>Kotlin</p>       
                </div>
                </div>

            </div>
            <div>
                <h2>Backend development</h2>
                <div className="sample">
                <div  className="sample1">
                <p>GreenKiosk</p>
                <video src={process.env.PUBLIC_URL+"image/food.webm"} autoPlay="true" />
                <p><span>Language: </span>Python</p>
                <p><span>Framework: </span>Django</p>        
                </div>
                <div  className="sample1">
                <p>Gaugegaurdian</p>
                <video src={process.env.PUBLIC_URL+"image/food.webm"} autoPlay="true" />
                <p><span>Language: </span>Python</p>
                <p><span>Framework: </span>Django</p>       
                </div>
                <div  className="sample1">
                <p>Hospital Website</p>
                <video src={process.env.PUBLIC_URL+"image/food.webm"} autoPlay="true" />
                <p><span>Language: </span>Php</p>
                <p><span>Database: </span>MySQL</p>       
                </div>
                </div>

            </div>
            <hr/>

            
        </div>
        
    )

}
export default Project