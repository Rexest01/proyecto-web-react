import { IStrategy } from "../types/Strategy";

export function StrategyCard({id, title, description}: IStrategy){
    return(
        <div className="st-card"><div className="order">0{id}</div><div className="text"><h3>{title}</h3><p>{description}</p></div></div>
    )
}
