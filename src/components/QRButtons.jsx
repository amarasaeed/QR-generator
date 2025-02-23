import React from "react";

const QRButtons = ({ generateQRCode, clearQRCode }) => {
    return (
        <div className="flex justify-between">
            <button
                onClick={generateQRCode}
                className="w-1/2 h-10 bg-black text-white font-semibold cursor-pointer transition-all duration-200 mr-2"
            >
                Generate
            </button>
            <button
                onClick={clearQRCode}
                className="w-1/2 h-10 bg-transparent text-red-600 font-semibold cursor-pointer transition-all duration-200"
            >
                Clear
            </button>
        </div>
    );
};

export default QRButtons;