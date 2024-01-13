import * as React from 'react';

const ResendEmailTemplate = ({ name, email, phone, message }) => (
  <div>
    <h1>Tenés el siguiente mensaje desde PSIDUELO! : </h1>
    <h4>Nombre: {name}</h4>
    <h4>Email: {email}</h4>
    <h4>Teléfono: {phone}</h4>
    <h4>
      Mensaje: <p>{message}</p>
    </h4>
  </div>
);
export { ResendEmailTemplate };
