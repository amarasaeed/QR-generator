import React from "react";

const QRInput = ({ activeTab, input, setInput }) => {
    return (
        <input
            type={activeTab === "image" ? "file" : "text"}
            placeholder={`Enter ${activeTab === "url" ? "a URL" : activeTab === "text" ? "some text" : activeTab === "email" ? "an email address" : "an image"}`}
            className="w-full h-10 rounded-md px-3 py-2 bg-gray-100 text-gray-800 focus:outline-none mb-4"
            value={activeTab === "image" ? undefined : input}
            onChange={(e) => activeTab === "image" ? setInput(e.target.files[0]) : setInput(e.target.value)}
            accept={activeTab === "image" ? "image/*" : undefined}
        />
    );
};

export default QRInput;
