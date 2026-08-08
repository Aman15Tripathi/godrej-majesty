const HeroCard = () => {
    return (
        <div className="card shadow-lg border-0 hero-card">

            <div className="bg-primary text-white text-center fw-bold py-2">
                BOOKING OPEN
            </div>

            <div className="card-body">

                <h2 className="fw-bold text-center">
                    GODREJ MAJESTY
                </h2>

                <p className="text-center fw-semibold">
                    Sector-12 Noida Extension
                </p>

                <table className="table table-sm">

                    <tbody>

                        <tr>
                            <th>Land Parcel</th>
                            <td>8 Acres</td>
                        </tr>

                        <tr>
                            <th>Floors</th>
                            <td>G+34</td>
                        </tr>

                        <tr>
                            <th>Towers</th>
                            <td>7</td>
                        </tr>

                    </tbody>

                </table>

                <div className="alert alert-primary text-center fw-semibold mb-2">
                    Book Now with 10%
                </div>

                <div className="alert alert-primary text-center fw-semibold mb-2">
                    ₹22,000 / Month For 2 Years
                </div>

                <div className="alert alert-primary text-center fw-semibold">
                    Flexible 30 : 40 : 30 Plan
                </div>

                <h6 className="text-center mt-4">
                    Luxury 3 & 4 BHK
                </h6>

                <h3 className="text-primary text-center fw-bold">
                    ₹2.9 Cr*
                </h3>

                <button className="btn btn-primary w-100 mt-3">
                    Book Site Visit
                </button>

                <p className="small text-center mt-3 mb-0">
                    RERA : UPRERAPRJ250823/04/2025
                </p>

            </div>

        </div>
    );
};

export default HeroCard;