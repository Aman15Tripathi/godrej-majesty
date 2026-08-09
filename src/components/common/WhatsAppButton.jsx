import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
    const phoneNumber = "9625802828";

    const message = encodeURIComponent(
        "Hello, I am interested in Godrej Majesty. I would like to know more about the property."
    );

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Chat with us on WhatsApp"
        >
            <FaWhatsapp size={30} />
        </a>
    );
};

export default WhatsAppButton;