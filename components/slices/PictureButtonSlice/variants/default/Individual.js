import React from 'react';
import {
  Component1,
  Component2,
  Component3,
  Component4,
  Component5,
  Component6,
  Component7,
  Component8,
  Component9,
} from './IndividualStyle';

export const Individual = ({ id, children }) => {
  switch (id) {
    case '1':
      return <Component1>{children}</Component1>;
    case '2':
      return <Component2>{children}</Component2>;
    case '3':
      return <Component3>{children}</Component3>;
    case '4':
      return <Component4>{children}</Component4>;
    case '5':
      return <Component5>{children}</Component5>;
    case '6':
      return <Component6>{children}</Component6>;
    case '7':
      return <Component7>{children}</Component7>;
    case '8':
      return <Component8>{children}</Component8>;
    case '9':
      return <Component9>{children}</Component9>;
    default:
      return (
        <div>
          <h1>Error</h1>
        </div>
      );
  }
};
