import { useState } from "react";
import ContactForm from "../contact/ContactForm";

const FloorPlanCard = ({ plan }) => {
    const [showContactForm, setShowContactForm] = useState(false);

    return (
        <div className="card h-100 border-0 shadow-sm">

            <img
                src={plan.image}
                alt={plan.title}
                className="card-img-top floor-plan-image"
            />

            <div className="card-body text-center">

                <h4 className="fw-bold">
                    {plan.title}
                </h4>

                <p className="text-secondary">
                    {plan.area}
                </p>

                <button
                    className="btn btn-outline-primary w-100"
                    onClick={() => setShowContactForm(true)}
                >
                    View Floor Plan
                </button>

            </div>

            {/* Contact Form Popup */}
            <ContactForm
                isOpen={showContactForm}
                onClose={() => setShowContactForm(false)}
            />

        </div>
    );
};

export default FloorPlanCard;