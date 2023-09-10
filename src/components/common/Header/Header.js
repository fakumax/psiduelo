import { PrismicNextImage } from '@prismicio/next';
import { PrismicLink, PrismicText } from '@prismicio/react';
import { AiOutlineMenu } from 'react-icons/ai';
import {
  BgDiv,
  IconBurger,
  LeftContainer,
  LogoStyle,
  NavBar,
  RightContainer,
} from './HeaderStyle';
import { useState } from 'react';

export const Header = ({ navigation }) => {
  const { logoimage, navleft, navright, logolink } = navigation.data;

  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <NavBar>
      {/* NAVIGATION RIGHT*/}
      <RightContainer className={`links ${clicked ? 'active' : ''}`}>
        <ul>
          {navleft.map((item, index) => (
            <li key={index}>
              <PrismicLink onClick={handleClick} field={item.link}>
                <PrismicText field={item.name} />
              </PrismicLink>
            </li>
          ))}
        </ul>
      </RightContainer>
      {/* LOGO */}
      <LogoStyle>
        <PrismicLink field={logolink}>
          <PrismicNextImage field={logoimage} priority={true} />
        </PrismicLink>
      </LogoStyle>
      {/* NAVIGATION LEFT*/}
      <LeftContainer className={`links ${clicked ? 'active' : ''}`}>
        <ul>
          {navright.map((item, index) => (
            <li key={index}>
              <PrismicLink onClick={handleClick} field={item.link}>
                <PrismicText field={item.name} />
              </PrismicLink>
            </li>
          ))}
        </ul>
      </LeftContainer>
      <IconBurger clicked={clicked} handleClick={handleClick}>
        <AiOutlineMenu size={25} />
      </IconBurger>
      <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
    </NavBar>
  );
};
