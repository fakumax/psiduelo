import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { FormSchema } from '@/components/ResendEmail/FormSchema.js';
import {
  ContainerField,
  StyleSpan,
  StyledButton,
  FormContact,
  ContainerFieldMessage,
  StatusMessage,
  TurnstileWrapper,
} from './ContactStyle';

const Turnstile = dynamic(
  () => import('@marsidev/react-turnstile').then((mod) => mod.Turnstile),
  { ssr: false }
);

const ContactForm = ({ text }) => {
  const [status, setStatus] = useState({ type: null, message: '' });
  const [turnstileToken, setTurnstileToken] = useState(null);
  const [mounted, setMounted] = useState(false);
  const turnstileRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = async (data) => {
    if (!turnstileToken) {
      setStatus({ type: 'error', message: '✗ Por favor, completá la verificación de seguridad.' });
      return;
    }
    
    setStatus({ type: null, message: '' });
    
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
          residence: data.residencia,
          message: data.mensaje,
          turnstileToken,
        }),
      });

      const responseData = await response.json();

      if (responseData.success) {
        console.log({ data: responseData.data });
        setStatus({ 
          type: 'success', 
          message: '✓ ¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.' 
        });
        reset();
        setTurnstileToken(null);
        if (turnstileRef.current && typeof turnstileRef.current.reset === 'function') {
          turnstileRef.current.reset();
        }
        return;
      }

      setStatus({ 
        type: 'error', 
        message: '✗ No se pudo enviar el mensaje. Por favor, intentá de nuevo.' 
      });
      if (turnstileRef.current && typeof turnstileRef.current.reset === 'function') {
        turnstileRef.current.reset();
      }
    } catch (error) {
      console.error('Error al enviar el correo electrónico', error);
      setStatus({ 
        type: 'error', 
        message: '✗ Error de conexión. Por favor, intentá de nuevo más tarde.' 
      });
      if (turnstileRef.current && typeof turnstileRef.current.reset === 'function') {
        turnstileRef.current.reset();
      }
    }
  };

  return (
    <>
      <FormContact onSubmit={handleSubmit(onSubmit)}>
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

        <ContainerFieldMessage>
          <label>{text.message}</label>
          <div>
            <textarea {...register('mensaje')} />
            {errors.mensaje && <StyleSpan>{errors.mensaje.message}</StyleSpan>}
          </div>
        </ContainerFieldMessage>

        <TurnstileWrapper>
          {mounted && (
            <Turnstile
              ref={turnstileRef}
              siteKey={process.env.NODE_ENV === 'development' 
                ? '1x00000000000000000000AA' 
                : process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
              onSuccess={setTurnstileToken}
              onError={() => setTurnstileToken(null)}
              onExpire={() => setTurnstileToken(null)}
              options={{
                theme: 'light',
                size: 'invisible',
              }}
            />
          )}
        </TurnstileWrapper>

        <StyledButton disabled={isSubmitting || status.type === 'success' || !turnstileToken}>
          {isSubmitting ? 'Enviando...' : status.type === 'success' ? '✓ Enviado' : 'Enviar'}
        </StyledButton>
        
        {status.message && (
          <StatusMessage $success={status.type === 'success'} $error={status.type === 'error'}>
            {status.message}
          </StatusMessage>
        )}
      </FormContact>
    </>
  );
};

export { ContactForm };
