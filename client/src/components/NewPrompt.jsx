import React, { useEffect, useRef, useState } from "react";
import Upload from "./Upload";
import { IKImage } from "imagekitio-react";

const NewPrompt = () => {
  const endref = useRef(null);
  const [img, setImg] = useState({
    isLoading: false,
    error: "",
    dbData: {},
  });
  useEffect(() => {
    endref.current.scrollIntoView({ behavior: "smooth" });
  });
  return (
    <>
      {img.isLoading && <div>Loading...</div>}
      {img.dbData?.filePath && (
        <IKImage
          urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
          path={img.dbData?.filePath}
          width="380"
          transformation={[{ width: 380 }]}
        />
      )}
      <div className="pb-[15%]" ref={endref} />
      <form className="w-[50%] absolute bottom-0 bg-[#2c2937] rounded-2xl flex gap-5 px-5 items-center justify-between">
        {/* <label
          htmlFor="file"
          className="w-8 h-8 p-2 rounded-full bg-[#605e68] flex items-center justify-center overflow-hidden"
        >
          <img
            src="/attachment.png"
            alt="attachment"
            className="w-full h-full object-cover cursor-pointer"
          />
        </label> */}
        <Upload setImg={setImg} />
        <input id="file" type="file" multiple={false} hidden />

        <input
          type="text"
          placeholder="Ask me anything..."
          className="flex-1 p-[15px] border-none outline-none bg-transparent text-[#ececec]"
        />
        <button
          type="submit"
          className="w-8 h-8 rounded-full bg-[#605e68] flex items-center justify-center overflow-hidden p-2"
        >
          <img
            src="/arrow.png"
            alt="arrow"
            className="w-full h-full object-cover cursor-pointer"
          />
        </button>
      </form>
    </>
  );
};

export default NewPrompt;
