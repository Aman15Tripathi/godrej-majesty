import { useState } from "react";
import unitData from "../../assets/data/unitData";
import SectionTitle from "../common/SectionTitle";
import PropertyCard from "../common/PropertyCard";
import ContactForm from "../contact/ContactForm";

import "../../styles/UnitTypes.css"

const UnitTypes = () => {
    const [showContactForm, setShowContactForm] = useState(false);

    return (
        <section>
            <div className="container">

                <SectionTitle
                    subtitle="Configurations"
                    title="Unit Configurations"
                />

                <div className="row g-4">

                    {unitData.map((property) => (
                        <div
                            className="col-lg-4 col-md-6"
                            key={property.id}
                        >
                            <PropertyCard
                                property={property}
                                onClick={() =>
                                    setShowContactForm(true)
                                }
                            />
                        </div>
                    ))}

                </div>

            </div>

            {/* Contact Form Popup */}
            <ContactForm
                isOpen={showContactForm}
                onClose={() => setShowContactForm(false)}
            />

        </section>
    );
};

export default UnitTypes;