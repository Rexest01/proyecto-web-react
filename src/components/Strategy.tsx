import { useEffect, useState } from "react";
import { Button } from "./Button";
import { StrategyCard } from "./StrategyCard";
import { IStrategy } from "../types/Strategy";

export function Strategy(){

    const [strategyCards, setStrategy] = useState([]);
    
        useEffect(()=> {
            fetch('http://localhost:3000/strategy').then((res)=>res.json()).then((data)=>setStrategy(data));
        }, []);

    return(
        <section className="strategy">
    <div className="container strategy-container">
        <div className="left">
            <h2>Here are 3 Working steps to organize our projects.</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Provident sunt quod eveniet, incidunt laudantium quia?
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Provident sunt quod eveniet, incidunt laudantium quia?
        </p>
        <Button content="Learn More" href="/strategy" />
        </div>
        <div className="right">
            <div className="cards-container"> 
                {strategyCards.map(((card: IStrategy) =>(<StrategyCard key={card.id} {...card} />)))}
            </div>
        </div>
    </div>
</section>
    );
}