import React from "react";

const QRButtons = ({ generateQRCode, clearQRCode }) => {
    return (
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
    );
};

export default QRButtons;
