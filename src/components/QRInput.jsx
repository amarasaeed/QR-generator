import React from "react";

const QRInput = ({ activeTab, input, setInput }) => {
    const handleChange = (e) => {
        if (activeTab === "image") {
            const file = e.target.files[0];
            if (file) {
                const imagePath = URL.createObjectURL(file);
                setInput(imagePath);
            }
        } else {
            setInput(e.target.value);
        }
    };

    return (
        <div>
            {activeTab === "image" ? (
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                    className="w-full mb-2"
                />
            ) : (
                <input
                    type="text"
                    value={input} // Added this to clear input on tab change
                    placeholder={`Enter ${activeTab === "url" ? "a URL" : activeTab === "text" ? "some text" : "an email"}`}
                    className="w-full h-10 rounded-md px-3 py-2 bg-gray-100 text-gray-800 focus:outline-none mb-4"
                    onChange={handleChange}
                />
            )}
        </div>
    );
};

export default QRInput;
