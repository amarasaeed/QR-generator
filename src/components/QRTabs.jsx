import React from "react";

const QRTabs = ({ activeTab, setActiveTab, setInput, setQrValue }) => {
    const tabs = [
        { id: "url", label: "URL" },
        { id: "text", label: "Text" },
        { id: "image", label: "Image" },
        { id: "email", label: "Email" },
    ];

    return (
        <div className="flex justify-between mb-6">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => {
                        setActiveTab(tab.id);
                        setInput("");
                        setQrValue("");
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
    );
};

export default QRTabs;
