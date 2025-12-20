import styled from 'styled-components';

export const ContainerField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 1.1rem;
    color: ${(props) => props.theme.colors.primary};
    text-align: left;
    font-family: ${(props) => props.theme.typography.fontFamily_crimson};
    font-style: italic;
    line-height: 1.5;
  }

  input,
  textarea {
    color: ${(props) => props.theme.colors.primary};
    flex: 1;
    border: none;
    border-bottom: 1px solid rgba(139, 109, 76, 0.3);
    transition: border-color 0.3s ease;
    height: 44px;
    width: 100%;
    font-family: ${(props) => props.theme.typography.fontFamily_crimson};
    font-size: 1rem;
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
  }
  input::placeholder,
  textarea::placeholder {
    color: ${(props) => props.theme.colors.primary};
    opacity: 0.35;
  }
  div {
    position: relative;
    display: flex;
    flex: 1;
    width: 100%;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    label {
      font-size: 1.25rem;
    }
    input,
    textarea {
      font-size: 1.05rem;
    }
  }
`;

export const StyleSpan = styled.span`
  position: absolute;
  bottom: -16px;
  left: 0;
  font-size: 0.7rem;
  color: #c45c5c;
  font-family: ${(props) => props.theme.typography.fontFamily_crimson};
`;

export const Spinner = styled.span`
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin-right: 8px;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const StyledButton = styled.button`
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  padding: 12px 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 100%;
  max-width: 260px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 1rem auto 0;
  background-color: ${(props) => props.$isSuccess ? '#5a8a5a' : '#8B6D4C'};
  color: white;
  font-family: ${(props) => props.theme.typography.fontFamily_crimson};
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(139, 109, 76, 0.2);

  &:hover {
    transform: ${(props) => props.$isSuccess ? 'none' : 'translateY(-2px)'};
    box-shadow: ${(props) => props.$isSuccess ? '0 2px 8px rgba(139, 109, 76, 0.2)' : '0 4px 12px rgba(139, 109, 76, 0.3)'};
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: ${(props) => props.$isSuccess ? '1' : '0.7'};
    cursor: ${(props) => props.$isSuccess ? 'default' : 'not-allowed'};
    transform: none;
  }
`;

export const RadioButton = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
  border: none;
  background: none;
  position: relative;

  label {
    font-family: ${(props) => props.theme.typography.fontFamily_crimson};
    font-size: 1rem;
    display: flex;
    flex-direction: row;
    padding: 0.7rem 2rem;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.25s ease;
    border-radius: 25px;
    background: rgba(255, 255, 255, 0.7);
    border: 1px solid rgba(139, 109, 76, 0.25);
    color: ${(props) => props.theme.colors.primary};
    min-width: 80px;

    &:hover {
      background: rgba(139, 109, 76, 0.1);
      border-color: ${(props) => props.theme.colors.primary};
    }

    &:has(input:checked) {
      background: ${(props) => props.theme.colors.primary};
      color: white;
      border-color: ${(props) => props.theme.colors.primary};
    }
  }
  
  input[type="radio"] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    pointer-events: none;
  }
`;

export const FormStyle = styled.form`
  gap: 1.25rem;
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    gap: 1.5rem;
  }
`;
