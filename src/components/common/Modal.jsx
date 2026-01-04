import React from "react";
import { X } from "lucide-react";
import CTAButtons from "./CTAButtons";

const Modal = ({ show, onClose, title, message }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        <h3>{title}</h3>
        <p>{message}</p>
        <CTAButtons />
      </div>
    </div>
  );
};

export default Modal;
