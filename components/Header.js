import { PrismicLink, PrismicText } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';

export const Header = ({ navigation, settings }) => {
  // console.log('navigation', navigation);

  return (
    <div>
      <div className='flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 leading-none'>
        <PrismicLink href='/' className='text-xl font-semibold tracking-tight'>
          <PrismicText field={settings?.data?.siteTitle} />
        </PrismicLink>
        <nav>
          <ul className='flex flex-wrap gap-6 md:gap-10'>
            <p>wara</p>
            {/* {navigation.data?.links.map((item) => (
              <li
                key={prismicH.asText(item.label)}
                className='font-semibold tracking-tight text-slate-800'
              >
                <PrismicLink field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicLink>
              </li>
            ))} */}
          </ul>
        </nav>
      </div>
    </div>
  );
};
