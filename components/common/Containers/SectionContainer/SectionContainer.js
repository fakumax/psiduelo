import PropTypes from 'prop-types';
import { SectionContainerBase } from './SectionContainerStyles';

const SectionContainer = ({ children, bgImage, ...rest }) => {
  return <SectionContainerBase {...rest}>{children}</SectionContainerBase>;
};

SectionContainer.propTypes = {
  children: PropTypes.element,
  rest: PropTypes.element,
};

SectionContainer.defaultProps = {};

export default SectionContainer;
