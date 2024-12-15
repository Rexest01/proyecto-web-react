import { ITestimonial } from "../types/Testimonial";

export function Testimonial({author,image, area, testimonial}:ITestimonial){
    return(
        <div className="testimonials-item"><p>{testimonial}</p><div className="author"><div className="img"><img src={image} /></div><div className="bio"><h3>{author}</h3><p>{area}</p></div></div></div>
    )
}