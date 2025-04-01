import React, { useEffect, useRef } from "react";
import cx from "@styles/MainStyle.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Close modal when clicking outside of it
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null; // Don't render anything if the modal is not open

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50 mx-2">
      <div ref={modalRef} className={cx["modal-tab"]}>
        <div className="flex justify-between items-center mb-4">
          <h1 className={cx["cert-slides-containers--second-font"]}>{title}</h1>
          <button
            onClick={onClose}
            className="text-gray-700 hover:text-[#F5C300] font-bold text-xl"
          >
            &times;
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
