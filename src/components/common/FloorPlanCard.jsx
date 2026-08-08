const FloorPlanCard = ({ plan }) => {
    return (
        <div className="card border-0 shadow floor-plan-card h-100">

            <img
                src={plan.image}
                alt={plan.title}
                className="card-img-top floor-plan-image"
            />

            <div className="card-body text-center">

                <h4 className="fw-bold">
                    {plan.title}
                </h4>

                <p className="text-secondary">
                    {plan.area}
                </p>

                <button
                    className="btn btn-outline-primary w-100"
                    data-bs-toggle="modal"
                    data-bs-target={`#planModal${plan.id}`}
                >
                    View Floor Plan
                </button>

            </div>

            {/* Modal */}

            <div
                className="modal fade"
                id={`planModal${plan.id}`}
                tabIndex="-1"
            >
                <div className="modal-dialog modal-xl modal-dialog-centered">

                    <div className="modal-content">

                        <div className="modal-header">

                            <h5 className="modal-title">
                                {plan.title}
                            </h5>

                            <button
                                className="btn-close"
                                data-bs-dismiss="modal"
                            ></button>

                        </div>

                        <div className="modal-body p-0">

                            <img
                                src={plan.image}
                                alt={plan.title}
                                className="img-fluid w-100"
                            />

                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default FloorPlanCard;