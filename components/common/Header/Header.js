import { PrismicLink, PrismicText } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';
import { PrismicNextImage } from '@prismicio/next';
import { LeftContainer, LogoStyle, NavBar, RightContainer } from './HeaderStyle';

// import { Bounded } from './Bounded';

export const Header = ({ navigation }) => {
  console.log(navigation);
  console.log(navigation.data.slices);
  console.log(navigation.data.icons.iconimage);
  const { icons, slices } = navigation.data;

  console.log(icons);
  console.log(slices);
  console.log(slices.slice_type);
  console.log(slices[0].primary.link);
  console.log('fondo', navigation.data.backgroundimage);
  const navLeft = slices.filter((item) => item.slice_type === 'nav_left');
  const navRight = slices.filter((item) => item.slice_type === 'nav_right');

  console.log(navLeft);
  console.log(navRight);

  return (
    <div>
      {/* <PrismicLink href='/' className='text-xl font-semibold tracking-tight'>
          <PrismicText field={settings.data.siteTitle} />
        </PrismicLink> */}

      <NavBar style={{ backgroundImage: `url(${navigation.data.backgroundimage.url})` }}>
        {/* ICONS */}
        <LeftContainer>
          <ul>
            {icons.map((item, index) => (
              <>
                <li key={item.iconimage.alt} className={item.iconimage.alt}>
                  <PrismicLink field={navigation.data.logolink}>
                    <PrismicNextImage field={item.iconimage} priority={true} />
                  </PrismicLink>
                </li>
              </>
            ))}
          </ul>
        </LeftContainer>
        <RightContainer>
          {/* NAVIGATION LEFT*/}
          <div>
            <ul>
              {navLeft.map((item, index) => (
                <li key={index}>
                  <PrismicLink field={item.primary.link}>
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
                  <PrismicLink field={item.primary.link}>
                    <PrismicText field={item.primary.name} />
                  </PrismicLink>
                </li>
              ))}
            </ul>
          </div>
        </RightContainer>
      </NavBar>
    </div>
  );
};
