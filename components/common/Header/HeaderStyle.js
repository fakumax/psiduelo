import styled from 'styled-components';

export const NavBar = styled.nav`
  display: flex;
  background-color: blue;
  height: 100px;
  justify-content: space-between;
  ul {
    display: flex;
    list-style: none;
    align-items: center;
    background-color: yellow;
    height: 100%;
    margin: 0;
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
