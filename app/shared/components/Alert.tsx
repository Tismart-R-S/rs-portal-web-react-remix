import { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@ui/alert";
import { AlertCircle, CheckCircle } from "lucide-react";
import { cn } from "@lib/utils";

interface TopAlertProps {
  title: string;
  description: string;
  type: "success" | "error";
  onDismiss: () => void;
  duration?: number;
}

export default function TopAlert({
  title,
  description,
  type,
  duration = 5000,
  onDismiss,
}: TopAlertProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onDismiss();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onDismiss]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 transform right-4 z-50 w-full max-w-md transition-opacity duration-300">
      <Alert
        variant="default"
        className={cn(
          "border",
          type === "success"
            ? "border-green-500 bg-green-50"
            : "border-red-500 bg-red-50"
        )}
      >
        {type === "success" ? (
          <CheckCircle className="h-4 w-4 text-green-600" />
        ) : (
          <AlertCircle className="h-4 w-4 text-red-600" />
        )}
        <AlertTitle
          className={type === "success" ? "text-green-800" : "text-red-800"}
        >
          {title}
        </AlertTitle>
        <AlertDescription
          className={type === "success" ? "text-green-700" : "text-red-700"}
        >
          {description}
        </AlertDescription>
      </Alert>
    </div>
  );
}
