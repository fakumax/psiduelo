import { ContactForm } from '@/components/ResendEmail/ContactForm.jsx';
import { PrismicNextImage } from '@prismicio/next';
import Link from 'next/link';
import {
  Container,
  FormWrapper,
  FormSection,
  PaperBorderTop,
  PaperBorderBottom,
  SideSection,
  SideTitle,
  SideText,
  SideButton,
  Wrapper,
} from './defaultStyles.js';

const ContactText = (slice) => {
  return (
    <Wrapper>
      <Container>
        <FormWrapper>
          <PaperBorderTop>
            <PrismicNextImage field={slice.primary.imageborder} fallbackAlt="" />
          </PaperBorderTop>
          <FormSection>
            <ContactForm text={slice.primary} />
          </FormSection>
          <PaperBorderBottom>
            <PrismicNextImage field={slice.primary.imageborder} fallbackAlt="" />
          </PaperBorderBottom>
        </FormWrapper>
        <SideSection>
          <SideTitle>¿Necesitas acompañamiento para atravesar tu duelo?</SideTitle>
          <SideText>
            Reservá tu primera consulta y comencemos a trabajar en tu proceso de recuperación emocional.
          </SideText>
          <Link href="/reservar-turno" passHref legacyBehavior>
            <SideButton>Reservar turno</SideButton>
          </Link>
        </SideSection>
      </Container>
    </Wrapper>
  );
};

export { ContactText };
