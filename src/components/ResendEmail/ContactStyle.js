import styled from 'styled-components';

export const ContainerField = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.4rem;

  label {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.primary};
    font-family: ${(props) => props.theme.typography.fontFamily_crimson};
    font-style: italic;
  }
  input,
  textarea {
    color: ${(props) => props.theme.colors.primary};
    flex: 1;
    border: none;
    border-bottom: 1px solid rgba(139, 109, 76, 0.3);
    transition: border-color 0.3s ease;
    height: 40px;
    width: 100%;
    font-family: ${(props) => props.theme.typography.fontFamily_crimson};
    font-size: 0.95rem;
    padding: 0 4px;
    background-color: transparent;
    border-radius: 0;
  }
  textarea {
    field-sizing: content;
    min-height: 40px;
    max-height: 200px;
    padding: 10px 4px;
    resize: none;
    height: auto;
  }
  input:focus,
  textarea:focus {
    outline: none;
    border-bottom-color: ${(props) => props.theme.colors.primary};
  }
  input::placeholder,
  textarea::placeholder {
    color: ${(props) => props.theme.colors.primary};
    opacity: 0.4;
  }
  div {
    position: relative;
    display: flex;
    flex: 1;
    width: 100%;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    label {
      font-size: 1.1rem;
    }
    input, textarea {
      font-size: 1rem;
    }
  }
`;

export const ContainerFieldMessage = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.4rem;

  label {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.primary};
    font-family: ${(props) => props.theme.typography.fontFamily_crimson};
    font-style: italic;
  }
  input,
  textarea {
    color: ${(props) => props.theme.colors.primary};
    flex: 1;
    border: none;
    border-bottom: 1px solid rgba(139, 109, 76, 0.3);
    transition: border-color 0.3s ease;
    height: 40px;
    width: 100%;
    font-family: ${(props) => props.theme.typography.fontFamily_crimson};
    font-size: 0.95rem;
    padding: 0 4px;
    background-color: transparent;
  }
  textarea {
    field-sizing: content;
    min-height: 40px;
    max-height: 200px;
    padding: 10px 4px;
    resize: none;
    height: auto;
  }
  input:focus,
  textarea:focus {
    outline: none;
    border-bottom-color: ${(props) => props.theme.colors.primary};
  }
  div {
    position: relative;
    display: flex;
    flex: 1;
    width: 100%;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-column: 1 / span 2;
    label {
      font-size: 1.1rem;
    }
  }
`;

export const StyleSpan = styled.span`
  position: absolute;
  bottom: -18px;
  left: 0;
  font-size: 0.75rem;
  color: #c45c5c;
  font-family: ${(props) => props.theme.typography.fontFamily_crimson};
`;

export const StyledButton = styled.button`
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  padding: 12px 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 220px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 1.5rem auto 0;
  background-color: #8B6D4C;
  color: white;
  font-family: ${(props) => props.theme.typography.fontFamily_crimson};
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(139, 109, 76, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(139, 109, 76, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-column: 1 / span 2;
  }
`;

export const FormContact = styled.form`
  gap: 1.25rem;
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem 2rem;
  }
`;

export const LinkToOtherForm = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: ${(props) => props.theme.typography.fontFamily_crimson};
  font-size: 0.95rem;
  color: ${(props) => props.theme.colors.primary};
  opacity: 0.75;
  text-decoration: none;
  margin: 1.5rem auto 0;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease;
  text-align: center;
  grid-column: 1 / -1;

  &:hover {
    opacity: 1;
    text-decoration: underline;
  }

  span {
    font-size: 1.2em;
  }
`;
