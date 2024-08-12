import React, { useState, useEffect } from "react";
import "./notification.css";

interface NotificationProps {
  message: string;
  type?: "success" | "error" | "info";
  duration?: number;
  onHide?: () => void;
}

export function Notification({ message, type = "info", duration = 5000, onHide }: NotificationProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onHide) {
        onHide();
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onHide]);

  if (!visible) return null;

  return (
    <div className={`notification ${type}`}>
      <p>{message}</p>
    </div>
  );
}
