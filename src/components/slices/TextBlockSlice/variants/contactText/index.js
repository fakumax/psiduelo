import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);

const schema = z.object({
  nombre: z.string().min(4, { message: 'Mínimo 4 caracteres' }),
  email: z.string().email({ message: 'Correo electrónico no válido' }),
  telefono: z.string().regex(phoneRegex, 'Invalid Number!'),
  mensaje: z.string().min(10, { message: 'Mensaje obligatorio' }),
});

import {
  Container,
  Wrapper,
  ImageContainer,
  FormContainer,
  StyledLabel,
  StyledInput,
  StyledTextarea,
  StyledSubmitButton,
} from './defaultStyles.js';

import { PrismicNextImage } from '@prismicio/next';

const ContactText = (slice) => {
  console.log('--slice--TextBlockSlice', slice);
  const { name, email, phone, message, contact, image } = slice.primary;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Wrapper>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>{name}</label>
            <input {...register('nombre')} />
            <p>{errors.nombre?.message}</p>
          </div>

          <div>
            <label>{email}</label>
            <input {...register('email')} />
            <p>{errors.email?.message}</p>
          </div>

          <div>
            <label>{phone}</label>
            <input {...register('telefono')} />
            <p>{errors.telefono?.message}</p>
          </div>

          <div>
            <label>{message}</label>
            <textarea {...register('mensaje')} />
            <p>{errors.mensaje?.message}</p>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </Container>
    </Wrapper>
  );
};

export { ContactText };
