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
      <strong>Email:</strong>
      <span style={{ fontWeight: 400 }}> {email}</span>
    </h4>
    <h4 style={{ color: '#1a1a1a' }}>
      <strong>Nombre Completo:</strong>
      <span style={{ fontWeight: 400 }}> {name}</span>
    </h4>
    <h4 style={{ color: '#1a1a1a' }}>
      <strong>Edad:</strong>
      <span style={{ fontWeight: 400 }}> {age}</span>
    </h4>
    <h4 style={{ color: '#1a1a1a' }}>
      <strong>Pérdida significativa con la que necesitarías apoyo:</strong>
      <span style={{ fontWeight: 400 }}> {perdida}</span>
    </h4>
    <h4 style={{ color: '#1a1a1a' }}>
      <strong>¿Hace cuánto tiempo ocurrió?:</strong>
      <span style={{ fontWeight: 400 }}> {howtime}</span>
    </h4>
    <h4 style={{ color: '#1a1a1a' }}>
      <strong>¿Qué sientes cuando recuerdas ese momento?:</strong>
      <span style={{ fontWeight: 400 }}> {feeling}</span>
    </h4>
    <h4 style={{ color: '#1a1a1a' }}>
      <strong>¿Le has contado a alguien más lo que aún sientes con esta pérdida?:</strong>
      <span style={{ fontWeight: 400 }}> {toldanyone}</span>
    </h4>
    <h4 style={{ color: '#1a1a1a' }}>
      <strong>¿Has recibido terapia previamente por esta pérdida?:</strong>
      <span style={{ fontWeight: 400 }}> {receivedtherapy}</span>
    </h4>

    <h4 style={{ color: '#1a1a1a' }}>
      <strong>Mensaje:</strong>
      <span style={{ fontWeight: 400 }}> {message}</span>
    </h4>
  </div>
);
export { ResendEmailTemplateTurno };
