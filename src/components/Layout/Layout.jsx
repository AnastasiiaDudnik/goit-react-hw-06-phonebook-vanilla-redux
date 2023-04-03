import PropTypes from 'prop-types';
import { Container } from './Layout.styled';

export const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

Layout.PropType = {
  children: PropTypes.node.isRequired,
};
