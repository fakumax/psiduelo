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

export const Header = ({ navigation, show, setShow }) => {
  const { logoimage, navleft, navright, logolink } = navigation.data;
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <NavBar>
      <RightContainer className={`links`}>
        <ul>
          {navleft.map((item, index) => (
            <li key={index}>
              <PrismicLink field={item.link} className={item.name[0].text}>
                <PrismicText field={item.name} />
              </PrismicLink>
            </li>
          ))}
        </ul>
      </RightContainer>
      <LogoStyle>
        <PrismicLink field={logolink}>
          <PrismicNextImage field={logoimage} priority={true} />
        </PrismicLink>
      </LogoStyle>
      <LeftContainer className={`links`}>
        <ul>
          {navright.map((item, index) => (
            <li key={index}>
              <PrismicLink field={item.link} className={item.name[0].text}>
                <PrismicText field={item.name} />
              </PrismicLink>
            </li>
          ))}
        </ul>
      </LeftContainer>
      <IconBurger show={show} onClick={handleClick}>
        <AiOutlineMenu size={25} />
      </IconBurger>

      <BgDiv className={`initial ${show ? 'active' : ''}`}>
        <ul>
          {navleft.map((item, index) => (
            <li key={index}>
              <PrismicLink onClick={handleClick} field={item.link}>
                <PrismicText field={item.name} />
              </PrismicLink>
            </li>
          ))}
        </ul>
        <ul>
          {navright.map((item, index) => (
            <li key={index}>
              <PrismicLink onClick={handleClick} field={item.link} className={item.name}>
                <PrismicText field={item.name} />
              </PrismicLink>
            </li>
          ))}
        </ul>
      </BgDiv>
    </NavBar>
  );
};
