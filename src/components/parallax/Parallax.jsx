import { useState } from "react";
import ContactForm from "../contact/ContactForm";
import "../../styles/Parallax.css"

const Parallax = () => {
    const [showContactForm, setShowContactForm] = useState(false);

    return (
        <section className="parallax-section">
            
            <div className="parallax-overlay"></div>

            <div className="container position-relative">

                <div className="row justify-content-center">

                    <div className="col-lg-8 text-center text-white">

                        <h2 className="display-3 fw-bold mb-4">
                            Experience Luxury Living
                        </h2>

                        <p className="lead mb-4">
                            Discover thoughtfully designed residences with world-class
                            amenities, elegant architecture, and an unmatched lifestyle.
                        </p>

                        <button
                            className="btn btn-light btn-lg px-5"
                            onClick={() => setShowContactForm(true)}
                        >
                            Schedule Site Visit
                        </button>

                    </div>

                </div>

            </div>

            <ContactForm
                isOpen={showContactForm}
                onClose={() => setShowContactForm(false)}
            />

        </section>
    );
};

export default Parallax;