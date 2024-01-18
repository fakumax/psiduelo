import { z } from 'zod';

const FormSchema = z.object({
  email: z.string().email({ message: 'Correo electrónico no válido' }),
  nombre: z.string().min(4, { message: 'Mínimo 4 caracteres' }),
  age: z.string().min(4, { message: 'Mínimo 4 caracteres' }),
  perdida: z.string().min(4, { message: 'Mínimo 4 caracteres' }),
  howtime: z.string().min(4, { message: 'Mínimo 4 caracteres' }),
  feeling: z.string().min(4, { message: 'Mínimo 4 caracteres' }),
  toldanyone: z.string().min(4, { message: 'Mínimo 4 caracteres' }),
  receivedtherapy: z.string().min(4, { message: 'Mínimo 4 caracteres' }),
  mensaje: z.string().min(10, { message: 'Mensaje obligatorio.' }),
});

export { FormSchema };
