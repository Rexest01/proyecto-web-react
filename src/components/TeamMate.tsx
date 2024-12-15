import { ITeam } from "../types/Team";

export function TeamMate({image, name, area, slogan}: ITeam){
    return(
        <div className="team-item"><img src={image}  /><h3>{name}</h3><p>{area}</p><p>{slogan}</p></div>
    )
}