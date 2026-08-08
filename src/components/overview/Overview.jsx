import overviewData from "../../assets/data/overviewData";
import SectionTitle from "../common/SectionTitle";

const Overview = () => {
    return (
        <section
            id="overview"
            className="py-5 bg-light"
        >
            <div className="container">

                <SectionTitle
                    subtitle="Project Details"
                    title="Project Overview"
                />

                <div className="row g-4">

                    {overviewData.map((item) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={item.id}
                                className="col-lg-3 col-md-6"
                            >

                                <div className="card h-100 border-0 shadow-sm overview-card">

                                    <div className="card-body text-center p-4">

                                        <Icon
                                            size={42}
                                            className="text-primary mb-3"
                                        />

                                        <h3 className="fw-bold">
                                            {item.value}
                                        </h3>

                                        <p className="text-secondary mb-0">
                                            {item.label}
                                        </p>

                                    </div>

                                </div>

                            </div>

                        );
                    })}

                </div>

            </div>
        </section>
    );
};

export default Overview;