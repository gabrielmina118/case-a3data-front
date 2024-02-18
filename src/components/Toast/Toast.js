import React, { useState, useEffect } from "react";
import { ToastContainer, ToastsContainer } from "./styled";
const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = ({ message, type }) => {
    const newToast = {
      id: new Date().getTime(),
      message,
      type,
    };

    setToasts((prevToasts) => [...prevToasts, newToast]);
  };

  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const Toast = ({ id, message, type }) => {
    useEffect(() => {
      setTimeout(() => {
        removeToast(id);
      }, 3000);
    }, [id]);
    return <ToastContainer type={type} key={id}>{message}</ToastContainer>;
  };

  const ToastManager = () => {
    return (
      <ToastsContainer>
        {toasts.map((toast) => (
          <Toast
            type={toast.type}
            key={toast.id}
            id={toast.id}
            message={toast.message}
          />
        ))}
      </ToastsContainer>
    );
  };

  return {
    ToastManager,
    addToast,
  };
};

export default useToast;
