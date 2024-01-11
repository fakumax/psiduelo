import {
  Container,
  Wrapper,
  ImageContainer,
  FormContainer,
  StyledLabel,
  StyledInput,
  StyledTextarea,
  StyledSubmitButton,
} from './defaultStyles.js';
import { PrismicNextImage } from '@prismicio/next';

const ContactText = (slice) => {
  console.log('--slice--TextBlockSlice', slice);
  const { name, email, phone, message, contact, image } = slice.primary;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado!');
    // Agrega aquí la lógica adicional para manejar el envío del formulario si es necesario
  };

  return (
    <Wrapper>
      <Container>
        <div>
          <p>{contact}</p>
          <ImageContainer>
            <PrismicNextImage field={image} height={350} />
          </ImageContainer>
        </div>
        <div>
          <StyledLabel>
            {name}:
            <StyledInput type="text" name="name" />
          </StyledLabel>
          <StyledLabel>
            {email}:
            <StyledInput type="text" name="email" />
          </StyledLabel>
          <StyledLabel>
            {phone}:
            <StyledInput type="text" name="phone" />
          </StyledLabel>
          <StyledLabel>
            {message}:
            <StyledTextarea name="message" />
          </StyledLabel>
          <FormContainer>
            <StyledSubmitButton type="submit" value="Enviar" onClick={handleSubmit} />
          </FormContainer>
        </div>
      </Container>
    </Wrapper>
  );
};

export { ContactText };
