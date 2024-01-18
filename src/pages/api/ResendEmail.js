import { ResendEmailTemplate } from '@/components/ResendEmail/ResendEmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_EMAIL);

const ResendEmail = async (req, res) => {
  console.log('REQUEST----->', req.body);
  const { name, email, phone, message, residence } = req.body;
  const { data, error } = await resend.emails.send({
    from: 'Web PSIDUELO <onboarding@resend.dev>',
    to: ['fakumax@gmail.com'],
    subject: 'Mensaje nuevo | PSIDUELO',
    react: ResendEmailTemplate({
      name,
      email,
      phone,
      residence,
      message,
    }),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};

export default ResendEmail;
