import { FaCircleCheck } from "react-icons/fa6";
import SectionTitle from "../common/SectionTitle";
import aboutData from "../../assets/data/aboutData";

const About = () => {
    return (
        <section id="about" className="py-5 bg-light">

            <div className="container">

                <SectionTitle
                    subtitle="About Project"
                    title={aboutData.title}
                />

                <div className="row align-items-center g-5">

                    <div className="col-lg-6">

                        <img
                            src={aboutData.image}
                            alt={aboutData.title}
                            className="img-fluid rounded-4 shadow about-image"
                        />

                    </div>

                    <div className="col-lg-6">

                        <p className="lead text-secondary mb-4">
                            {aboutData.description}
                        </p>

                        <div className="row">

                            {aboutData.highlights.map((item, index) => (

                                <div
                                    className="col-md-6 mb-3"
                                    key={index}
                                >

                                    <div className="d-flex align-items-start gap-3">

                                        <FaCircleCheck
                                            className="text-primary mt-1"
                                            size={18}
                                        />

                                        <span>{item}</span>

                                    </div>

                                </div>

                            ))}

                        </div>

                        <button className="btn btn-primary btn-lg mt-4">
                            Download Brochure
                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default About;