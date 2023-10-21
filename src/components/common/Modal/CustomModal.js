import React from 'react';
import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    height: '80%',
    width: '60%',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.5rem',
  },
};

const CustomModal = ({ isOpen, onRequestClose, content }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Example Modal"
      style={customStyles}
    >
      <button style={customStyles.closeButton} onClick={onRequestClose}>
        <MdClose />
      </button>
      <div>{content}</div>
    </Modal>
  );
};
export { CustomModal };
