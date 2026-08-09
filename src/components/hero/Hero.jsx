import HeroCard from "./HeroCard";
import HeroSlider from "./HeroSlider";
import "../../styles/Hero.css"

const Hero = () => {
    return (
        <section className="hero-section">

            <HeroSlider />

            <div className="container hero-card-wrapper">
                <div className="row justify-content-end">
                    <div className="col-lg-4 col-md-5">
                        <HeroCard />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Hero;