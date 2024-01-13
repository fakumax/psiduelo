import { ResendEmailTemplate } from '@/components/ResendEmail/ResendEmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_EMAIL);

const ResendEmail = async (req, res) => {
  const { name, email, phone, message } = req.body;

  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['fakumax@gmail.com'],
    subject: 'Hello world',
    react: ResendEmailTemplate({
      name,
      email,
      phone,
      message,
    }),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};

export { ResendEmail };
