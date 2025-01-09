import { ReactNode } from "preact/compat";

interface Props {
  children: ReactNode;
  onClose : () => void;
}

const Alert = ({ children , onClose}: Props) => {
  return (
    <div className="alert alert-primary  alert-dismissible " role="alert">
      {children}

      <button
        type="button"
        onClick={onClose}
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
