import { FaQuoteLeft, FaStar } from "react-icons/fa6";

import "../../styles/ReviewCard.css"

const ReviewCard = ({ review }) => {
    return (
        <div className="card border-0 shadow-sm h-100 review-card">

            <div className="card-body p-4">

                <FaQuoteLeft
                    className="text-primary mb-3"
                    size={30}
                />

                <p className="text-secondary">
                    {review.review}
                </p>

                <div className="mb-3">

                    {[...Array(review.rating)].map((_, index) => (
                        <FaStar
                            key={index}
                            className="text-warning me-1"
                        />
                    ))}

                </div>

                <h5 className="fw-bold mb-1">
                    {review.name}
                </h5>

                <small className="text-muted">
                    {review.location}
                </small>

            </div>

        </div>
    );
};

export default ReviewCard;