import "../../styles/AmenityCard.css"

const AmenityCard = ({ amenity }) => {
    const Icon = amenity.icon;

    return (
        <div className="card border-0 shadow-sm h-100 amenity-card">

            <div className="card-body text-center p-4">

                <div className="amenity-icon mx-auto mb-4">
                    <Icon size={34} />
                </div>

                <h4 className="fw-bold mb-3">
                    {amenity.title}
                </h4>

                <p className="text-secondary mb-0">
                    {amenity.description}
                </p>

            </div>

        </div>
    );
};

export default AmenityCard;