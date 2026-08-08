import HeroCard from "./HeroCard";
import HeroSlider from "./HeroSlider";

const Hero = () => {
    return (
        <section className="hero-section">

            <HeroSlider />

            <div className="container position-relative">

                <div className="row align-items-center min-vh-100">

                    <div className="col-lg-4">

                        <HeroCard />

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Hero;