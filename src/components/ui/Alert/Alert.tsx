import { FC, memo, useState } from "react";
import './index.scss';
import { BellRing, X, CheckCircle, AlertCircle, Info } from "lucide-react";

/**
 * ==> props interface
 */
interface IProps {
  title?: string;
  alert?: string;
  description?: string;
}

/**
 * ==> Component
 */
const Alert: FC<IProps> = ({ title, alert, description }) => {

  const icon = () => {
    switch (alert) {
      case "success":
        return <CheckCircle size={25} />;
      case "danger":
        return <AlertCircle size={25} />;
      case "info":
        return <Info size={25} />;
      case "warning":
        return <BellRing size={25} />;
      default:
        return null;
    }
  }

  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  }

  return (
    isOpen && (
      <div className={`alert-wrapper alert-${alert}`}>
        <div className="alert-header">
          <div className="alert-title">
            <i>{icon()}</i>
            <h2 className="title">{title}</h2>
          </div>
          <button onClick={handleClose}>
            <X />
          </button>
        </div>
        <p>{description}</p>
      </div>
    )
  );
}

export default memo(Alert);
