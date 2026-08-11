import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
} from "react-icons/fa6";

const footerData = {
    company: {
        name: "Godrej Majesty",
        description:
            "Experience premium living with thoughtfully designed residences, world-class amenities, and excellent connectivity in Noida Extension.",
    },

    quickLinks: [
        { name: "Home", href: "#" },
        { name: "Overview", href: "#overview" },
        { name: "Units", href: "#units" },
        { name: "Floor Plans", href: "#plans" },
        { name: "Amenities", href: "#amenities" },
        { name: "About", href: "#about" },
    ],

    contact: {
        phone: "+91 9654555552",
        email: "Puneet.tcr@gmail.com",
        address: "Sector-12, Noida Extension",
    },

    social: [
        {
            id: 1,
            icon: FaFacebookF,
            link: "#",
        },
        {
            id: 2,
            icon: FaInstagram,
            link: "#",
        },
        {
            id: 3,
            icon: FaLinkedinIn,
            link: "#",
        },
        {
            id: 4,
            icon: FaYoutube,
            link: "#",
        },
    ],
};

export default footerData;