import "./Modal.css";

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
};

function Modal({ children, onClose }: ModalProps) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default Modal;