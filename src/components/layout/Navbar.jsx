import { FaBuilding, FaPhoneAlt } from "react-icons/fa";
import "../../styles/Navbar.css"



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg py-lg-3 py-2 bg-black shadow-sm sticky-top py-2">
            <div className="container">

                {/* Logo */}

                <a
                    className="navbar-brand fw-bold d-flex align-items-center gap-2"
                    href="#"
                >
                    <FaBuilding
                        size={24}
                        className="text-primary"
                    />

                    GODREJ MAJESTY
                </a>

                {/* Mobile Toggle */}

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Links */}

                <div
                    className="collapse navbar-collapse"
                    id="navbarContent"
                >

                    <ul className="navbar-nav mx-auto">

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Home
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#overview">
                                Overview
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#units">
                                Units
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#plans">
                                Plans
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#amenities">
                                Amenities
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#about">
                                About
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#reviews">
                                Reviews
                            </a>
                        </li>

                    </ul>

                    <a
                        href="tel:+919278282828"
                        className="btn btn-primary px-4 d-flex align-items-center gap-2"
                    >
                        <FaPhoneAlt size={16} />
                        +91 9278282828
                    </a>

                </div>

            </div>
        </nav>
    );
};

export default Navbar;