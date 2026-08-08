import footerData from "../../assets/data/footerData";

const Footer = () => {
    return (
        <footer className="footer-section">

            <div className="container">

                <div className="row gy-5">

                    {/* Company */}

                    <div className="col-lg-4">

                        <h3 className="fw-bold text-white">
                            {footerData.company.name}
                        </h3>

                        <p className="text-light mt-3">
                            {footerData.company.description}
                        </p>

                    </div>

                    {/* Quick Links */}

                    <div className="col-lg-3">

                        <h5 className="text-white mb-4">
                            Quick Links
                        </h5>

                        <ul className="list-unstyled">

                            {footerData.quickLinks.map((link, index) => (

                                <li
                                    key={index}
                                    className="mb-2"
                                >

                                    <a
                                        href={link.href}
                                        className="footer-link"
                                    >
                                        {link.name}
                                    </a>

                                </li>

                            ))}

                        </ul>

                    </div>

                    {/* Contact */}

                    <div className="col-lg-3">

                        <h5 className="text-white mb-4">
                            Contact
                        </h5>

                        <p className="text-light mb-2">
                            {footerData.contact.phone}
                        </p>

                        <p className="text-light mb-2">
                            {footerData.contact.email}
                        </p>

                        <p className="text-light">
                            {footerData.contact.address}
                        </p>

                    </div>

                    {/* Social */}

                    <div className="col-lg-2">

                        <h5 className="text-white mb-4">
                            Follow Us
                        </h5>

                        <div className="d-flex gap-3">

                            {footerData.social.map((item) => {

                                const Icon = item.icon;

                                return (

                                    <a
                                        key={item.id}
                                        href={item.link}
                                        className="social-icon"
                                    >

                                        <Icon />

                                    </a>

                                );

                            })}

                        </div>

                    </div>

                </div>

                <hr className="border-secondary my-5" />

                <div className="text-center text-light">

                    © {new Date().getFullYear()} Godrej Majesty. All Rights Reserved.

                </div>

            </div>

        </footer>
    );
};

export default Footer;