import React from 'react';
import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(40, 30, 30, 0.7)',
    backdropFilter: 'blur(3px)',
    zIndex: 1000,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: '700px',
    maxHeight: '85vh',
    overflowY: 'auto',
    position: 'relative',
    backgroundColor: '#fdfaf6',
    border: '1px solid #d4c8b8',
    borderTopWidth: '3px',
    borderBottomWidth: '3px',
    borderRadius: '2px',
    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.4)',
    color: '#4a3f3a',
    padding: '30px 40px',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '2rem',
    color: '#a89a8e',
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
      <>{content}</>
    </Modal>
  );
};
export { CustomModal };
