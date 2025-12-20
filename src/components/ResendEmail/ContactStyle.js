import styled from 'styled-components';

export const ContainerField = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 1.1rem;
    color: ${(props) => props.theme.colors.primary};
    font-family: var(--font-skeptisgraph);
    opacity: 0.9;
  }
  input,
  textarea {
    color: ${(props) => props.theme.colors.primary};
    flex: 1;
    border: none;
    border-bottom: 1px solid rgba(139, 109, 76, 0.3);
    transition: all 0.3s ease;
    height: 42px;
    width: 100%;
    font-family: ${(props) => props.theme.typography.fontFamily_crimson};
    font-size: 0.95rem;
    padding: 0 8px;
    background-color: transparent;
    border-radius: 0;
  }
  textarea {
    height: 100px;
    padding: 12px 8px;
    resize: vertical;
    min-height: 80px;
  }
  input:focus,
  textarea:focus {
    outline: none;
    border-bottom-color: ${(props) => props.theme.colors.primary};
    background-color: rgba(255, 255, 255, 0.5);
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
      font-size: 1.4rem;
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
  gap: 0.5rem;

  label {
    font-size: 1.1rem;
    color: ${(props) => props.theme.colors.primary};
    font-family: var(--font-skeptisgraph);
    opacity: 0.9;
  }
  input,
  textarea {
    color: ${(props) => props.theme.colors.primary};
    flex: 1;
    border: none;
    border-bottom: 1px solid rgba(139, 109, 76, 0.3);
    transition: all 0.3s ease;
    height: 42px;
    width: 100%;
    font-family: ${(props) => props.theme.typography.fontFamily_crimson};
    font-size: 0.95rem;
    padding: 0 8px;
    background-color: transparent;
  }
  textarea {
    height: 100px;
    padding: 12px 8px;
    resize: vertical;
    min-height: 80px;
  }
  input:focus,
  textarea:focus {
    outline: none;
    border-bottom-color: ${(props) => props.theme.colors.primary};
    background-color: rgba(255, 255, 255, 0.5);
  }
  div {
    position: relative;
    display: flex;
    flex: 1;
    width: 100%;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-column: 1 / span 2;
    max-width: 60%;
    margin: 0 auto;
    label {
      font-size: 1.6rem;
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
  padding: 14px 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 280px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 2.5rem auto 0;
  background: linear-gradient(135deg, 
    ${(props) => props.theme.colors.titleBrown} 0%, 
    ${(props) => props.theme.colors.primary} 100%
  );
  color: ${(props) => props.theme.colors.bgColorWhite};
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
  gap: 1.75rem;
  display: grid;
  grid-template-columns: 1fr;
  padding: 0.5rem;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem 2.5rem;
    padding: 1rem;
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
