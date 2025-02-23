import React from "react";

const QRTabs = ({ activeTab, setActiveTab }) => {
    const tabs = ["URL", "Text", "Image", "Email"];

    return (
        <div className="flex justify-between mb-5">
            {tabs.map((tab) => (
                <button
                    key={tab.toLowerCase()}
                    onClick={() => setActiveTab(tab.toLowerCase())}
                    className={`px-3 py-2 rounded-md transition-all duration-200 bg-black text-white`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};

export default QRTabs;