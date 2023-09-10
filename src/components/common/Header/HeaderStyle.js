import styled from 'styled-components';

export const NavBar = styled.nav`
  display: flex;
  height: 100px;
  justify-content: space-between;
  padding: 0 20px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    height: 150px;
    place-content: center;
    box-shadow: 0px 2px 6px rgba(44, 62, 80, 0.15);
    .links {
      width: min-content;
      text-align: center;
      margin: 0 auto;
    }
    ul {
      display: flex;
      list-style: none;
      align-items: center;
      margin: 0;
      gap: 4em;
      padding: 0;
    }
    li a {
      font-size: 16px;
      text-transform: uppercase;
      text-align: center;
      font-family: var(--font-marcellus);
      font-weight: 400;
      color: ${(props) => props.theme.colors.textTertiary};
    }
    li a:hover {
      background: -webkit-linear-gradient(
        left,
        #fbf8cc,
        #fde4cf,
        #ffcfd2,
        #f1c0e8,
        #cfbaf0,
        #a3c4f3,
        #90dbf4,
        #8eecf5,
        #98f5e1,
        #b9fbc0
      );

      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

export const IconStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoStyle = styled.div`
  position: relative;
  width: 200px;
  height: auto;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

export const RightContainer = styled.div`
  place-self: center;
  display: none;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: flex;
  }
`;

export const LeftContainer = styled.div`
  place-self: center;
  display: none;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: flex;
  }
`;

export const IconBurger = styled.div`
  align-self: center;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.6s ease;

  &.active {
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
