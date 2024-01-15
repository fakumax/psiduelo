import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import { PrismicNextImage } from '@prismicio/next';
//import { ResendEmail } from '@/pages/api/ResendEmail.js';
import { FormSchema } from '@/components/ResendEmail/FormSchema.js';
import { z } from 'zod';
import { ContainerField, StyleSpan, StyledButton } from './ContactStyle';

const ContactForm = ({ text }) => {
  const [data, setData] = useState();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await fetch('/api/ResendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.nombre,
          email: data.email,
          phone: data.telefono,
          residence: data.residence,
          message: data.mensaje,
        }),
      });

      const responseData = await response.json();

      if (responseData.success) {
        console.log({ data: responseData.data });
        toast.success('Mensaje enviado. ¡Muchas gracias!');
        reset();
        return;
      }

      // toast error
      console.log(responseData.error);
      toast.error('Ha sucedido un error!');
    } catch (error) {
      console.error('Error al enviar el correo electrónico', error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          gap: '2rem',
          display: 'flex',
          flexDirection: 'column',
          margin: '0 1rem',
        }}
      >
        <ContainerField>
          <label>{text.name}</label>
          <div>
            <input {...register('nombre')} />
            {errors.nombre && <StyleSpan>{errors.nombre.message}</StyleSpan>}
          </div>
        </ContainerField>

        <ContainerField>
          <label> {text.email} </label>
          <div>
            <input {...register('email')} />
            {errors.email && <StyleSpan>{errors.email.message}</StyleSpan>}
          </div>
        </ContainerField>

        <ContainerField>
          <label> {text.phone}</label>
          <div>
            <input {...register('telefono')} />
            {errors.telefono && <StyleSpan>{errors.telefono.message}</StyleSpan>}
          </div>
        </ContainerField>

        <ContainerField>
          <label> {text.residence}</label>
          <div>
            <input {...register('residencia')} />
            {errors.residencia && <StyleSpan>{errors.residencia.message}</StyleSpan>}
          </div>
        </ContainerField>

        <ContainerField>
          <label>{text.message}</label>
          <div>
            <textarea {...register('mensaje')} />
            {errors.mensaje && <StyleSpan>{errors.mensaje.message}</StyleSpan>}
          </div>
        </ContainerField>

        <StyledButton disabled={isSubmitting}>
          {isSubmitting ? 'enviando' : 'Enviar'}
        </StyledButton>
      </form>
    </>
  );
};

export { ContactForm };
