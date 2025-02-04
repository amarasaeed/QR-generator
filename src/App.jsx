import React, { useState } from "react";
import ReactQRCode from "react-qr-code";

const App = () => {
    const [activeTab, setActiveTab] = useState("url");
    const [input, setInput] = useState("");
    const [qrValue, setQrValue] = useState("");

    const validateInput = (value) => {
        if (activeTab === "url") {
            return /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/.test(value);
        } else if (activeTab === "email") {
            return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
        } else if (activeTab === "text") {
            return value.trim().length > 0;
        } else if (activeTab === "image") {
            return value.trim().length > 0; 
        }
        return false;
    };

    const generateQRCode = () => {
        if (validateInput(input)) {
            setQrValue(input);
        } else {
            alert("Invalid input for the selected tab.");
        }
    };

    const clearQRCode = () => {
        setInput("");
        setQrValue("");
    };

    return (
        <div className="bg-gray-900 min-h-screen w-full flex items-center justify-center p-4">
            <div className="bg-white text-gray-900 p-8 rounded-xl shadow-lg w-96">
                <h1 className="text-2xl font-bold text-center mb-6">QR Code Generator</h1>

                {/* Tabs */}
                <div className="flex justify-between mb-6">
                    {[
                        { id: "url", label: "URL" },
                        { id: "text", label: "Text" },
                        { id: "image", label: "Image" },
                        { id: "email", label: "Email" },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => {
                                setActiveTab(tab.id);
                                setInput(""); // Reset input when switching tabs
                                setQrValue(""); // Clear QR code when switching
                            }}
                            className={`px-4 py-2 rounded-md transition-all duration-200 ${activeTab === tab.id
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 text-gray-700"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Input Field */}
                <input
                    type={activeTab === "image" ? "file" : "text"}
                    placeholder={`Enter ${activeTab === "url" ? "a URL" :
                            activeTab === "text" ? "some text" :
                                activeTab === "email" ? "an email address" :
                                    "an image"
                        }`}
                    className="w-full h-10 rounded-md px-3 py-2 bg-gray-100 text-gray-800 focus:outline-none mb-4"
                    value={activeTab === "image" ? undefined : input}
                    onChange={(e) =>
                        activeTab === "image" ? setInput(e.target.files[0]) : setInput(e.target.value)
                    }
                    accept={activeTab === "image" ? "image/*" : undefined}
                />


                {/* Buttons */}
                <div className="flex justify-between">
                    <button
                        onClick={generateQRCode}
                        className="w-1/2 h-10 rounded-md bg-blue-500 text-white font-bold text-lg cursor-pointer transition-all duration-200 hover:bg-blue-600 mr-2"
                    >
                        Generate QR Code
                    </button>
                    <button
                        onClick={clearQRCode}
                        className="w-1/2 h-10 rounded-md bg-blue-500 text-white font-bold text-lg cursor-pointer transition-all duration-200 hover:bg-blue-600"
                    >
                        Clear
                    </button>
                </div>

                {/* QR Code Display */}
                {qrValue && (
                    <div className="mt-6 flex justify-center">
                        <ReactQRCode value={qrValue} size={250} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
