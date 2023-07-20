import { PrismicLink, PrismicText } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';
import { PrismicNextImage } from '@prismicio/next';
import {
  IconBurger,
  LeftContainer,
  LogoStyle,
  NavBar,
  RightContainer,
} from './HeaderStyle';
import { AiOutlineMenu } from 'react-icons/ai';

export const Header = ({ navigation }) => {
  const { icons, slices, backgroundimage, colorlink } = navigation.data;
  const navLeft = slices.filter((item) => item.slice_type === 'nav_left');
  const navRight = slices.filter((item) => item.slice_type === 'nav_right');

  return (
    <div>
      <NavBar
        style={
          backgroundimage.url
            ? { backgroundImage: `url(${backgroundimage.url})` }
            : { backgroundColor: '#ffff' }
        }
      >
        {/* ICONS */}
        <LeftContainer>
          <ul>
            {icons.map((item, index) => (
              <li key={item.iconimage.alt} className={item.iconimage.alt}>
                <PrismicLink field={navigation.data.logolink}>
                  <PrismicNextImage field={item.iconimage} priority={true} />
                </PrismicLink>
              </li>
            ))}
          </ul>
        </LeftContainer>
        <RightContainer>
          {/* NAVIGATION LEFT*/}
          <div>
            <ul>
              {navLeft.map((item, index) => (
                <li key={index}>
                  <PrismicLink
                    style={{ color: colorlink || 'black' }}
                    field={item.primary.link}
                  >
                    <PrismicText field={item.primary.name} />
                  </PrismicLink>
                </li>
              ))}
            </ul>
          </div>
          {/* LOGO */}
          <LogoStyle>
            <PrismicNextImage field={navigation.data.logoimage} priority={true} />
          </LogoStyle>
          {/* NAVIGATION RIGHT*/}
          <div style={{ width: 'min-content' }}>
            <ul>
              {navRight.map((item, index) => (
                <li key={index}>
                  <PrismicLink
                    style={{ color: colorlink || 'black' }}
                    field={item.primary.link}
                  >
                    <PrismicText field={item.primary.name} />
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
