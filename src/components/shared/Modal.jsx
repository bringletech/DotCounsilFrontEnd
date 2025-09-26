// Modal.jsx
import React from "react";

const Modal = ({ isOpen, title, subtitle, children,onClose}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6 relative">
        {/* Header */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          {subtitle && <p className="text-gray-500 text-sm mt-1">{subtitle}</p>}
        </div>

        {/* Content */}
        <div className="mb-6">{children}</div>

        {/* Footer Buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded hover:bg-gray-300 transition absolute top-3 right-3"
          >
            ❎
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Modal;
