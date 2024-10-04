import React, { useEffect, useRef, useState } from "react";
import Upload from "./Upload";
import { IKImage } from "imagekitio-react";
import model from "../../src/lib/gemini";
import Markdown from "react-markdown";

const NewPrompt = () => {
  const [question, setQuestion] = useState("");
  const [ans, setAns] = useState("");

  const endref = useRef(null);
  const [img, setImg] = useState({
    isLoading: false,
    error: "",
    dbData: {},
    aiData: {},
  });

  const add = async (text) => {
    const result = await model.generateContent(
      Object.entries(img.aiData).length ? [img.aiData, text] : [text]
    );
    const response = await result.response.text();
    setAns(response);
    setImg({ isLoading: false, error: "", dbData: {}, aiData: {} });
  };

  useEffect(() => {
    endref.current.scrollIntoView({ behavior: "smooth" });
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    if (!text) return;
    setQuestion(text);
    add(text);
    e.target.reset(); // clear the input field
  };

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

      {/* Display user's question and AI's answer */}
      {question && (
        <div className="p-3 mb-1 rounded-3xl break-words bg-[#2c2937] self-end max-w-[80%]">
          {question}
        </div>
      )}
      {ans && (
        <div className="p-3 rounded-3xl break-words bg-[#2c293719] self-start">
          <Markdown>{ans}</Markdown>
        </div>
      )}

      <div className="pb-[15%]" ref={endref} />

      <form
        className="w-[50%] absolute bottom-0 bg-[#2c2937] rounded-2xl flex gap-5 px-5 items-center justify-between"
        onSubmit={handleSubmit}
      >
        <Upload setImg={setImg} />
        <input id="file" type="file" multiple={false} hidden />

        <input
          type="text"
          placeholder="Ask me anything..."
          className="flex-1 p-[15px] border-none outline-none bg-transparent text-[#ececec]"
          name="text"
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
