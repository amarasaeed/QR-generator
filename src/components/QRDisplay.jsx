import React from "react";
import ReactQRCode from "react-qr-code";
import { MdOutlineContentCopy, MdOutlineFileDownload } from "react-icons/md";

const QRDisplay = ({ qrValue }) => {
    return (
        <div className="relative flex flex-col justify-center items-center w-50 h-48 bg-white rounded-lg shadow-md border-1 border-white pt-8">
            {/* QR Code or Placeholder */}
            {qrValue ? (
                <div id="qr-code">
                    <ReactQRCode value={qrValue} size={100} />
                </div>
            ) : (
                <p className="text-gray-500">QR Code will appear here</p>
            )}

            {/* Label at the center of the top border */}
            <div className="font-semibold border-1 border-gray-300 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-black whitespace-nowrap">
                Your QR Code
            </div>

            {/* Copy & Download Icons */}
            {qrValue && (
                <div className="flex gap-2 mt-3">
                    {/* Copy Button */}
                    <button
                        className="p-1"
                        onClick={() => navigator.clipboard.writeText(qrValue)}
                    >
                        <MdOutlineContentCopy className="text-black w-6 h-6" />
                    </button>

                    {/* Download Button */}
                    <button
                        className="p-1"
                        onClick={() => {
                            const canvas = document.getElementById("qr-code")?.querySelector("canvas");
                            if (canvas) {
                                const link = document.createElement("a");
                                link.href = canvas.toDataURL("image/png");
                                link.download = "qr-code.png";
                                link.click();
                            }
                        }}
                    >
                        <MdOutlineFileDownload className="text-black w-6 h-6" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default QRDisplay;
