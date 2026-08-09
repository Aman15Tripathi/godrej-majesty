import floorPlanData from "../../assets/data/floorPlanData";
import SectionTitle from "../common/SectionTitle";
import FloorPlanCard from "../common/FloorPlanCard";

const FloorPlans = () => {
    return (
        <section
            id="plans"
            className="py-5 bg-light"
        >
            <div className="container">

                <SectionTitle
                    subtitle="Layouts"
                    title="Floor Plans"
                />

                <div className="row g-4">

                    {floorPlanData.map((plan) => (

                        <div
                            className="col-lg-4 col-md-6"
                            key={plan.id}
                            onClick={() => {
                                document
                                    .getElementById("contact-form")
                                    ?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            <FloorPlanCard plan={plan} />
                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
};

export default FloorPlans;