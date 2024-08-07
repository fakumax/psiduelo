import styled from 'styled-components';

export const ContainerField = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 24px;
    color: ${(props) => props.theme.colors.primary};
    text-align: left;
    padding: 0 10px;
    font-family: var(--font-skeptisgraph);
  }

  input,
  textarea {
    color: ${(props) => props.theme.colors.primary};
    flex: 1;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.primary};
    transition: border-color 0.3s;
    height: 40px;
    width: 100%;
    font-family: ${(props) => props.theme.typography.fontFamily_crimson};
    font-size: 14px;
    padding: 0 12px;
    background-color: inherit;
  }
  textarea {
    height: 80px;
    padding: 10px 10px;
  }
  input:focus,
  textarea:focus {
    outline: none;
    border-bottom-color: ${(props) => props.theme.colors.titleBrown};
  }
  div {
    position: relative;
    color: red;
    display: flex;
    flex: 1;
    width: 100%;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    label {
      font-size: 40px;
    }
    input,
    textarea {
      font-size: 16px;
    }
  }
`;

export const StyleSpan = styled.span`
  position: absolute;
  bottom: -20px;
  font-size: 12px;
`;
export const StyledButton = styled.button`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  padding: 8px 0px;
  display: flex;
  justify-content: center;
  width: 92%;
  text-transform: uppercase;
  margin: 2rem auto;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  font-family: ${(props) => props.theme.typography.fontFamily_crimson};

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-column: 1 / span 2;
    width: 50%;
  }
`;

export const RadioButton = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 1rem 0;
  border: none;
  background: none;
  label {
    font-family: ${(props) => props.theme.typography.fontFamily_crimson};
    font-size: 16px;
    display: flex;
    flex-direction: column;
    padding: 0;
    align-items: center;
  }
  input {
    transform: scale(1);
  }
`;

export const FormStyle = styled.form`
  gap: 4rem 8rem;
  display: flex;
  flex-direction: column;
  margin: 0 2rem;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: flex;
    width: 30%;
    margin: 0 auto;
    line-height: 30px;
  }
`;
