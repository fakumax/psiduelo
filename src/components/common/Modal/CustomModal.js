import React from 'react';
import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(45, 35, 30, 0.5)',
    backdropFilter: 'blur(3px)',
    zIndex: 1000,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    width: '92%',
    maxWidth: '520px',
    maxHeight: '85vh',
    overflowY: 'auto',
    overflowX: 'hidden',
    position: 'relative',
    border: 'none',
    borderRadius: '2px',
    padding: '24px 20px 28px',
    boxShadow: `
      0 4px 20px rgba(0,0,0,0.08),
      0 8px 40px rgba(0,0,0,0.06),
      inset 0 0 100px rgba(220, 200, 170, 0.08)
    `,
    background: `
      radial-gradient(ellipse at top, rgba(255, 252, 245, 0.9) 0%, transparent 50%),
      radial-gradient(ellipse at bottom, rgba(245, 235, 220, 0.7) 0%, transparent 50%),
      linear-gradient(180deg, 
        #fdfaf5 0%, 
        #faf7f1 15%,
        #f8f4ed 50%,
        #f6f1e8 85%,
        #f4efe5 100%
      )
    `,
    scrollbarWidth: 'thin',
    scrollbarColor: 'rgba(195, 175, 150, 0.3) rgba(250, 247, 242, 0.3)',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'rgba(180, 160, 140, 0.08)',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.2rem',
    color: '#baa99a',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease',
    zIndex: 10,
  },
};

// Agregar estilos globales para el scrollbar webkit y efecto papiro
const scrollbarStyles = `
  .ReactModal__Content::-webkit-scrollbar {
    width: 4px;
  }
  .ReactModal__Content::-webkit-scrollbar-track {
    background: rgba(250, 247, 242, 0.3);
    border-radius: 10px;
  }
  .ReactModal__Content::-webkit-scrollbar-thumb {
    background: rgba(195, 175, 150, 0.3);
    border-radius: 10px;
  }
  .ReactModal__Content::-webkit-scrollbar-thumb:hover {
    background: rgba(195, 175, 150, 0.45);
  }
  

  
  /* Textura sutil de papel */
  .ReactModal__Content::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0.015;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  }
`;

// Inyectar estilos si no existen
if (typeof document !== 'undefined') {
  const styleId = 'modal-scrollbar-styles';
  if (!document.getElementById(styleId)) {
    const styleSheet = document.createElement('style');
    styleSheet.id = styleId;
    styleSheet.textContent = scrollbarStyles;
    document.head.appendChild(styleSheet);
  }
}

const CustomModal = ({ isOpen, onRequestClose, content }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal"
      style={customStyles}
    >
      {/* Close button */}
      <button 
        style={customStyles.closeButton} 
        onClick={onRequestClose}
        onMouseOver={(e) => {
          e.currentTarget.style.background = 'rgba(180, 160, 140, 0.15)';
          e.currentTarget.style.color = '#9a8a7a';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.background = 'rgba(180, 160, 140, 0.08)';
          e.currentTarget.style.color = '#baa99a';
        }}
      >
        <MdClose />
      </button>
      
      {/* Content */}
      {content}
    </Modal>
  );
};

export { CustomModal };
