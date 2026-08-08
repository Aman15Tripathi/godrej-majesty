import benefitsData from "../../assets/data/benefitsData";

const BenefitsTicker = () => {
    const tickerItems = [...benefitsData, ...benefitsData];

    return (
        <section className="ticker-section">

            <div className="ticker-track">

                {tickerItems.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={index}
                            className="ticker-item"
                        >
                            <Icon />

                            <span>{item.text}</span>
                        </div>
                    );
                })}

            </div>

        </section>
    );
};

export default BenefitsTicker;