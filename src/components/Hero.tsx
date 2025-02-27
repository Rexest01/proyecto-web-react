import { Button } from './Button'
import heroImage from '/proyecto-web-react/src/assets/images/hero.svg'

export function Hero(){
    return(
        <section className="hero">
    <div className="container container-hero">
        <div className="left">
            <h1>A digital agency specializing on <span>mobile design</span></h1>
            <p>
                We are an award winning design agency that strongly 
                believes in the power of creative ideas
            </p>
            <Button content='Get Started' href='/get-started' /> 
        </div>
        <div className="right">
            <img src= {heroImage} alt="Hero image" />
        </div>
    </div>
</section>
    )
}