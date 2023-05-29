import styled from 'styled-components';

export const NavBar = styled.nav`
  display: flex;
  background-color: blue;
  height: 100px;
  justify-content: center;
  ul {
    display: flex;
    list-style: none;
    align-items: center;
    background-color: yellow;
    height: 100%;
    margin: 0;
    gap: 1em;
  }
`;

export const IconStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoStyle = styled.div`
  position: relative;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    background-color: green;
  }
`;

export const RightContainer = styled.div`
  display: flex;
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 10%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100px;
  ul {
    padding: 0 40px;
    margin: 0 40px;
  }
  img {
    max-height: 20px;
    width: auto;
  }
`;
