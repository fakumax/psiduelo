import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import { PrismicNextImage } from '@prismicio/next';
//import { ResendEmail } from '@/pages/api/ResendEmail.js';
import { FormSchema } from '@/components/ResendEmail/FormSchema.js';
import { z } from 'zod';

const ContactForm = ({ text }) => {
  const [data, setData] = useState();
  const {
    register,
    handleSubmit,
    reset,
    //formState: { errors, isSubmitting },
    formState: { errors },
  } = useForm({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      // Hacer una solicitud HTTP al endpoint de la API
      const response = await fetch('/api/ResendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.nombre,
          email: data.email,
          phone: data.telefono,
          message: data.mensaje,
        }),
      });

      const responseData = await response.json();

      if (responseData.success) {
        console.log({ data: responseData.data });
        toast.success('Email sent!');
        reset();
        return;
      }

      // toast error
      console.log(responseData.error);
      toast.error('Something went wrong!');
    } catch (error) {
      console.error('Error al enviar el correo electrónico', error);
    }
  };

  //   const onSubmit = async (data) => {
  //     console.log(data);
  //     setData(data);
  //     try {
  //       // Llamar a la función ResendEmail para enviar el correo electrónico
  //       const response = await ResendEmail({
  //         name: data.nombre,
  //         email: data.email,
  //         phone: data.telefono,
  //         message: data.mensaje,
  //       });
  //       if (response?.success) {
  //         console.log({ data: response.data });
  //         toast.success('Email sent!');
  //         reset();
  //         return;
  //       }

  //       // toast error
  //       console.log(response?.error);
  //       toast.error('Something went wrong!');
  //     } catch (error) {
  //       console.error('Error al enviar el correo electrónico', error);
  //     }
  //   };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>{text.name}</label>
          <input {...register('nombre')} />
          <p>{errors.nombre?.message}</p>
        </div>

        <div>
          <label> {text.email} </label>
          <input {...register('email')} />
          <p>{errors.email?.message}</p>
        </div>

        <div>
          <label> {text.phone}</label>
          <input {...register('telefono')} />
          <p>{errors.telefono?.message}</p>
        </div>

        <div>
          <label>{text.message}</label>
          <textarea {...register('mensaje')} />
          <p>{errors.mensaje?.message}</p>
        </div>

        <button>Enviar</button>
      </form>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

export { ContactForm };
