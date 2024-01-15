import { z } from 'zod';

const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);

const FormSchema = z.object({
  nombre: z.string().min(4, { message: 'Mínimo 4 caracteres' }),
  email: z.string().email({ message: 'Correo electrónico no válido' }),
  telefono: z.string().regex(phoneRegex, 'Número inválido.'),
  mensaje: z.string().min(10, { message: 'Mensaje obligatorio.' }),
  residencia: z.string().min(10, { message: 'Mensaje obligatorio.' }),
});

export { FormSchema };
