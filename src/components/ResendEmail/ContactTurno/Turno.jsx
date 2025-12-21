import { FormSchema } from '@/components/ResendEmail/ContactTurno/FormSchema.js';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import dynamic from 'next/dynamic';
import {
  ContainerField,
  FormStyle,
  RadioButton,
  StyleSpan,
  StyledButton,
  Spinner,
  StatusMessage,
  TurnstileWrapper,
} from './ContactStyle';

const Turnstile = dynamic(
  () => import('@marsidev/react-turnstile').then((mod) => mod.Turnstile),
  { ssr: false }
);

const Turno = ({ text }) => {
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
    defaultValues: {
      receivedtherapy: '',
      toldanyone: '',
    },
  });

  const onSubmit = async (data) => {
    if (!turnstileToken) {
      setStatus({ type: 'error', message: '✗ Por favor, completá la verificación de seguridad.' });
      return;
    }
    
    setStatus({ type: null, message: '' });
    
    try {
      const response = await fetch('/api/ResendEmailTurno', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.nombre,
          email: data.email,
          age: data.edad,
          perdida: data.perdida,
          howtime: data.howtime,
          feeling: data.feeling,
          toldanyone: data.toldanyone,
          receivedtherapy: data.receivedtherapy,
          message: data.mensaje,
          turnstileToken,
        }),
      });

      const responseData = await response.json();

      if (responseData.success) {
        console.log({ data: responseData.data });
        setStatus({ 
          type: 'success', 
          message: '✓ ¡Solicitud enviada correctamente! Nos pondremos en contacto pronto para coordinar tu turno.' 
        });
        reset();
        setTurnstileToken(null);
        turnstileRef.current?.reset();
        return;
      }

      console.log(responseData.error);
      setStatus({ 
        type: 'error', 
        message: '✗ No se pudo enviar la solicitud. Por favor, intentá de nuevo.' 
      });
      turnstileRef.current?.reset();
    } catch (error) {
      console.error('Error al enviar el correo electrónico', error);
      setStatus({ 
        type: 'error', 
        message: '✗ Error de conexión. Por favor, intentá de nuevo más tarde.' 
      });
      turnstileRef.current?.reset();
    }
  };

  return (
    <>
      <FormStyle onSubmit={handleSubmit(onSubmit)}>
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
          <RadioButton>
            <label>
              Sí
              <input type="radio" value="Si" {...register('toldanyone')} />
            </label>
            <label>
              No
              <input type="radio" value="No" {...register('toldanyone')} />
            </label>

            {errors.toldanyone && (
              <StyleSpan style={{ left: 0 }}>{errors.toldanyone.message}</StyleSpan>
            )}
          </RadioButton>
        </ContainerField>
        <ContainerField>
          <label>{text.receivedtherapy}</label>
          <RadioButton>
            <label>
              Sí
              <input type="radio" value="Si" {...register('receivedtherapy')} />
            </label>
            <label>
              No
              <input type="radio" value="No" {...register('receivedtherapy')} />
            </label>
            {errors.receivedtherapy && (
              <StyleSpan style={{ left: 0 }}>{errors.receivedtherapy.message}</StyleSpan>
            )}
          </RadioButton>
        </ContainerField>
        <ContainerField>
          <label>{text.message}</label>
          <div>
            <textarea {...register('mensaje')} />
            {errors.mensaje && <StyleSpan>{errors.mensaje.message}</StyleSpan>}
          </div>
        </ContainerField>

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
                size: 'normal',
              }}
            />
          )}
        </TurnstileWrapper>

        <StyledButton 
          disabled={isSubmitting || status.type === 'success' || !turnstileToken} 
          $isSuccess={status.type === 'success'}
        >
          {isSubmitting ? (
            <><Spinner /> Enviando...</>
          ) : status.type === 'success' ? (
            '✓ Enviado'
          ) : (
            text.buttonsend
          )}
        </StyledButton>
        
        {status.message && (
          <StatusMessage $success={status.type === 'success'} $error={status.type === 'error'}>
            {status.message}
          </StatusMessage>
        )}
      </FormStyle>
    </>
  );
};

export { Turno };
