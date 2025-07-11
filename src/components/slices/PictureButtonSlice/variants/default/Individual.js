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
import { PrismicText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

export const Individual = ({ id, children, items }) => {
  switch (id) {
    case '1':
      return (
        <Component1>
          <div className="ImageContainer">
            <PrismicNextImage field={items.image} />
          </div>
          <div className="container">
            <div className="line1" />
            <div className="line2">
              <h3>
                <PrismicText field={items.text} />
              </h3>
            </div>
          </div>
        </Component1>
      );
    case '2':
      return (
        <Component2>
          <div className="container">
            <h3>
              <PrismicText field={items.text} />
            </h3>
            <div className="ImageContainer">
              <PrismicNextImage field={items.image} />
            </div>
          </div>
          <div className="line1" />
          <div className="line2" />
        </Component2>
      );
    case '3':
      return (
        <Component3>
          <div className="container">
            <div className="lines-1">
              <div className="line0" />
              <div className="line1" />
            </div>
            <div className="lines-2">
              <div className="line2" />
              <div className="line3" />
            </div>

            <h3>
              <PrismicText field={items.text} />
            </h3>
          </div>
        </Component3>
      );
    case '4':
      return (
        <Component4>
          <div className="firstSquare" />
          <div className="ImageContainer">
            <PrismicNextImage field={items.image} />
          </div>
          <div className="secondSquare">
            <h3>
              <PrismicText field={items.text} />
            </h3>
          </div>
        </Component4>
      );
    case '5':
      return (
        <Component5>
          <div className="ImageContainer">
            <PrismicNextImage field={items.image} />
          </div>

          <div className="secondSquare">
            <h3>
              <PrismicText field={items.text} />
            </h3>
          </div>
        </Component5>
      );
    case '6':
      return (
        <Component6>
          <div className="ImageContainer">
            <PrismicNextImage field={items.image} />
          </div>
          <div className="secondSquare">
            <h3>
              <PrismicText field={items.text} />
            </h3>
          </div>
        </Component6>
      );
    case '7':
      return (
        <Component7>
          <div className="firstSquare">
            <h3>
              <PrismicText field={items.text} />
            </h3>
          </div>
          <div className="ImageContainer">
            <PrismicNextImage field={items.image} />
          </div>
        </Component7>
      );
    case '8':
      return (
        <Component8>
          <div className="firstSquare">
            <h3>
              <PrismicText field={items.text} />
            </h3>
          </div>
          <div className="ImageContainer">
            <PrismicNextImage field={items.image} />
          </div>
        </Component8>
      );
    case '9':
      return (
        <Component9>
          <div className="lines-1">
            <div className="line0" />
            <div className="line1" />
          </div>
          <div className="ImageContainer">
            <PrismicNextImage field={items.image} />
          </div>
        </Component9>
      );
    default:
      return (
        <div>
          <h1>Error</h1>
        </div>
      );
  }
};
