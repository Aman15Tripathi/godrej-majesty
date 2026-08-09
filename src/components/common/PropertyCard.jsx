const PropertyCard = ({ property, onClick }) => {
    return (
        <div className="card border-0 shadow property-card h-100"
            onClick={onClick}
            style={{ cursor: "pointer" }}
        >

            <img
                src={property.image}
                alt={property.title}
                className="card-img-top property-image"
            />

            <div className="card-body">

                <h4 className="fw-bold">
                    {property.title}
                </h4>

                <p className="text-secondary mb-2">
                    Super Area : {property.area}
                </p>

                <h3 className="text-primary fw-bold">
                    {property.price}
                </h3>

                <div className="badge bg-success mt-2">
                    {property.booking}
                </div>

                <button className="btn btn-primary w-100 mt-4">
                    View Details
                </button>

            </div>

        </div>
    );
};

export default PropertyCard;