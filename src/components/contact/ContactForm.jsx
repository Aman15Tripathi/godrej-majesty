import { useState } from "react";

const ContactForm = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: "",
    });

    const [status, setStatus] = useState({
        loading: false,
        success: "",
        error: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus({
            loading: true,
            success: "",
            error: "",
        });

        try {
            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        access_key:
                            import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
                        subject:
                            "New Site Visit Enquiry - Godrej Majesty",
                        from_name: formData.name,
                        name: formData.name,
                        phone: formData.phone,
                        message:
                            formData.message ||
                            "No message provided",
                    }),
                }
            );

            const result = await response.json();

            if (result.success) {
                setStatus({
                    loading: false,
                    success:
                        "Thank you! Your enquiry has been submitted successfully.",
                    error: "",
                });

                setFormData({
                    name: "",
                    phone: "",
                    message: "",
                });
            } else {
                throw new Error(
                    result.message || "Something went wrong."
                );
            }
        } catch (error) {
            setStatus({
                loading: false,
                success: "",
                error:
                    "Unable to submit your enquiry. Please try again.",
            });
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="modal fade show d-block"
            tabIndex="-1"
            role="dialog"
            style={{
                backgroundColor: "rgba(0, 0, 0, 0.65)",
                zIndex: 1055,
            }}
            onClick={onClose}
        >
            <div
                className="modal-dialog modal-dialog-centered modal-lg px-3"
                role="document"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-content border-0 shadow-lg">

                    {/* Header */}
                    <div className="modal-header">
                        <div>
                            <h5 className="modal-title fw-bold mb-1">
                                Book Your Site Visit
                            </h5>

                            <small className="text-secondary">
                                Get in touch with us
                            </small>
                        </div>

                        <button
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                            onClick={onClose}
                        ></button>
                    </div>

                    {/* Body */}
                    <div className="modal-body p-4">

                        <form onSubmit={handleSubmit}>
                            <div className="row g-3">

                                {/* Full Name */}
                                <div className="col-md-6">
                                    <label className="form-label">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="form-control"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>

                                {/* Phone */}
                                <div className="col-md-6">
                                    <label className="form-label">
                                        Phone Number
                                    </label>

                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="form-control"
                                        placeholder="Enter phone number"
                                        pattern="[6-9][0-9]{9}"
                                        maxLength="10"
                                        required
                                    />
                                </div>

                                {/* Message */}
                                <div className="col-12">
                                    <label className="form-label">
                                        Message{" "}
                                        <span className="text-secondary">
                                            (Optional)
                                        </span>
                                    </label>

                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="form-control"
                                        placeholder="Tell us how we can help you..."
                                    ></textarea>
                                </div>

                                {/* Success */}
                                {status.success && (
                                    <div className="col-12">
                                        <div className="alert alert-success mb-0">
                                            {status.success}
                                        </div>
                                    </div>
                                )}

                                {/* Error */}
                                {status.error && (
                                    <div className="col-12">
                                        <div className="alert alert-danger mb-0">
                                            {status.error}
                                        </div>
                                    </div>
                                )}

                                {/* Submit */}
                                <div className="col-12">
                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100 py-3"
                                        disabled={status.loading}
                                    >
                                        {status.loading
                                            ? "Submitting..."
                                            : "Book Site Visit"}
                                    </button>
                                </div>

                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;