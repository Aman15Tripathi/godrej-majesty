import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import BenefitsTicker from "../components/ticker/BenefitsTicker";
import Overview from "../components/overview/Overview";
import UnitTypes from "../components/units/UnitTypes";
import FloorPlans from "../components/plans/FloorPlans";
import Parallax from "../components/parallax/Parallax";
import Amenities from "../components/amenities/Amenities";
import About from "../components/about/About";
import Reviews from "../components/reviews/Reviews";
import ContactForm from "../components/contact/ContactForm";
import Footer from "../components/layout/Footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <BenefitsTicker />
            <Overview />
            <UnitTypes />
            <FloorPlans />
            <Parallax />
            <Amenities />
            <About />
            <Reviews />
            <ContactForm />
            <Footer/>
        </>
    );
};

export default Home;