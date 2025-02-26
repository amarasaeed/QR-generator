import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useQRCodeGenerator from "./hooks/useQRCodeGenerator";
import QRTabs from "./components/QRTabs";
import QRInput from "./components/QRInput";
import QRButtons from "./components/QRButtons";
import QRDisplay from "./components/QRDisplay";
import QRCustomize from "./components/QRCustomize";

const App = () => {
    const { activeTab, input, qrValue, setInput, generateQRCode, clearQRCode, handleTabChange } = useQRCodeGenerator();

    return (
        <Router>
            <Routes>
                {/* Main QR Code Generator Page */}
                <Route path="/" element={
                    <div className="max-h-screen flex flex-row gap-8 bg-white px-4 py-10 rounded-xl shadow-lg">
                        <div className="w-full md:w-1/2 p-6 bg-gray-50 rounded-lg shadow-md">
                            <h1 className="text-2xl font-semibold text-center mb-4">QR Code Generator</h1>
                            <QRTabs activeTab={activeTab} setActiveTab={handleTabChange} />
                            <QRInput activeTab={activeTab} input={input} setInput={setInput} />
                            <QRButtons generateQRCode={generateQRCode} clearQRCode={clearQRCode} />
                        </div>
                        <div className="w-full flex flex-col items-center justify-center bg-gray-50 p-4 rounded-lg shadow-md">
                            <QRDisplay qrValue={qrValue} />
                            {/* Link to Customization Page */}
                            {qrValue && (
                                <a href={`/customize?value=${encodeURIComponent(qrValue)}`} className="font-semibold pt-1 text-blue-600 cursor-pointer">
                                    Click here to customize
                                </a>
                            )}
                        </div>
                    </div>
                } />

                {/* QR Code Customization Page */}
                <Route path="/customize" element={<QRCustomize />} />
            </Routes>
        </Router>
    );
};

export default App;