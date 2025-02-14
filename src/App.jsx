import React, { useState } from "react";
import QRTabs from "./components/QRTabs";
import QRInput from "./components/QRInput";
import QRButtons from "./components/QRButtons";
import QRDisplay from "./components/QRDisplay";

const App = () => {
    const [activeTab, setActiveTab] = useState("url");
    const [input, setInput] = useState("");
    const [qrValue, setQrValue] = useState("");

    // Validate input based on the active tab
    const validateInput = (value) => {
        if (activeTab === "url") return /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/.test(value);
        if (activeTab === "email") return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
        return value.trim().length > 0;
    };

    // Generate QR Code
    const generateQRCode = () => {
        if (validateInput(input)) {
            setQrValue(input);
        } else {
            alert("Please enter a valid input for the selected tab.");
        }
    };

    // Clear Input & QR Code
    const clearQRCode = () => {
        setInput("");
        setQrValue("");
    };

    // Handle Tab Change (Ensures input & QR code reset)
    const handleTabChange = (newTab) => {
        setActiveTab(newTab);
        clearQRCode(); // Clears both input and QR code
    };

    return (
        <div>
            <div className="max-h-screen flex flex-row gap-8 bg-white px-4 py-10 rounded-xl shadow-lg">
                <div className="w-full md:w-1/2 p-6 bg-gray-50 rounded-lg shadow-md">
                    <h1 className="text-2xl font-semibold text-center mb-4">QR Code Generator</h1>
                    <QRTabs activeTab={activeTab} setActiveTab={handleTabChange} />
                    <QRInput activeTab={activeTab} input={input} setInput={setInput} />
                    <QRButtons generateQRCode={generateQRCode} clearQRCode={clearQRCode} />
                </div>
                <div className="w-full flex flex-col items-center justify-center bg-gray-50 p-4 rounded-lg shadow-md">
                    <QRDisplay qrValue={qrValue} />
                    <p className="font-semibold pt-1">Click here to customize</p>
                </div>
            </div>
        </div>
    );
};

export default App;
