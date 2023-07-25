import styled from 'styled-components';

export const NavBar = styled.nav`
  display: flex;
  /* background-color: blue; */
  height: 100px;
  justify-content: space-between;
  box-shadow: 0px 2px 6px rgba(44, 62, 80, 0.15);
  /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2); */

  ul {
    display: flex;
    list-style: none;
    align-items: center;
    /* background-color: yellow; */
    height: 100%;
    margin: 0;
    gap: 1em;
  }
  li a {
    font-size: 20px;
    text-transform: uppercase;
    text-align: center;
    font-family: ${(props) => props.theme.typography.fontFamily_crimson};
    font-weight: 500;
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
    /* background-color: green; */
  }
`;

export const RightContainer = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  justify-content: space-around;

  ul {
    margin: 0;
    padding: 0 20px;
    gap: 4rem;
    @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
      display: none;
    }
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  position: relative;
  top: 0;
  left: 0;
  height: 100px;
  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    display: none;
  }
  ul {
    padding: 0 40px;
    margin: 0 0;
  }
  img {
    max-height: 20px;
    width: auto;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    display: none;
  }
`;

export const IconBurger = styled.div`
  align-self: center;
  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: none;
  }
`;
