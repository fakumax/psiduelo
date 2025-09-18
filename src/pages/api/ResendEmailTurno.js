import { ResendEmailTemplateTurno } from '@/components/ResendEmail/ContactTurno/ResendEmailTemplateTurno';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_EMAIL);

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
  } = req.body;
  const { data, error } = await resend.emails.send({
    from: 'Web Reserva Turno PSIDUELO <onboarding@resend.dev>',
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
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};

export default ResendEmailTurno;
