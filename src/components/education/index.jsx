import { LiaSchoolSolid } from "react-icons/lia";
import './style.css'

const Education=()=>{
    return(
        <div className="container-skills">
            <div className="h1">
            <LiaSchoolSolid className="new-icon"/>
            <h1>Education</h1>
            </div>
            
            <div>
                <h3>Akirachix Institute of Technology</h3>
                <p>Jan 2023-Dec 2023</p>
                <p>Diploma in Information Technology</p>
            </div> 
            <hr />
            <div className="h1">
            <LiaSchoolSolid className="new-icon"/>
            <h1>Skills</h1>
            </div>
            <div>
                <h3>Frameworks</h3>
                <div className="skills">
                    <div className="skill">
                    <img src={process.env.PUBLIC_URL+"image/laravel.png"} alt="" />
                        <p>Laravel</p>
                    </div>
                    <div className="skill">
                    <img src={process.env.PUBLIC_URL+"image/node.png"} alt="" />
                        <p>NodeJs</p>
                    </div>
                    <div className="skill">
                    <img src={process.env.PUBLIC_URL+"image/react.png"} alt="" />
                        <p>React</p>
                    </div>
                    <div className="skill">
                    <img src={process.env.PUBLIC_URL+"image/nextjs.png"} alt="" />
                        <p>NextJs</p>
                    </div>
                </div>
                </div>
                         <div>
                <h3>Programing languages</h3>
                <div className="skills">
                    <div className="skill">
                    <img src={process.env.PUBLIC_URL+"image/js.png"} alt="" className="img"/>
                        <p>JavaScript</p>
                    </div>
                    <div className="skill">
                    <img src={process.env.PUBLIC_URL+"image/html.png"} alt="" className="img"/>
                        <p>HTML</p>
                    </div>
                    <div className="skill">
                    <img src={process.env.PUBLIC_URL+"image/python.png"} alt="" />
                        <p>PYTHON</p>
                    </div>

                </div>
                </div>

                <div>
                <h3>Database and others</h3>
                <div className="skills">
                    <div className="skill2">
                    <img src={process.env.PUBLIC_URL+"image/mysql.png"} alt="" />
                        <p>JavaScript</p>
                    </div>
                    <div className="skill2">
                    <img src={process.env.PUBLIC_URL+"image/git.png"} alt=""/>
                        <p>HTML</p>
                    </div>

                </div>
                </div>
        </div>
    )
}
export default Education