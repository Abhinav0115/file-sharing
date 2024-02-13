import React from "react";
import HashLoader from "react-spinners/HashLoader";

function Loader({ loading }) {
    let color = "#36d7b7";

    return (
        <div className="sweet-loading">
            <HashLoader
                color={color}
                loading={loading}
                size={25}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default Loader;
