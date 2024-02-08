import styled from 'styled-components';

export const ContainerField = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  label {
    font-size: 24px;
    color: ${(props) => props.theme.colors.bgColorSecondary};

    font-family: var(--font-skeptisgraph);
  }
  input,
  textarea {
    color: ${(props) => props.theme.colors.bgColorSecondary};
    flex: 1;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.bgColorSecondary};
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
    width: 80%;
    margin: 0 auto;
  }
`;

export const ContainerFieldMessage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  label {
    font-size: 24px;
    color: ${(props) => props.theme.colors.bgColorSecondary};

    font-family: var(--font-skeptisgraph);
  }
  input,
  textarea {
    color: ${(props) => props.theme.colors.bgColorSecondary};
    flex: 1;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.bgColorSecondary};
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
    width: 80%;
    margin: 0 auto;
    grid-column: 1 / span 2;
    width: 50%;
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
  background-color: ${(props) => props.theme.colors.titleBrown};
  color: ${(props) => props.theme.colors.bgColorWhite};
  font-family: ${(props) => props.theme.typography.fontFamily_crimson};
  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-column: 1 / span 2;
    width: 50%;
  }
`;

export const FormContact = styled.form`
  gap: 2rem;
  display: grid;
  flex-direction: column;
  margin: 0 1rem;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    /* grid-column: 1 / span 2;
    width: 50%; */
    grid-template-columns: repeat(2, 1fr);
  }
`;
