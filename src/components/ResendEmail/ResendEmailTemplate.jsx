import * as React from 'react';

const ResendEmailTemplate = ({ name, email, phone, message }) => (
  <div
    style={{
      fontFamily: 'Montserrat, sans-serif',
      backgroundColor: '#f9f9f9',
      padding: '20px',
      borderRadius: '10px',
      maxWidth: '600px',
      margin: '0 auto',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    }}
  >
    <h1 style={{ color: '#1a1a1a', marginBottom: '20px' }}>Mensaje desde PSIDUELO</h1>
    <h4 style={{ color: '#1a1a1a' }}>
      <strong>Nombre:</strong> {name}
    </h4>
    <h4 style={{ color: '#1a1a1a' }}>
      <strong>Email:</strong> {email}
    </h4>
    <h4 style={{ color: '#1a1a1a' }}>
      <strong>Teléfono:</strong> {phone}
    </h4>
    <h4 style={{ color: '#1a1a1a' }}>
      <strong>Mensaje:</strong> <p style={{ color: '#1a1a1a' }}>{message}</p>
    </h4>
  </div>
);
export { ResendEmailTemplate };
