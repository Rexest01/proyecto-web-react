import { useEffect, useState } from "react";
import { Button } from "./Button";
import { Faq } from "./Faq";
import { IFaq } from "../types/Faq";

export function Faqs(){
    
        const [faqs, setFaqs] = useState([]);
            
            useEffect(()=> {
                fetch('http://localhost:3000/faq').then((res)=>res.json()).then((data)=>setFaqs(data));
            }, []);
    
    
    return(
        <section className="faq">
    <div className="container faq-container">
        <div className="left">
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Similique deleniti esse earum omnis dolorem natus.</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nemo, repudiandae!
                </p>
                <Button content='All FAQS' href='/faqs' />
        </div>
        <div className="right">
            <div className="faq-list">
                {faqs.map((item:IFaq)=>(<Faq key={item.id} {...item}/>))}
             </div>
        </div>
    </div>
</section>
    )
}