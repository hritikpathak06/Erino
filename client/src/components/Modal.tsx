import { Button } from "@mui/material";
import React, { useEffect, ReactNode } from "react";
import { FiCrosshair } from "react-icons/fi";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title = "Modal Title",
  children,
}) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onclose as any}>
      <div className="sub_modal">
        <div className="modal_header">
          <h3 className="title">{title}</h3>
          <Button className="modal_button" onClick={onClose} aria-label="Close">
            <FiCrosshair />
          </Button>
        </div>
        <div className="children">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
