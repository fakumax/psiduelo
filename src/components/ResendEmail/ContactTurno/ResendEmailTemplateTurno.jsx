import * as React from 'react';

const ResendEmailTemplateTurno = ({
  email,
  name,
  age,
  perdida,
  howtime,
  feeling,
  toldanyone,
  receivedtherapy,
  message,
}) => (
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
      <strong>Email:</strong> {email}
    </h4>
    <h4 style={{ color: '#1a1a1a' }}>
      <strong>Nombre Completo:</strong> {name}
    </h4>
    <h4 style={{ color: '#1a1a1a' }}>
      <strong>Edad:</strong> {age}
    </h4>
    <h4 style={{ color: '#1a1a1a' }}>
      <strong>Pérdida significativa con la que necesitarías apoyo:</strong>
      {perdida}
    </h4>
    <h4 style={{ color: '#1a1a1a' }}>
      <strong>¿Hace cuánto tiempo ocurrió?:</strong> {howtime}
    </h4>
    <h4 style={{ color: '#1a1a1a' }}>
      <strong>¿Qué sientes cuando recuerdas ese momento?:</strong> {feeling}
    </h4>
    <h4 style={{ color: '#1a1a1a' }}>
      <strong>¿Le has contado a alguien más lo que aún sientes con esta pérdida?:</strong>
      {toldanyone}
    </h4>
    <h4 style={{ color: '#1a1a1a' }}>
      <strong>¿Has recibido terapia previamente por esta pérdida?:</strong>
      {receivedtherapy}
    </h4>

    <h4 style={{ color: '#1a1a1a' }}>
      <strong>Mensaje:</strong> <p style={{ color: '#1a1a1a' }}>{message}</p>
    </h4>
  </div>
);
export { ResendEmailTemplateTurno };
