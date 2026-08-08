import contactData from "../../assets/data/contactData";
import SectionTitle from "../common/SectionTitle";

const ContactForm = () => {
    return (
        <section
            id="contact"
            className="py-5 bg-light"
        >
            <div className="container">

                <SectionTitle
                    subtitle="Get In Touch"
                    title="Book Your Site Visit"
                />

                <div className="row g-5 align-items-center">

                    {/* Contact Information */}

                    <div className="col-lg-5">

                        {contactData.map((item) => {

                            const Icon = item.icon;

                            return (

                                <div
                                    key={item.id}
                                    className="contact-info-card d-flex align-items-center mb-4"
                                >

                                    <div className="contact-icon">

                                        <Icon size={24} />

                                    </div>

                                    <div>

                                        <h6 className="mb-1 fw-bold">
                                            {item.title}
                                        </h6>

                                        <p className="mb-0 text-secondary">
                                            {item.value}
                                        </p>

                                    </div>

                                </div>

                            );

                        })}

                    </div>

                    {/* Contact Form */}

                    <div className="col-lg-7">

                        <div className="card border-0 shadow contact-form-card">

                            <div className="card-body p-4">

                                <form>

                                    <div className="row g-3">

                                        <div className="col-md-6">

                                            <label className="form-label">
                                                Full Name
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter your name"
                                            />

                                        </div>

                                        <div className="col-md-6">

                                            <label className="form-label">
                                                Phone Number
                                            </label>

                                            <input
                                                type="tel"
                                                className="form-control"
                                                placeholder="Enter phone number"
                                            />

                                        </div>

                                        <div className="col-12">

                                            <label className="form-label">
                                                Email Address
                                            </label>

                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter your email"
                                            />

                                        </div>

                                        <div className="col-12">

                                            <label className="form-label">
                                                Message
                                            </label>

                                            <textarea
                                                rows="5"
                                                className="form-control"
                                                placeholder="Tell us how we can help you..."
                                            ></textarea>

                                        </div>

                                        <div className="col-12">

                                            <button
                                                type="submit"
                                                className="btn btn-primary w-100 py-3"
                                            >
                                                Book Site Visit
                                            </button>

                                        </div>

                                    </div>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default ContactForm;