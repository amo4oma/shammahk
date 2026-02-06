'use client';



const Modal = ({ isOpen, onClose, children }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-2xs  z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <button onClick={onClose} className="float-right font-bold">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;