import amenitiesData from "../../assets/data/amenitiesData";
import SectionTitle from "../common/SectionTitle";
import AmenityCard from "../common/AmenityCard";

const Amenities = () => {
    return (
        <section
            id="amenities"
            className="py-5"
        >
            <div className="container">

                <SectionTitle
                    subtitle="Lifestyle"
                    title="World Class Amenities"
                />

                <div className="row g-4">

                    {amenitiesData.map((amenity) => (

                        <div
                            key={amenity.id}
                            className="col-lg-3 col-md-6"
                        >
                            <AmenityCard amenity={amenity} />
                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
};

export default Amenities;