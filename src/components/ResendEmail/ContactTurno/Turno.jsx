import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { FormSchema } from '@/components/ResendEmail/FormSchema.js';
import { ContainerField, StyleSpan, StyledButton } from './ContactStyle';

const Turno = ({ text }) => {
  console.log('Slice-->', text);
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
      const response = await fetch('/api/ResendEmailTurno', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          name: data.nombre,
          age: data.edad,
          perdida: data.perdida,
          howtime: data.howtime,
          feeling: data.feeling,
          toldanyone: data.toldanyone,
          receivedtherapy: data.receivedtherapy,
          message: data.message,
        }),
      });

      const responseData = await response.json();

      if (responseData.success) {
        console.log({ data: responseData.data });
        toast.success('Mensaje enviado. ¡Muchas gracias!');
        reset();
        return;
      }

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
          <label> {text.email} </label>
          <div>
            <input {...register('email')} />
            {errors.email && <StyleSpan>{errors.email.message}</StyleSpan>}
          </div>
        </ContainerField>

        <ContainerField>
          <label>{text.name}</label>
          <div>
            <input {...register('nombre')} />
            {errors.nombre && <StyleSpan>{errors.nombre.message}</StyleSpan>}
          </div>
        </ContainerField>

        <ContainerField>
          <label> {text.age}</label>
          <div>
            <input {...register('edad')} />
            {errors.edad && <StyleSpan>{errors.edad.message}</StyleSpan>}
          </div>
        </ContainerField>

        <ContainerField>
          <label> {text.perdida}</label>
          <div>
            <input {...register('perdida')} />
            {errors.perdida && <StyleSpan>{errors.perdida.message}</StyleSpan>}
          </div>
        </ContainerField>
        <ContainerField>
          <label>{text.howtime}</label>
          <div>
            <input {...register('howtime')} />
            {errors.howtime && <StyleSpan>{errors.howtime.message}</StyleSpan>}
          </div>
        </ContainerField>
        <ContainerField>
          <label>{text.feeling}</label>
          <div>
            <input {...register('feeling')} />
            {errors.feeling && <StyleSpan>{errors.feeling.message}</StyleSpan>}
          </div>
        </ContainerField>
        <ContainerField>
          <label>{text.toldanyone}</label>
          <div>
            <input {...register('toldanyone')} />
            {errors.toldanyone && <StyleSpan>{errors.toldanyone.message}</StyleSpan>}
          </div>
        </ContainerField>
        <ContainerField>
          <label>{text.receivedtherapy}</label>
          <div>
            <input {...register('receivedtherapy')} />
            {errors.receivedtherapy && (
              <StyleSpan>{errors.receivedtherapy.message}</StyleSpan>
            )}
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
          {isSubmitting ? 'enviando' : `${text.buttonsend}`}
        </StyledButton>
      </form>
    </>
  );
};

export { Turno };
