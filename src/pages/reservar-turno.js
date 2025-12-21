import Head from 'next/head';
import { createClient } from '@/prismicio';
import { Layout } from '@/components/common/Layout';
import { Turno } from '@/components/ResendEmail/ContactTurno/Turno';
import styled from 'styled-components';

const PageWrapper = styled.div`
  min-height: 80vh;
  padding: 2rem 1rem 4rem;
  background: linear-gradient(180deg, 
    ${(props) => props.theme.colors.bgColorWhite} 0%, 
    #f8f5f0 100%
  );
  position: relative;
  overflow: hidden;

  /* Decorative elements */
  &::before {
    content: '';
    position: absolute;
    top: 5%;
    right: -5%;
    width: 300px;
    height: 300px;
    background: url('/svg/gold_splatters.svg') no-repeat center;
    background-size: contain;
    opacity: 0.3;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 10%;
    left: -5%;
    width: 250px;
    height: 250px;
    background: url('/svg/gold_splatters.svg') no-repeat center;
    background-size: contain;
    opacity: 0.25;
    transform: rotate(180deg);
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const Title = styled.h1`
  font-family: var(--font-skeptisgraph);
  font-size: 2.5rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 0.75rem;
  line-height: 1.2;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 3.2rem;
  }
`;

const Subtitle = styled.p`
  font-family: ${(props) => props.theme.typography.fontFamily_crimson};
  font-size: 1rem;
  color: ${(props) => props.theme.colors.primary};
  opacity: 0.8;
  max-width: 450px;
  margin: 0 auto;
  line-height: 1.6;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 1.1rem;
  }
`;

const FormCard = styled.div`
  background: linear-gradient(145deg, #fdfbf8 0%, #f9f6f1 100%);
  border-radius: 8px;
  padding: 2rem 1.5rem;
  box-shadow: 
    0 2px 8px rgba(0,0,0,0.04),
    0 4px 16px rgba(0,0,0,0.03);
  position: relative;

  /* Subtle paper texture effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 8px;
    opacity: 0.02;
    pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 2.5rem 3rem;
  }
`;

const BackLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${(props) => props.theme.typography.fontFamily_crimson};
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.primary};
  opacity: 0.7;
  text-decoration: none;
  margin-top: 2rem;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  &::before {
    content: '←';
  }
`;

const text = {
  email: 'Email',
  name: '¿Cuál es tu Nombre Completo?',
  age: 'Edad',
  perdida: '¿Cuál es la pérdida significativa con la que necesitarías apoyo?',
  howtime: '¿Hace cuánto tiempo ocurrió?',
  feeling: '¿Qué sientes cuando recuerdas ese momento?',
  toldanyone: '¿Le has contado a alguien más lo que aún sientes con esta pérdida?',
  receivedtherapy: '¿Has recibido terapia previamente por esta pérdida?',
  message: 'Comentario adicional (opcional)',
  buttonsend: 'Enviar',
};

const ReservarTurno = ({ navigation, copyright }) => {
  return (
    <Layout navigation={navigation} copyright={copyright}>
      <Head>
        <title>Reservar Turno | Psiduelo - Terapia de Duelo Online</title>
        <meta 
          name="description" 
          content="Reserva tu primera consulta de terapia de duelo online. Acompañamiento profesional para superar la pérdida de seres queridos y mascotas."
        />
      </Head>
      <PageWrapper>
        <Container>
          <Header>
            <Title>Reservar tu Primera Consulta</Title>
            <Subtitle>
              Completa el formulario y me pondré en contacto contigo para coordinar nuestra primera sesión.
            </Subtitle>
          </Header>
          <FormCard>
            <Turno text={text} />
          </FormCard>
          <BackLink href="/contacto">
            ¿Solo tenés una consulta? Escribime acá
          </BackLink>
        </Container>
      </PageWrapper>
    </Layout>
  );
};

export default ReservarTurno;

export async function getStaticProps({ previewData }) {
  try {
    const client = createClient({ previewData });
    const [navigation, copyright] = await Promise.all([
      client.getSingle('navigation'),
      client.getSingle('copyright'),
    ]);
    return {
      props: {
        navigation,
        copyright,
      },
    };
  } catch (error) {
    console.error('Error fetching data from Prismic', error);
    return {
      props: {
        navigation: null,
        copyright: null,
      },
    };
  }
}
