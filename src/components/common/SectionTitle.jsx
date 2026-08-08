const SectionTitle = ({ title, subtitle }) => {
    return (
        <div className="text-center mb-5">

            {subtitle && (
                <p className="text-primary fw-semibold text-uppercase mb-2">
                    {subtitle}
                </p>
            )}

            <h2 className="display-5 fw-bold">
                {title}
            </h2>

        </div>
    );
};

export default SectionTitle;