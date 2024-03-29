import { useEffect, useRef, useState } from "react";
// import { AiOutlineCopy } from "react-icons/ai";
import { uploadFile } from "../services/api";
// import React from "react";
import Loader from "./Loading";
import { MdOutlineContentCopy } from "react-icons/md";

const max_size = 60 * 1024 * 1024;
const Right = () => {
    const fileInputRef = useRef(null);
    const [file, setFile] = useState(null);
    const [resultPath, setResultPath] = useState("");
    const [errorShip, setErrorShip] = useState("");
    const [loading, setLoading] = useState(true);

    //file size limit
    const [file_size_limit, setFile_size_limit] = useState(true);

    //download || copy button
    // const [isHovering, setIsHovering] = useState(true);

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("file", file);
                data.append("file_name", file.name);
                if (file.size < max_size) {
                    try {
                        setFile_size_limit(true);
                        let res = await uploadFile(data);
                        setResultPath(res.path);
                    } catch (error) {
                        setErrorShip(error.message);
                        console.log(error);
                    } finally {
                        setLoading(false);
                    }
                } else {
                    setFile_size_limit(false);
                }
            }
        };
        getImage();
    }, [file]);

    const handleButtonClick = () => {
        setResultPath("");
        setFile(null);
        fileInputRef.current.click();
    };

    const handleChange = (e) => {
        const file = e.target.files[0];
        // console.log(file);
        setFile(file);
    };

    const handleCopyButton = () => {
        navigator.clipboard.writeText(resultPath);
    };

    return (
        // <div className=" bg-white m-auto h-[350px] w-[600px] rounded flex justify-center items-center">
        <section className=" bg-white  md:m-auto h-[50%] md:h-[23rem] w-[100vw] rounded-none md:rounded-lg flex flex-col items-center md:w-[600px] font-serif">
            <h1 className="text-4xl font-semibold mt-6 mb-4 text-indigo-700 select-none text-center">
                Share Files!
            </h1>
            <p className="text-xl text-gray-600 select-none">
                Upload and Share the Link{" "}
            </p>
            <p className="text-sm text-red-400 select-none">
                (Max file size: 60MB | Link expire after 7 Days)
            </p>
            <p className="text-sm text-gray-400"></p>
            <button
                className=" select-none bg-blue-500 hover:bg-blue-700 text-white w-3/12 font-bold py-2 px-4 rounded  my-4"
                onClick={handleButtonClick}
            >
                Upload
            </button>
            <input
                type="file"
                name=""
                id=""
                ref={fileInputRef}
                hidden
                onChange={handleChange}
            />

            {!file_size_limit && (
                <p className="text-red-500 text-2xl mt-5">
                    File size should be less than 60MB
                </p>
            )}

            {file_size_limit && file && (
                <>
                    <div className="flex flex-col mb-3 select-none text-center">
                        <p className="text-gray-500">
                            File:{" "}
                            <span className=" text-teal-500">{file.name}</span>
                        </p>
                        {/* <p className="text-gray-500">
                            File Type:{" "}
                            <span className=" text-teal-500">
                                {file.type.split("/")[1]}
                            </span>
                        </p> */}
                        <p className="text-gray-500">
                            File Size:{" "}
                            <span className=" text-teal-500">
                                {(file.size / 1024).toFixed(2)} KB
                            </span>
                        </p>
                    </div>

                    {errorShip && (
                        <div className="text-red-500 text-lg text-center">
                            Error Occurred: CORS
                            <p className="text-red-500 text-base">
                                {errorShip}
                            </p>
                        </div>
                    )}

                    {loading && (
                        <div className="text-center mx-auto">
                            <Loader loading={loading} />
                            {/* <div className="text-white bg-red-500">Hello</div> */}
                        </div>
                    )}
                    {!loading && resultPath && (
                        <>
                            {/* <div className="select-none text-gray-500 mb-2 w-full text-center"> */}
                            <div className="">
                                <div className="px-32 font-semibold mx-auto select-none flex flex-row mb-1 md:mb-2 ">
                                    <span className="w-36 lg:w-auto">
                                        Download Link:{" "}
                                    </span>
                                    <span
                                        className=" text-orange-600 font-semibold md:ms-2 cursor-pointer "
                                        onClick={handleCopyButton}
                                    >
                                        <MdOutlineContentCopy className="mt-1 border-l" />
                                    </span>
                                </div>
                            </div>
                            <a
                                className=" text-blue-500 font-semibold text-center break-all mx-3"
                                href={resultPath}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {resultPath}
                            </a>
                        </>
                    )}
                </>
            )}
        </section>
    );
};

export default Right;
