import styled from 'styled-components';

export const ContainerField = styled.div`
  display: flex;
  align-items: center;
  margin: 0rem 1rem;

  label {
    width: 30%;
    font-family: ${(props) => props.theme.typography.fontFamily_crimson};
  }
  input,
  textarea {
    flex: 1;
    border-color: rgba(25, 25, 26, 1);
    border-width: 1px;
    border-style: solid;
    border-radius: inherit;
    height: 40px;
    width: 100%;
    font-family: ${(props) => props.theme.typography.fontFamily_crimson};
    font-size: 14px;
    padding: 0 12px;
  }
  textarea {
    height: 80px;
    padding: 10px 10px;
  }
  input:focus,
  textarea:focus {
    outline-color: ${(props) => props.theme.colors.titleBrown};
  }
  div {
    position: relative;
    color: red;
    display: flex;
    flex: 1;
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
`;
