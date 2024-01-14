import React from 'react';

import { Container, Wrapper } from './defaultStyles.js';
import { ContactForm } from '@/components/ResendEmail/ContactForm.jsx';

const ContactText = (slice) => {
  return (
    <Wrapper>
      <Container>
        <ContactForm text={slice.primary} />
      </Container>
    </Wrapper>
  );
};

export { ContactText };
