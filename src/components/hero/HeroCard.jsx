// import { useState } from "react";
// import ContactForm from "../contact/ContactForm";

// import "../../styles/HeroCard.css"

// const HeroCard = () => {
//     const [showContactForm, setShowContactForm] = useState(false);

//     return (
//         <>
//             <div className="card shadow-lg border-0 hero-card">

//                 <div className="bg-primary text-white text-center fw-bold py-2">
//                     BOOKING OPEN
//                 </div>

//                 <div className="card-body">

//                     <h2 className="fw-bold text-center">
//                         GODREJ MAJESTY
//                     </h2>

//                     <p className="text-center fw-semibold">
//                         Sector-12 Noida Extension
//                     </p>

//                     <table className="table table-sm">
//                         <tbody>

//                             <tr>
//                                 <th>Land Parcel</th>
//                                 <td>8 Acres</td>
//                             </tr>

//                             <tr>
//                                 <th>Floors</th>
//                                 <td>G+34</td>
//                             </tr>

//                             <tr>
//                                 <th>Towers</th>
//                                 <td>7</td>
//                             </tr>

//                         </tbody>
//                     </table>

//                     <div className="alert alert-primary text-center fw-semibold mb-2">
//                         Book Now with 10%
//                     </div>

//                     <div className="alert alert-primary text-center fw-semibold mb-2">
//                         ₹22,000 / Month For 2 Years
//                     </div>

//                     <div className="alert alert-primary text-center fw-semibold">
//                         Flexible 30 : 70 Plan
//                     </div>

//                     <h6 className="text-center mt-4">
//                         Luxury 3 & 4 BHK
//                     </h6>

//                     <h3 className="text-primary text-center fw-bold">
//                         ₹2.9 Cr*
//                     </h3>

//                     {/* Book Site Visit */}
//                     <button
//                         className="btn btn-primary w-100 mt-3"
//                         onClick={() => setShowContactForm(true)}
//                     >
//                         Book Site Visit
//                     </button>

//                     <p className="small text-center mt-3 mb-0">
//                         RERA : UPRERAPRJ250823/04/2025
//                     </p>

//                 </div>
//             </div>

//             {/* Contact Form Popup */}
//             <ContactForm
//                 isOpen={showContactForm}
//                 onClose={() => setShowContactForm(false)}
//             />
//         </>
//     );
// };

// export default HeroCard;







import { useState } from "react";
import ContactForm from "../contact/ContactForm";

import "../../styles/HeroCard.css";

const HeroCard = () => {
    const [showContactForm, setShowContactForm] = useState(false);

    return (
        <>
            <div className="hero-card">

                {/* Top Gold Line */}
                <div className="hero-card-top-line"></div>

                <div className="hero-card-body">

                    {/* Small Heading */}
                    <div className="hero-card-label">
                        PREMIUM RESIDENCES
                    </div>

                    {/* Project Name */}
                    <h2 className="hero-card-title">
                        GODREJ MAJESTY
                    </h2>

                    {/* Location */}
                    <p className="hero-card-location">
                        Sector-12 Noida Extension
                    </p>

                    {/* Project Details */}
                    <div className="hero-card-details">

                        <div className="hero-detail">
                            <span>Land Parcel</span>
                            <strong>8 Acres</strong>
                        </div>

                        <div className="hero-detail">
                            <span>Floors</span>
                            <strong>G+34</strong>
                        </div>

                        <div className="hero-detail">
                            <span>Towers</span>
                            <strong>7</strong>
                        </div>

                    </div>

                    {/* Payment Plans */}
                    <div className="hero-payment-plans">

                        <div className="hero-payment-box">
                            Book Now with 10%
                        </div>

                        <div className="hero-payment-box">
                            ₹22,000 / Mo (2 Yrs)
                        </div>

                        <div className="hero-payment-box hero-payment-full">
                            Flexible 30 : 70 Plan
                        </div>

                    </div>

                    {/* Property Type */}
                    <div className="hero-property-type">
                        LUXURY 3 & 4 BHK
                    </div>

                    {/* Price */}
                    <div className="hero-price">
                        ₹2.9 Cr*
                    </div>

                    {/* Book Site Visit */}
                    <button
                        type="button"
                        className="hero-book-btn"
                        onClick={() => setShowContactForm(true)}
                    >
                        BOOK SITE VISIT
                    </button>

                    {/* RERA */}
                    <p className="hero-rera">
                        RERA : UPRERAPRJ250823/04/2025
                    </p>

                </div>
            </div>

            {/* Contact Form Popup */}
            <ContactForm
                isOpen={showContactForm}
                onClose={() => setShowContactForm(false)}
            />
        </>
    );
};

export default HeroCard;