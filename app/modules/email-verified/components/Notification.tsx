import { useEffect, useState } from "react";

interface NotificationProps {
  message: string;
}
const Notification = ({ message }: NotificationProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setIsVisible(true);

      // Ocultar el mensaje después de 5 segundos
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);

      // Limpiar el temporizador si el componente se desmonta o el mensaje cambia
      return () => clearTimeout(timer);
    }
  }, [message]);

  if (isVisible === false) return <></>;

  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
