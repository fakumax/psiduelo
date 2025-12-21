import { ResendEmailTemplateTurno } from '@/components/ResendEmail/ContactTurno/ResendEmailTemplateTurno';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_EMAIL);

const verifyTurnstile = async (token) => {
  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret: process.env.TURNSTILE_SECRET_KEY,
      response: token,
    }),
  });
  return response.json();
};

const ResendEmailTurno = async (req, res) => {
  const {
    email,
    name,
    age,
    perdida,
    howtime,
    feeling,
    toldanyone,
    receivedtherapy,
    message,
    turnstileToken,
  } = req.body;

  // Verificar Turnstile
  const turnstileResult = await verifyTurnstile(turnstileToken);
  if (!turnstileResult.success) {
    return res.status(400).json({ success: false, error: 'Verificación de captcha fallida' });
  }

  const { data, error } = await resend.emails.send({
    from: 'Web PSIDUELO <no-reply@psiduelo.com>',
    replyTo: 'psiduelo@gmail.com',
    to: ['psiduelo@gmail.com'],
    subject: 'Reservar Turno | PSIDUELO',
    react: ResendEmailTemplateTurno({
      email,
      name,
      age,
      perdida,
      howtime,
      feeling,
      toldanyone,
      receivedtherapy,
      message,
    }),
  });

  if (error) {
    return res.status(400).json({ success: false, error });
  }

  res.status(200).json({ success: true, data });
};

export default ResendEmailTurno;
