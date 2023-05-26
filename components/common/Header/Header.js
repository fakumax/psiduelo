import { PrismicLink, PrismicText } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';
import { PrismicNextImage } from '@prismicio/next';

// import { Bounded } from './Bounded';

export const Header = ({ navigation }) => {
  //   console.log(navigation);
  return (
    <div>
      <div>
        <p>Logo</p>
        {/* <PrismicLink href='/' className='text-xl font-semibold tracking-tight'>
          <PrismicText field={settings.data.siteTitle} />
        </PrismicLink> */}
        <nav>
          <PrismicNextImage field={navigation.data.imagelogo} />
          <PrismicLink field={navigation.data.linklogo}>Link</PrismicLink>

          {/* <ul>
            {navigation.data?.links.map((item) => (
              <li
                key={prismicH.asText(item.label)}
                className='font-semibold tracking-tight text-slate-800'
              >
                <PrismicLink field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicLink>
              </li>
            ))}
          </ul> */}
        </nav>
      </div>
    </div>
  );
};
