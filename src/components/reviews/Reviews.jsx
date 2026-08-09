import reviewsData from "../../assets/data/reviewsData";
import SectionTitle from "../common/SectionTitle";
import ReviewCard from "../common/ReviewCard";
import "../../styles/Reviews.css"

const Reviews = () => {
    return (
        <section
            id="reviews"
            className="reviews-section py-5"
        >
            <div className="container">

                <SectionTitle
                    subtitle="Testimonials"
                    title="What Our Customers Say"
                />

                <div className="row g-4">

                    {reviewsData.map((review) => (

                        <div
                            key={review.id}
                            className="col-lg-4 col-md-6"
                        >

                            <ReviewCard review={review} />

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
};

export default Reviews;