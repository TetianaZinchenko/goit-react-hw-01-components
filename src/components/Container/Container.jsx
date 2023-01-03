import PropTypes from 'prop-types';
import { Wrapper } from './Container.styled';

export const Container = ({ children }) => <Wrapper>{children}</Wrapper>;

Container.defaultProps = {
  children: [],
};

Container.propTypes = {
  children: PropTypes.node,
};
