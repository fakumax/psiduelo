import React from 'react';
import Modal from 'react-modal';

const CustomModal = ({ isOpen, onRequestClose, content }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Example Modal"
      // Puedes personalizar el estilo del modal aquí si lo deseas
    >
      <button onClick={onRequestClose}>Cerrar</button>
      <div>{content}</div>
    </Modal>
  );
};
export { CustomModal };
