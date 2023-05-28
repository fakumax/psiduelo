import { PrismicLink, PrismicText } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';
import { PrismicNextImage } from '@prismicio/next';
import { LogoStyle, NavBar } from './HeaderStyle';

// import { Bounded } from './Bounded';

export const Header = ({ navigation }) => {
  console.log(navigation);
  console.log(navigation.data.slices);
  console.log(navigation.data.icons.iconimage);
  const { icons, slices } = navigation.data;

  console.log(icons);
  console.log(slices);
  console.log('fondo', navigation.data.backgroundimage);
  return (
    <div>
      {/* <PrismicLink href='/' className='text-xl font-semibold tracking-tight'>
          <PrismicText field={settings.data.siteTitle} />
        </PrismicLink> */}

      <NavBar>
        <div>
          <ul>
            {icons.map((item, index) => (
              <>
                <li key={`${index + 40}-${item.iconimage.alt}`}>
                  <PrismicLink field={navigation.data.logolink}>
                    <PrismicNextImage field={item.iconimage} priority={true} />
                  </PrismicLink>
                </li>
              </>
            ))}
          </ul>
        </div>

        <LogoStyle>
          <PrismicNextImage field={navigation.data.logoimage} priority={true} />
        </LogoStyle>
        <div>
          <ul>
            {slices.map((item, index) => (
              <li key={`${index + 20} `}>
                <PrismicNextImage field={item.slices} priority={true} />
              </li>
            ))}
          </ul>
        </div>
      </NavBar>
    </div>
  );
};
