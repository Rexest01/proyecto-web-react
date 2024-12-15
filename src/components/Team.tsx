import { useEffect, useState } from "react";
import check from '/proyecto-web-react/src/assets/images/icons/check.svg'
import user from '/proyecto-web-react/src/assets/images/icons/user.svg'
import trophy from '/proyecto-web-react/src/assets/images/icons/trophy.svg'
import { TeamMate } from "./TeamMate";
import { ITeam } from "../types/Team";


export function Team(){

    const [teammates, setTeam] = useState([]);
    
    useEffect(()=> {
        fetch('http://localhost:3000/team').then((res)=>res.json()).then((data)=>setTeam(data));
    }, []);

    return(
        <section className="team">
    <div className="container team-container">
        <div className="team-info">
            <h2>We are proud of our design team.</h2>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Dolores, quasi?
            </p>
        </div>
    <div className="team-statistics">
        <div className="st-item">
            <div className="st-image">
                <img src= {check} alt="" />
            </div>
            <h3>1000</h3>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="st-item">
            <div className="st-image">
                <img src= {user} alt="" />
            </div>
            <h3>1000</h3>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="st-item">
            <div className="st-image">
                <img src= {trophy} alt="" />
            </div>
            <h3>1000</h3>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
    </div>
    <div className="team-list">
       {teammates.map((item: ITeam)=> (<TeamMate key={item.id} {...item} />))}
    </div>
    </div>
</section>
    )
}