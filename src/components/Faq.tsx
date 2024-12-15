import { IFaq } from "../types/Faq";

export function Faq({question, answer}:IFaq){
    return(
        <div className="faq-item"><details><summary>{question}</summary><p>{answer}</p></details></div>
    )
}