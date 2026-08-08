import unitData from "../../assets/data/unitData";
import SectionTitle from "../common/SectionTitle";
import PropertyCard from "../common/PropertyCard";

const UnitTypes = () => {
    return (
        <section
            id="units"
            className="py-5"
        >
            <div className="container">

                <SectionTitle
                    subtitle="Configurations"
                    title="Unit Configurations"
                />

                <div className="row g-4">

                    {unitData.map((property) => (

                        <div
                            className="col-lg-4 col-md-6"
                            key={property.id}
                        >
                            <PropertyCard property={property} />
                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
};

export default UnitTypes;