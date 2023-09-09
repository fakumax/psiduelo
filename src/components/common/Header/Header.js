import { PrismicNextImage } from '@prismicio/next';
import { PrismicLink, PrismicText } from '@prismicio/react';
import { AiOutlineMenu } from 'react-icons/ai';
import { IconBurger, LogoStyle, NavBar, RightContainer } from './HeaderStyle';

export const Header = ({ navigation }) => {
  const { logoimage, navleft, navright, logolink } = navigation.data;

  return (
    <div>
      <NavBar>
        <RightContainer>
          {/* NAVIGATION LEFT*/}
          <div>
            <ul>
              {navleft.map((item, index) => (
                <li key={index}>
                  <PrismicLink field={item.link}>
                    <PrismicText field={item.name} />
                  </PrismicLink>
                </li>
              ))}
            </ul>
          </div>
          {/* LOGO */}
          <LogoStyle>
            <PrismicLink field={logolink}>
              <PrismicNextImage field={logoimage} priority={true} />
            </PrismicLink>
          </LogoStyle>
          {/* NAVIGATION RIGHT*/}
          <div style={{ width: 'min-content' }}>
            <ul>
              {navright.map((item, index) => (
                <li key={index}>
                  <PrismicLink field={item.link}>
                    <PrismicText field={item.name} />
                  </PrismicLink>
                </li>
              ))}
            </ul>
          </div>
          <IconBurger>
            <AiOutlineMenu size={25} />
          </IconBurger>
        </RightContainer>
      </NavBar>
    </div>
  );
};
