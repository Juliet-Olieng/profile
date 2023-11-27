import React from "react";
import './style.css'
const Project=()=>{
    return(
        <div className="proj">
            <h1>Projects</h1>
            <div>
            <h1>Website development </h1>
            {/*  */}
            <div className="sample">
            <div className="sample1">
                <video src={process.env.PUBLIC_URL+"image/Travel.webm"} autoPlay="true" />
                <p>Vehicle hiring website</p>
            </div>
            <div className="sample1">
                <video src={process.env.PUBLIC_URL+"image/food.webm"} autoPlay="true" />
                <p>Yummy website</p>            </div>

            <div className="sample1">
                <p>Yummy website</p>
                <video src={process.env.PUBLIC_URL+"image/next.webm"} autoPlay="true" />
            </div>
            </div>
            {/*  */}
            </div>
        </div>
    )

}
export default Project