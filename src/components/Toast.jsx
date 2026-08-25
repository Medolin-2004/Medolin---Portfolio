import { useEffect } from "react";
import { FiCheckCircle, FiAlertCircle, FiX } from "react-icons/fi";
import "./Toast.css";

export default function Toast({ toast, onClose }) {
  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [toast, onClose]);

  if (!toast) return null;

  const isSuccess = toast.type === "success";

  return (
    <div className={`toast ${isSuccess ? "toast-success" : "toast-error"}`} role="status">
      <span className="toast-icon">
        {isSuccess ? <FiCheckCircle /> : <FiAlertCircle />}
      </span>
      <p className="toast-message">{toast.message}</p>
      <button className="toast-close" onClick={onClose} aria-label="Dismiss">
        <FiX />
      </button>
    </div>
  );
}
