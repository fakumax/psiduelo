import { Turno } from '@/components/ResendEmail/ContactTurno/Turno.jsx';
import { Container, Wrapper } from './defaultStyles.js';

const ContactTurno = (slice) => {
  console.log('TURNo', slice);
  return (
    <Wrapper>
      <Container>
        <h3>{slice.primary.titulo}</h3>
        <Turno text={slice.primary} />
      </Container>
    </Wrapper>
  );
};

export { ContactTurno };
