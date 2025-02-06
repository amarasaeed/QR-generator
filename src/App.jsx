import React, { useState } from "react";
import QRTabs from "./components/QRTabs";
import QRInput from "./components/QRInput";
import QRButtons from "./components/QRButtons";
import QRDisplay from "./components/QRDisplay";

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

                <QRTabs activeTab={activeTab} setActiveTab={setActiveTab} setInput={setInput} setQrValue={setQrValue} />

                <QRInput activeTab={activeTab} input={input} setInput={setInput} />

                <QRButtons generateQRCode={generateQRCode} clearQRCode={clearQRCode} />

                <QRDisplay qrValue={qrValue} />
            </div>
        </div>
    );
};

export default App;
