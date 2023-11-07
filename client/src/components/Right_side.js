import { useEffect, useRef, useState } from "react";
import { uploadFile } from "../services/api";

const max_size = 10 * 1024 * 1024;
const Right = () => {
    const fileInputRef = useRef(null);
    const [file, setFile] = useState(null);
    const [resultPath, setResultPath] = useState("");
    const [file_size_limit, setFile_size_limit] = useState(true);

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("file", file);
                data.append("file_name", file.name);
                if (file.size < max_size) {
                    setFile_size_limit(true);
                    let res = await uploadFile(data);
                    setResultPath(res.path);
                } else {
                    setFile_size_limit(false);
                }
            }
        };
        getImage();
    }, [file]);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleChange = (e) => {
        const file = e.target.files[0];
        console.log(file);
        setFile(file);
    };

    return (
        // <div className=" bg-white m-auto h-[350px] w-[600px] rounded flex justify-center items-center">
        <section className=" bg-white  md:m-auto h-[50%] md:h-[23rem] w-[100vw] rounded flex flex-col items-center md:w-[600px] ">
            <h1 className="text-4xl font-semibold mt-9 mb-5 text-indigo-700 select-none text-center">
                Simple File Sharing App!
            </h1>
            <p className="text-xl text-gray-600 select-none">
                Upload and Share the Link{" "}
            </p>
            <p className="text-sm text-red-400">(Max file size: 10Mb | Link expire after 7 Days)</p>
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
                    File size should be less than 10Mb
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
                                {(file.size / 1024).toFixed(2)} Kb
                            </span>
                        </p>
                    </div>
                    {resultPath && (
                        <a
                            className="text-blue-500 font-semibold text-center break-all mx-3"
                            href={resultPath}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <p className="text-gray-500">Download Link:</p>
                            {resultPath}
                        </a>
                    )}
                </>
            )}
        </section>
    );
};

export default Right;
