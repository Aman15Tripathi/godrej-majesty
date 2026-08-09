import HeroCard from "./HeroCard";
import HeroSlider from "./HeroSlider";

const Hero = () => {
    return (
        <section className="hero-section position-relative">

            <HeroSlider />

            <div className="container position-absolute top-50 start-50 translate-middle">
                <div className="row justify-content-end">

                    <div className="col-lg-4">
                        <HeroCard />
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Hero;