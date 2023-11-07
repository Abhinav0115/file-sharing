import React from "react";

const Left = () => {
    const Logos = {
        0: "https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg",
        1: "https://4kwallpapers.com/images/wallpapers/mountains-path-hill-spring-aesthetic-landscape-scenery-1024x768-421.jpg",
        2: "https://pbs.twimg.com/media/ExBjZlOXMAEDYNE.jpg",
        3: "https://live.staticflickr.com/2842/33541083841_8ec8e05171_b.jpg",
        4: "https://wallpapers.com/images/hd/depressing-1980-x-1080-background-jppx90g3w0uwe1fs.jpg",
        5: "https://wallpapers.com/images/hd/savannah-background-a6a2foy8cu3iyuz7.jpg",
        6: "https://wallpapers.com/images/hd/road-background-d7hq3n0gop5xtvcl.jpg",
        7: "https://wallpapers.com/images/hd/road-background-r2y90ys6nzq1wu0w.jpg",
        8: "https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg",
    };

    const LOGO = Logos[Math.floor(Math.random() * 9)];
    return (
        <img
            className=" w-[100%] md:w-[30%] h-[50%] md:h-[100%] object-cover"
            src={LOGO}
            alt="banner"
        />
    );
};

export default Left;
