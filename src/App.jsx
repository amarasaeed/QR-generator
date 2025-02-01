import React, { useState } from 'react';
import ReactQRCode from 'react-qr-code';

const App = () => {
  const [text, setText] = useState('');
  const [qrValue, setQrValue] = useState('');

  const generateQRCode = () => {
    if (text.trim() !== '') {
      setQrValue(text);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen w-full flex items-center justify-center p-4">
      <div className="  bg-gradient-to-br from-cyan-400 to-purple-800 text-white p-10 rounded-xl shadow-lg">
        <h1 className="text-4xl font-extrabold mb-6 text-center">QR Code Generator</h1>
        <div className=" flex items-center justify-center mb-6">
          <input
            type="text"
            placeholder="Enter text or URL"
            className="w-70 h-10 rounded-3xl px-3 py-3 bg-teal-100 text-gray-700 text-lg focus:outline-none "
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            onClick={generateQRCode}
            className="w-20 h-10 rounded-3xl px-6 py-2 bg-teal-100 focus:outline-none text-gray-600 font-bold text-lg flex items-center justify-center ml-2 cursor-pointer"
          >
            Generate
          </button>
        </div>
        {qrValue && (
          <div className="mt-6 flex justify-center">
            <ReactQRCode value={qrValue} size={250} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
