import React from "react";
import ReactQRCode from "react-qr-code";

const QRDisplay = ({ qrValue }) => {
    return (
        qrValue && (
            <div className="mt-6 flex justify-center">
                <ReactQRCode value={qrValue} size={250} />
            </div>
        )
    );
};

export default QRDisplay;
