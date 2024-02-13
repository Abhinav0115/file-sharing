import React from "react";
import share from "../Image/share2.jpg";

const Left = () => {
    return (
        <img
            className=" w-[100%] md:w-[30%] h-[50%] md:h-[100%] object-fill"
            src={share}
            alt="banner"
        />
    );
};

export default Left;
