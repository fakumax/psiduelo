import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin-right: 100px;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    margin-right: 0;
  }
  h1 {
    margin: 0;
    margin-bottom: 24px;
    color: ${(props) => props.theme.colors.textPrimary};
    em {
      color: ${(props) => props.theme.colors.bgColorQuaternary};
      font-style: normal;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      width: 70%;
      line-height: 44px;
      font-size: 34px;
      margin-bottom: 16px;
    }
  }
  p {
    margin: 0;
    letter-spacing: 0.25px;
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      margin-bottom: 32px;
    }
  }
`;

export const ImgHolder = styled.div`
  width: 50%;
  img {
    width: 100%;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    border-radius: 24px;
    img {
      width: 100%;
    }
  }
`;

export const Button = styled.button`
  border-radius: 22px;
  height: 46px;
  padding: 10px 30px;
  border: transparent;
  font-size: 16px;
  margin-top: 18px;
  line-height: 24px;
  width: 142px;
  height: 48px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.secondary};
  background: ${(props) => props.theme.colors.bgColorQuaternary};
`;
