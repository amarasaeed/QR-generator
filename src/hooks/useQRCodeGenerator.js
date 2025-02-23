import { useState } from "react";

const useQRCodeGenerator = () => {
    const [activeTab, setActiveTab] = useState("url");
    const [input, setInput] = useState("");
    const [qrValue, setQrValue] = useState("");

    // Validate input based on the active tab
    const validateInput = (value) => {
        if (activeTab === "url")
            return /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/.test(value);
        if (activeTab === "email")
            return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
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

    return {
        activeTab,
        input,
        qrValue,
        setInput,
        generateQRCode,
        clearQRCode,
        handleTabChange,
    };
};

export default useQRCodeGenerator;